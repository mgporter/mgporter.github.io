import { useRef, useState } from "preact/compat"
import { Project } from "./PROJECTS";
import ProjectDetailsControls from "./ProjectDetailsControls";
import { VNode } from "preact";
import ProjectTransition from "./ProjectTransition";
import { MutableRef, useEffect } from "preact/hooks";
import { dispatcher } from "./Dispatcher";
import { SelectedProjectType } from "./Main";
import { C } from "../constants";
import ProjectPreview from "./ProjectPreview";

interface ProjectDetailsPageProps {
  projectArray: Project[];
  selectedProject: SelectedProjectType;
  useTransition: boolean;
  containerRef: MutableRef<HTMLDivElement>;
  closeProjectAction: () => void;
}

async function preloadImage(url: string): Promise<VNode<HTMLImageElement>> {
  return <img src={url} className="preloaded_img absolute size-0 top-0 left-0 hidden"></img>
}

const projectLink = "transition-colors text-xl rounded-sm bg-blue-400/80 hover:bg-blue-700 ml-4 mb-1 px-4 py-1";

let isInitialOpening = true;

export default function ProjectDetailsPage({
  projectArray,
  selectedProject,
  useTransition,
  containerRef,
  closeProjectAction,
}: ProjectDetailsPageProps) {

  if (selectedProject == null) return <></>;

  const [startTransition, setStartTransition] = useState(false);
  const pageContentRef = useRef<HTMLDivElement>(null!);
  const projectPreviewRef = useRef<HTMLElement>(null!);
  const projectDetailsContainerRef = useRef<HTMLDivElement>(null!);
  const [preloadedImgs, setPreloadedImgs] = 
    useState<[VNode<HTMLImageElement>, VNode<HTMLImageElement>] | null>(null);

  useEffect(() => {
    if (isInitialOpening && !useTransition) {
      dispatcher.dispatch("scrollToMainTop", null);
      isInitialOpening = false;
    }
    
    return () => {
      isInitialOpening = true;
    }
  }, [])

  const index = selectedProject.idx;
  const limit = projectArray.length;
  const project = projectArray[index];
  const prevIndex = (index + limit - 1) % limit;
  const nextIndex = (index + 1) % limit;

  let 
    containerProps = "", 
    startVisible = true,
    startWithControlsEnabled = true;

  if (isInitialOpening) {

    // Note: we abandon the transition if we couldn't 
    // find a ProjectIcon div to transition from
    if (useTransition && selectedProject.div != null) {
      containerProps = "project_delayed_fadein absolute";
      startVisible = false;
      startWithControlsEnabled = false;

      selectedProject.div.onanimationend = (e) => {
        if (e.target instanceof HTMLElement) {
          e.target.classList.remove("thumbnail_remain_then_remove");
          e.target.onanimationend = null;
        }
      }
      selectedProject.div.classList.add("thumbnail_remain_then_remove");
      
    }
    else {
      useTransition = false;
      containerProps = "", 
      startVisible = true,
      startWithControlsEnabled = true;
      if (C.HIDE_ICONS_ON_PROJECT_PAGE) selectedProject?.hideIconsAction();
    }
  }

  function onTransitionEnd() {
    projectDetailsContainerRef.current.style.position = "static";
    isInitialOpening = false;
    if (selectedProject) {
      if (C.HIDE_ICONS_ON_PROJECT_PAGE) selectedProject.hideIconsAction();
    }
    dispatcher.dispatch("scrollToMainTop", null);
    dispatcher.dispatch("enableProjectControls", true);
  }

  function onMainImageLoad() {
    if (isInitialOpening && useTransition) setStartTransition(true);
    const img1 = preloadImage(projectArray[nextIndex].preview.source);
    const img2 = preloadImage(projectArray[prevIndex].preview.source);
    Promise.all([img1, img2]).then(result => {
      setPreloadedImgs([result[0], result[1]]);
    })
  }

  return (
    <>
      {(startTransition && selectedProject.div) && 
        <ProjectTransition
          thumbnailDiv={selectedProject.div} 
          containerRef={containerRef}
          projectPreviewRef={projectPreviewRef}
          onEffectComplete={onTransitionEnd}
          tempImage={<img 
            src={project.preview.type === "image" ? project.preview.source : project.imageThumbnailSrc} 
            alt={projectArray[index].name} 
            className="w-full aspect-auto"></img>}
          />}

      <div className={`project_details_content z-[110] inset-0
        py-8 px-2 items-stretch ${containerProps}`}
        ref={projectDetailsContainerRef}>

        <div className="mb-8">
          <ProjectDetailsControls
            index={{cur: index, prev: prevIndex, next: nextIndex}}
            projectArray={projectArray}
            enableControls={startWithControlsEnabled}
            pageContentRef={pageContentRef}
            closeDetails={closeProjectAction}
          />
        </div>


        <div className="project_details_inner flex flex-col gap-4 items-stretch" ref={pageContentRef}>

          <div className="flex flex-col mx-4 vert:mx-0 gap-2 w-full px-2">
            <h1 className="text-4xl font-bold text-blue-200">{project.name} 
              {project.featured && <span className="text-xl ml-3 text-yellow-200/90">(featured)</span>}
            </h1>
            <h2>{project.heading}</h2>
          </div>

          <ul className="mx-16 vert:mx-8 max-w-[30rem] list-['\21E8\0020\0020']">
            {project.livePreviewUrl && <a href={project.livePreviewUrl} target="_blank"><li className={projectLink}>Go to live preview</li></a>}
            <a href={project.sourceUrl} target="_blank"><li className={projectLink}>View the source on Github</li></a>
          </ul>

          <ProjectPreview 
            project={project} 
            onLoad={onMainImageLoad} 
            startVisible={startVisible} 
            ref={projectPreviewRef} />

          <ul className="flex items-center bg-indigo-950 border-t border-indigo-600 
            mx-8 vert:mx-0 flex-wrap mb-4 p-2 gap-4">
            <li className="px-2 font-bold">Tech stack:</li>
            {project.types.map(type => (
              <li className=" bg-slate-300 text-black px-2 py-1 rounded-md font-medium">{type}</li>
            ))}
          </ul>
          
          <div className="flex flex-col gap-4 bg-blue-950 rounded-lg p-4">
            {project.description}
          </div>

        </div>

        <div className="mt-8">
          <ProjectDetailsControls
            index={{cur: index, prev: prevIndex, next: nextIndex}}
            projectArray={projectArray}
            enableControls={startWithControlsEnabled}
            pageContentRef={pageContentRef}
            closeDetails={closeProjectAction}
          />
        </div>
        
        {/* Add preloaded images */}
        {preloadedImgs && 
          <>
            {preloadedImgs[0]}
            {preloadedImgs[1]}
          </>}

      </div>
    
    </>
    
  )
}