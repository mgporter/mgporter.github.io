import { useRef } from "react";
import IconHolder from "./projects/IconHolder";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { ProjectContainer } from "./projects/ProjectState";
import { useProjectStore } from "./projects/ProjectState";
import doBubbleTransition from "./projects/BubbleTransition";

// const useTransition = !C.IS_VERTICAL_SCREEN && C.IS_QUICK_CONNECTION;

export type SelectedProjectType = {
  idx: number,
  id: number
};

export default function ProjectSection() {

  const { selectProjectByName } = useProjectStore()
  const navigate = useNavigate();
  const location = useLocation();


  const projectSectionRef = useRef<HTMLDivElement>(null!);
  const iconHolderRef = useRef<HTMLDivElement>(null!);

  function onProjectSelected(project: ProjectContainer) {

    const navigateToPage = () => {
      selectProjectByName(project.url)
      navigate(`/projects/${project.url}`)
    }

    if (location.pathname === "/projects") {
      doBubbleTransition(project, projectSectionRef, navigateToPage)
      console.log("start transition")
    } else {
      navigateToPage()
    }

  }

  // useEffect(() => {
  //   const unsubscribe = dispatcher.subscribe("projectTypeSelected", option => {
  //       closeProjectView();
  //       if (option.optionName === "All") {
  //         setProjectArray(projectService.resetAndGetProjectContainers());
  //       } else if (option.optionName === "Featured") {
  //         setProjectArray(projectService.getProjectContainersSortedByFeatured());
  //       } else {
  //         setProjectArray(projectService.getProjectContainersSortedByType(option.types));
  //       }
  //     });
    
  //   return unsubscribe;
  // }, [])

  // useEffect(() => {
  //   const unsubscribe = dispatcher.subscribe("projectSelected", (e) => {


  //     const scroll = e.scroll != undefined ? e.scroll : true;
  //     if (scroll) doScroll();

  //     navigate(projectArray[e.idx].url);


  //   })
  //   return unsubscribe;
  // }, [projectArray])

  // useEffect(() => {
  //   const unsubscribe = dispatcher.subscribe("scrollToMainTop", doScroll)
  //   return unsubscribe;
  // })

  // function doScroll() {
  //   const { top: mainTop } = mainViewRef.current.getBoundingClientRect();

  //   // Only continue if we are about one window height below the top of main
  //   if (window.scrollY < (mainTop + (window.innerHeight))) return;
  //   window.scrollTo({top: mainTop + window.scrollY, left: 0, behavior: "instant"});
  // }

  // function closeProjectView() {
  //   setShowIconHolder(true);
  //   dispatcher.dispatch("scrollToMainTop", null);
  //   navigate("");
  // }

  return (
    <main 
      className="relative w-full pb-48 overflow-hidden"
      ref={projectSectionRef}>

      <Outlet />

      <IconHolder
        onProjectSelected={onProjectSelected}
        iconHolderRef={iconHolderRef}
      />

    </main>
  )
}