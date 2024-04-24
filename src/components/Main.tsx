import { useEffect, useRef, useState } from "preact/compat";
import { projects } from "./PROJECTS"
import { dispatcher } from "./Dispatcher";
import ProjectDetailsPage from "./ProjectDetailsPage";
import IconHolder from "./IconHolder";
import { C } from "../constants";

const useTransition = !C.IS_VERTICAL_SCREEN && C.IS_QUICK_CONNECTION;

export type SelectedProjectType = {
  div: HTMLElement | null, 
  idx: number, 
  hideIconsAction: () => void} 
  | null;

export default function Main() {

  const [projectArray, setProjectArray] = useState(projects);
  const mainViewRef = useRef<HTMLDivElement>(null!);
  const iconHolderRef = useRef<HTMLDivElement>(null!);
  const [showIconHolder, setShowIconHolder] = useState(true);
  const [selectedProject, setSelectedProject] = useState<SelectedProjectType>(null);

  useEffect(() => {
    const unsubscribe = dispatcher.subscribe("projectTypeSelected", types => {

        closeProjectView();

        const projectsCopy = [...projects];
        if (types.length === 0) {
          projectsCopy.forEach(x => x.style = "default")
          setProjectArray(projectsCopy);  // Set to default
          return;
        }
        projectsCopy.sort((a, b) => {
          let firstValid = a.types.includes(types[0]);  // Sort by first type
          let secondValid = b.types.includes(types[0]);

          if (types.length === 2) {
            firstValid = firstValid || a.types.includes(types[1]);  // If another type was given, check for it too
            secondValid = secondValid || b.types.includes(types[1]);
          }

          a.style = firstValid ? "emphasized" : "faded";   // set selected if they are part of the selection
          b.style = secondValid ? "emphasized" : "faded";
    
          if (firstValid && !secondValid) return -1;
          else if (!firstValid && secondValid) return 1;
          else return 0;
        });
        setProjectArray(projectsCopy);

      });
    
    return unsubscribe;
  }, [])

  useEffect(() => {
    const unsubscribe = dispatcher.subscribe("selectFeatured", () => {

      closeProjectView();

      const projectsCopy = [...projects];
      projectsCopy.forEach(x => x.featured ? x.style = "emphasized" : x.style = "faded");
      setProjectArray(projectsCopy);
    })
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