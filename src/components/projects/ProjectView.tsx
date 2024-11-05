import { useRef, useState } from "react"
import ProjectDetailsControls from "./ProjectDetailsControls";
import { MutableRefObject, useEffect } from "react";
import { LoaderFunction, useLoaderData, useNavigate } from "react-router-dom";
import { useProjectStore } from "./ProjectState";
import ProjectDetailsPage from "./ProjectDetailsPage";


export const projectLoader: LoaderFunction = ({ params }) => {
  return params.project || ""
}


// async function preloadImage(url: string): Promise<JSX.Element> {
//   return <img src={url} className="preloaded_img absolute size-0 top-0 left-0 hidden"></img>
// }

// Promise.all([img1, img2]).then(result => {
//   setPreloadedImgs([result[0], result[1]]);
// })


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
      "project_details_inner"
    );
  }

  function swipeToPrevProject() {
    setControlsEnabled(false);
    setTwoPhaseTransition(
      pageDetailsRef,
      "swipe_exit_right",
      "swipe_enter_left",
      () => {navigate(`/projects/${projects[indices.prev].url}`); selectPrevProject()},
      () => setControlsEnabled(true),
      "project_details_inner"
    );
  }



  return (
      <div className={`project_view z-[110] inset-0 py-8 px-2 items-stretch`}>

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