import { useEffect, useRef, useState } from "react";
import { dispatcher } from "./Dispatcher";
import ProjectDetailsPage from "./ProjectDetailsPage";
import IconHolder from "./IconHolder";
import { C } from "../constants";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import projectService from "./ProjectService";

const useTransition = !C.IS_VERTICAL_SCREEN && C.IS_QUICK_CONNECTION;

export type SelectedProjectType = {
  idx: number,
  id: number
};

export default function Main() {

  const [projectArray, setProjectArray] = useState(projectService.getProjectContainers());

  const urlParamName = useParams<{project: string}>();
  const navigate = useNavigate();
  const location = useLocation();

  const initialProject = projectService.getProjectByName(urlParamName.project);
  
  let selectedProject: SelectedProjectType | null;

  if (initialProject) {
    selectedProject = {
      id: initialProject.id,
      idx: projectArray.findIndex(x => x.id === initialProject.id),
    }
  }
  else {
    selectedProject = null;

    // If a project is not found for this url, and we are not on
    // the base PROJECTS url, then redirect to the PROJECTS url
    if (location.pathname != C.PROJECT_PATH) {
      navigate(C.PROJECT_PATH);
    }
    
  }


  const mainViewRef = useRef<HTMLDivElement>(null!);
  const iconHolderRef = useRef<HTMLDivElement>(null!);
  const [showIconHolder, setShowIconHolder] = useState(true);



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


      const scroll = e.scroll != undefined ? e.scroll : true;
      if (scroll) doScroll();

      navigate(projectArray[e.idx].url);


    })
    return unsubscribe;
  }, [projectArray])

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
    dispatcher.dispatch("scrollToMainTop", null);
    navigate("");
  }


  return (
    <main 
      className="relative w-full pb-48 overflow-hidden"
      ref={mainViewRef}>

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