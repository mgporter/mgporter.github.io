import { useEffect, useRef, useState } from "preact/compat";
import { dispatcher } from "./Dispatcher";
import ProjectDetailsPage from "./ProjectDetailsPage";
import IconHolder from "./IconHolder";
import { C } from "../constants";
import { Outlet, Route, Routes, useParams } from "react-router-dom";
import projectService from "./ProjectService";

const useTransition = !C.IS_VERTICAL_SCREEN && C.IS_QUICK_CONNECTION;

export type SelectedProjectType = {
  div: HTMLElement | null, 
  idx: number, 
  hideIconsAction: () => void} 
| null;

export default function Main() {

  const [projectArray, setProjectArray] = useState(projectService.getProjectContainers());

  const urlParamName = useParams<{project: string}>();
  const initialProject = projectService.getProjectByName(urlParamName.project);
  const initialProjectObj = initialProject != undefined ? 
    {
      div: null,
      idx: initialProject.id,
      hideIconsAction: () => setShowIconHolder(false)
    }
  : null;

  console.log(initialProjectObj)

  const mainViewRef = useRef<HTMLDivElement>(null!);
  const iconHolderRef = useRef<HTMLDivElement>(null!);
  const [showIconHolder, setShowIconHolder] = useState(true);
  const [selectedProject, setSelectedProject] = useState<SelectedProjectType>(initialProjectObj);

  useEffect(() => {
    const unsubscribe = dispatcher.subscribe("projectTypeSelected", option => {
        closeProjectView();
        if (option.optionName === "All") {
          setProjectArray(projectService.resetAndGetProjectContainers());
        } else if (option.optionName === "Featured") {
          setProjectArray(projectService.getProjectContainersSortedByFeatured());
        } else {
          setProjectArray(projectService.getProjectContainersSortedByType(option.types));
        }
      });
    
    return unsubscribe;
  }, [])

  useEffect(() => {
    const unsubscribe = dispatcher.subscribe("projectSelected", (e) => {
      let div = e.div;
      if (!div && iconHolderRef.current != null) {
        div = iconHolderRef.current.querySelector(`.project[data-id="${e.idx}"]`);
      }
      openProjectView(div, e.idx);

      const scroll = e.scroll != undefined ? e.scroll : true;
      if (scroll) doScroll();
    })
    return unsubscribe;
  }, [])

  useEffect(() => {
    const unsubscribe = dispatcher.subscribe("scrollToMainTop", doScroll)
    return unsubscribe;
  })

  function doScroll() {
    const { top: mainTop } = mainViewRef.current.getBoundingClientRect();

    // Only continue if we are about one window height below the top of main
    if (window.scrollY < (mainTop + (window.innerHeight))) return;
    window.scrollTo({top: mainTop + window.scrollY, left: 0, behavior: "instant"});
  }

  function closeProjectView() {
    setShowIconHolder(true);
    setSelectedProject(null);
    dispatcher.dispatch("scrollToMainTop", null);
  }

  function openProjectView(divOfProject: HTMLElement | null, idx: number) {
    const hideIcons = () => setShowIconHolder(false);
    setSelectedProject({div: divOfProject, idx: idx, hideIconsAction: hideIcons});
  }


  return (
    <main 
      className="relative w-full pb-48 overflow-hidden"
      ref={mainViewRef}>

      {/* <Outlet /> */}

      {selectedProject && 
        <ProjectDetailsPage
          projectArray={projectArray}
          selectedProject={selectedProject}
          useTransition={useTransition}
          containerRef={mainViewRef}
          closeProjectAction={closeProjectView} />}

      {showIconHolder &&
        <IconHolder 
          iconHolderRef={iconHolderRef}
          projectArray={projectArray}
          selectedProject={selectedProject}
        />
      }

    </main>
  )
}