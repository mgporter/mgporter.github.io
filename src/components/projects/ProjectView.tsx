import { useRef, useState } from "react"
import ProjectDetailsControls from "./ProjectDetailsControls";
import { MutableRefObject, useEffect } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import { useProjectStore } from "./ProjectState";
import ProjectDetailsPage from "./ProjectDetailsPage";
import { Helmet } from "react-helmet";
import { useAppStore } from "../AppState";
import useImagePreload from "../../utils/ImagePreload";


const setTwoPhaseTransition = (
  elementRef: MutableRefObject<HTMLElement>,
  actionOneClass: string,
  actionTwoClass: string,
  halfwayCallback: () => void,
  finalCallback: () => void,
  targetClass?: string
) => {
  elementRef.current.onanimationend = (e1) => {

    if (targetClass && (e1.target as HTMLElement).className.includes(targetClass)) {
      
      elementRef.current.classList.remove(actionOneClass);
      halfwayCallback();
  
      elementRef.current.onanimationend = (e2) => {
        if (targetClass && (e2.target as HTMLElement).className.includes(targetClass)) {
          elementRef.current.classList.remove(actionTwoClass);
          finalCallback();
        }
      }
  
      elementRef.current.classList.add(actionTwoClass);

    }
    
  };
  
  elementRef.current.classList.add(actionOneClass);
}





export default function ProjectView() {

  const projectName = useLoaderData() as string;
  const { projects, indices, selectNextProject, selectPrevProject, selectProjectByIndex } = useProjectStore()
  const navigate = useNavigate();
  const pageDetailsRef = useRef<HTMLDivElement>(null!);
  const [controlsEnabled, setControlsEnabled] = useState(true);
  const { enableEffects } = useAppStore()
  const { preload } = useImagePreload()

  const projectIndex = projects.findIndex(p => p.url === projectName)

  // Return to /projects if the url param is not found
  useEffect(() => {
    if (projectIndex === -1) {
      navigate("/projects")
    }
  }, [navigate, projectIndex])

  // If the user directly navigated to this page, make sure
  // the proper project is selected.
  useEffect(() => {
    if (indices.current !== projectIndex) {
      selectProjectByIndex(projectIndex);
    }
  }, [indices, selectProjectByIndex, projectIndex])

  // Preload next and prev images
  useEffect(() => {
    preload(projects[indices.next].project.preview.source)
    preload(projects[indices.prev].project.preview.source)
  }, [projects, indices, preload])

  // Scroll to the top on project selection
  useEffect(() => {
    const pageRect = document.querySelector(".project_view")?.getBoundingClientRect();
    const pageTop = pageRect?.top || 0;

    // Only scroll if we are about one window height below the top of main
    if (window.scrollY > (pageTop + window.innerHeight)) {
      window.scrollTo({ top: pageTop + window.scrollY, behavior: enableEffects ? "smooth" : "instant" });
    }
  }, [enableEffects, projectIndex, indices])


  if (projectIndex === -1) {
    return
  }


  const project = projects[projectIndex].project
  

  function swipeToNextProject() {
    const goToNext = () => {
      navigate(`/projects/${projects[indices.next].url}`);
      selectNextProject()
    }

    if (enableEffects) {
      setControlsEnabled(false);
      setTwoPhaseTransition(
        pageDetailsRef,
        "swipe_exit_left",
        "swipe_enter_right",
        goToNext,
        () => setControlsEnabled(true),
        "project_details_inner"
      );
    } else {
      goToNext()
    }
  }

  function swipeToPrevProject() {
    const goToPrev = () => {
      navigate(`/projects/${projects[indices.prev].url}`);
      selectPrevProject()
    }

    if (enableEffects) {
      setControlsEnabled(false);
      setTwoPhaseTransition(
        pageDetailsRef,
        "swipe_exit_right",
        "swipe_enter_left",
        goToPrev,
        () => setControlsEnabled(true),
        "project_details_inner"
      );
    } else {
      goToPrev()
    }
  }



  return (
      <div className={`project_view z-[110] inset-0 py-8 px-2 mini:px-0 items-stretch`}>

      <Helmet>
        <title>{project.name} - mgporter</title>
      </Helmet>

        <ProjectDetailsControls 
          swipeNextAction={swipeToNextProject} 
          swipePrevAction={swipeToPrevProject} 
          enableControls={controlsEnabled} 
        />

        <ProjectDetailsPage project={project} ref={pageDetailsRef} />

        <ProjectDetailsControls 
          swipeNextAction={swipeToNextProject} 
          swipePrevAction={swipeToPrevProject} 
          enableControls={controlsEnabled} 
        />

      </div>
  )
}