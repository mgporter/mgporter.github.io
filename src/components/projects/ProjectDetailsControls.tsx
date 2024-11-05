import { useProjectStore } from "./ProjectState";
import { Link } from "react-router-dom";

interface ProjectDetailsControlsProps {
  swipeNextAction: () => void;
  swipePrevAction: () => void;
  enableControls: boolean;
}

const controlDivStyle = "group flex justify-center items-center gap-2 mini:justify-self-stretch \
  mini:row-start-2 p-2 cursor-pointer rounded-xl text-indigo-50/90 text-xl transition-colors \
  border-2 border-indigo-50/30 \
  hover:border-yellow-200/60 hover:text-yellow-300 \
  active:bg-sky-300/30 "

const controlLabelStyle = "flex items-center gap-2 px-2 font-bold";

export default function ProjectDetailsControls({
  swipeNextAction,
  swipePrevAction,
  enableControls
}: ProjectDetailsControlsProps) {

  const { projects, indices } = useProjectStore()



  return (
    <div className={`grid grid-cols-3 gap-8 px-8 select-none
      md:gap-0 md:px-0 
      mini:mb-12 mini:gap-y-4 mini:auto-rows-min mini:grid-cols-2 mini:gap-x-4
      ${enableControls ? " " : " pointer-events-none"}`}>
      

      <a 
        className={controlDivStyle + " mini:flex-col justify-self-start"}
        onClick={swipePrevAction}>
        <div className={controlLabelStyle}>
          <span>❮❮</span>
          <span>Back</span>
        </div>
        <img 
          src={projects[indices.prev].project.imageThumbnailSrc} 
          className="h-10 brightness-90 aspect-video object-cover rounded-sm border border-indigo-50/30">
        </img>
      </a>

      <Link to="/projects"
        className="group h-full flex items-center justify-center gap-2 cursor-pointer pl-6 pr-3 rounded-xl font-bold 
        justify-self-center mini:row-start-1 mini:col-span-2 mini:w-full
        transition-colors text-indigo-50 border-2 border-indigo-50/30
        hover:text-orange-500 hover:border-orange-800
        active:bg-sky-300/30 active:text-orange-500">
          <span className="text-xl">Close</span>
          <p className="text-4xl pb-2 my-[-6px]">×</p>
      </Link>

      <a
        className={controlDivStyle + " mini:flex-col-reverse justify-self-end"}
        onClick={swipeNextAction}>
        <img 
          src={projects[indices.next].project.imageThumbnailSrc} 
          className="h-10 brightness-90 aspect-video object-cover rounded-sm border border-indigo-50/30">
        </img>
        <div className={controlLabelStyle}>
          <span>Next</span>
          <span>❯❯</span>
        </div>
      </a>

      
    </div>
  )
}