import { useRef, useState } from "react"
import ProjectDetailsControls from "./ProjectDetailsControls";
import { JSX } from "react";
import ProjectTransition from "../ProjectTransition";
import { MutableRefObject, useEffect } from "react";
import { dispatcher } from "../Dispatcher";
import { SelectedProjectType } from "../ProjectSection";
import ProjectPreview from "../ProjectPreview";
import { ProjectContainer } from "../ProjectService";
import { LoaderFunction, Navigate, Outlet, useLoaderData, useNavigate } from "react-router-dom";
import projectService from "../ProjectService";
import { getNextIndex, useProjectStore } from "./ProjectState";
import ProjectDetailsPage from "./ProjectDetailsPage";

// interface ProjectDetailsPageProps {
//   projectArray: ProjectContainer[];
//   selectedProject: SelectedProjectType;
//   useTransition: boolean;
//   containerRef: MutableRefObject<HTMLDivElement>;
//   closeProjectAction: () => void;
// }

export const projectLoader: LoaderFunction = ({ params }) => {
  return params.project || ""
}

// interface ProjectDetailsPageProps {
//   projectName: string;
// }

async function preloadImage(url: string): Promise<JSX.Element> {
  return <img src={url} className="preloaded_img absolute size-0 top-0 left-0 hidden"></img>
}


const setTwoPhaseTransition = (
  elementRef: MutableRefObject<HTMLElement>,
  actionOneClass: string,
  actionTwoClass: string,
  halfwayCallback: () => void,
  finalCallback: () => void
) => {
  elementRef.current.onanimationend = (e1) => {

    if ((e1.target as HTMLElement).className.includes("project_details_inner")) {
      
      elementRef.current.classList.remove(actionOneClass);
      halfwayCallback();
  
      elementRef.current.onanimationend = (e2) => {
        if ((e2.target as HTMLElement).className.includes("project_details_inner")) {
          elementRef.current.classList.remove(actionTwoClass);
          finalCallback();
        }
      }
  
      elementRef.current.classList.add(actionTwoClass);

    }
    
  };
  
  elementRef.current.classList.add(actionOneClass);
}








// const  isInitialOpening = true;

export default function ProjectView() {

  const projectName = useLoaderData() as string;
  const { projects, indices, selectNextProject, selectPrevProject } = useProjectStore()
  const navigate = useNavigate();
  const pageDetailsRef = useRef<HTMLDivElement>(null!);
  const [controlsEnabled, setControlsEnabled] = useState(true);

  const projectIndex = projects.findIndex(p => p.url === projectName)

  // Return to /projects if the url param is not found
  useEffect(() => {
    if (projectIndex === -1) {
      navigate("/projects")
    }
  }, [navigate, projectIndex])

  if (projectIndex === -1) {
    return
  }

  const project = projects[projectIndex].project
  


  function swipeToNextProject() {
    setControlsEnabled(false);
    setTwoPhaseTransition(
      pageDetailsRef,
      "swipe_exit_left",
      "swipe_enter_right",
      () => {navigate(`/projects/${projects[indices.next].url}`); selectNextProject()},
      () => setControlsEnabled(true),
    );
  }

  function swipeToPrevProject() {
    setControlsEnabled(false);
    setTwoPhaseTransition(
      pageDetailsRef,
      "swipe_exit_right",
      "swipe_enter_left",
      () => {navigate(`/projects/${projects[indices.prev].url}`); selectPrevProject()},
      () => setControlsEnabled(true)
    );
  }

  // function swipe(action: "goforward" | "goback") {
  //   dispatcher.dispatch("enableProjectControls", false);
  //   dispatcher.dispatch("scrollToMainTop", null);

  //   let newIndex, enterAction, exitAction;

  //   if (action === "goforward") {
  //     newIndex = index.next;
  //     exitAction = "swipe_exit_left";
  //     enterAction = "swipe_enter_right";
  //   } else {
  //     newIndex = index.prev;
  //     exitAction = "swipe_exit_right";
  //     enterAction = "swipe_enter_left";
  //   }

  //   pageContentRef.current.onanimationend = (e) => {
  //     if ((e.target as HTMLElement).className.includes("project_details_inner")) {
  //       pageContentRef.current.classList.remove(exitAction);

  //       pageContentRef.current.onanimationend = (e) => {
  //         if ((e.target as HTMLElement).className.includes("project_details_inner")) {
  //           pageContentRef.current.classList.remove(enterAction);
  //           dispatcher.dispatch("enableProjectControls", true);
  //         }
  //       }
  //       pageContentRef.current.classList.add(enterAction);

  //       dispatcher.dispatch("projectSelected", {idx: newIndex, scroll: false});
  //       // navigate(projectArray[newIndex].url);

  //     }
  //   };

  //   pageContentRef.current.classList.add(exitAction);
  // }


  // let 
  //   containerProps = "", 
  //   startVisible = true,
  //   startWithControlsEnabled = true;

  // if (isInitialOpening) {

  //   // Note: we abandon the transition if we couldn't 
  //   // find a ProjectIcon div to transition from
  //   if (useTransition && selectedProjectIconDiv) {
  //     containerProps = "project_delayed_fadein absolute";
  //     startVisible = false;
  //     startWithControlsEnabled = false;

  //     selectedProjectIconDiv.onanimationend = (e) => {
  //       if (e.target instanceof HTMLElement) {
  //         e.target.classList.remove("thumbnail_remain_then_remove");
  //         e.target.onanimationend = null;
  //       }
  //     }
  //     selectedProjectIconDiv.classList.add("thumbnail_remain_then_remove");
      
  //   }
  //   else {
  //     useTransition = false;
  //     containerProps = "";
  //     startVisible = true;
  //     startWithControlsEnabled = true;
  //     // if (C.HIDE_ICONS_ON_PROJECT_PAGE) selectedProject?.hideIconsAction();
  //   }
  // }

  function onTransitionEnd() {
    // projectDetailsContainerRef.current.style.position = "static";
    // isInitialOpening = false;
    // // if (selectedProject) {
    // //   if (C.HIDE_ICONS_ON_PROJECT_PAGE) selectedProject.hideIconsAction();
    // // }
    // dispatcher.dispatch("scrollToMainTop", null);
    // dispatcher.dispatch("enableProjectControls", true);
    // setStartTransition(false);
    // onPageLoaded();
  }

  function onMainImageLoad() {
    // if (isInitialOpening && useTransition) setStartTransition(true);
    // else if (isInitialOpening && !useTransition) onPageLoaded();
    // const img1 = preloadImage(projectArray[nextIndex].project.preview.source);
    // const img2 = preloadImage(projectArray[prevIndex].project.preview.source);
    // Promise.all([img1, img2]).then(result => {
    //   setPreloadedImgs([result[0], result[1]]);
    // })
  }

  // function onPageLoaded() {
  //   navigate(projectArray[index].url);
  // }

  return (
      <div className={`project_details_content z-[110] inset-0 py-8 px-2 items-stretch`}>

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