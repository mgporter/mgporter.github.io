import { useRef, useState } from "react";
import { ProjectContainer } from "./ProjectState";
import useImagePreload from "../../utils/ImagePreload";
import { touchscreenOnly } from "../../utils/config";
import clsx from "clsx";

interface ProjectIconProps {
  projectContainer: ProjectContainer;
  selected: boolean;
  onProjectSelected: () => void;
}

const MAX_TYPES = 5;

export default function ProjectIcon({ projectContainer, selected, onProjectSelected }: ProjectIconProps) {

  const iconRef = useRef<HTMLDivElement>(null!);
  const [loading, setLoading] = useState(true);
  const { preload } = useImagePreload()
  const project = projectContainer.project;

  function imageLoaded() {
    setLoading(false);
  }

  const loadOpacity = loading ? " opacity-0" : " ";

  return (
    <div 
      data-id={projectContainer.id} 
      onClick={onProjectSelected} 
      onMouseEnter={() => preload(project.preview.source)}
      className={`project group relative aspect-[2.2] w-64 mini:w-full mini:mx-1 mini:max-w-96 overflow-hidden 
        select-none border-2 transition-all active:brightness-150 box-content 
        ${selected ? "cursor-default pointer-events-none " : "cursor-pointer "}
        ${projectContainer.style === "faded" ? " opacity-60" : " "}
        ${projectContainer.style === "emphasized" ? " border-violet-100 scale-105" : " border-transparent"}
        ${loading ? " border-blue-600 bg-white/10" : " "}
        ${selected ? " border-yellow-400 brightness-50" : " "} `}
      ref={iconRef}>

      <p className={clsx(
        "icontitle absolute top-1 left-1 z-20 px-[2px] rounded-sm",
        "group-hover:opacity-100 text-base font-semibold text-white bg-black/40",
        {
          "opacity-0": !touchscreenOnly && !loading && !selected,
          "opacity-50": loading
        }
      )}>{project.name} {project.status === "featured" && "★"} {project.status === "old" && "(old)"}</p>

      <div className={`absolute bottom-1 left-1 z-20 text-xs flex gap-2 text-rose-100
        ${loadOpacity} transition-opacity`}>
        {Array.from(project.types).slice(0, MAX_TYPES).map(type => (
          <p key={type} className="bg-black/40 px-[2px] py-[1px] rounded-sm text-xs">{type}</p>
        ))}
      </div>

      <img 
        className={`relative z-10 w-full 
          group-hover:contrast-100 group-hover:brightness-100 transition-opacity
          ${loadOpacity}
          ${selected ? " brightness-50 " : " "}
          ${project.status === "old" ? "contrast-[70%] brightness-[0.6]" : "contrast-[90%] brightness-[0.9] "}`}
        style={{aspectRatio: project.preview.dimensions[0] / project.preview.dimensions[1], verticalAlign: "middle"}}
        src={project.imageThumbnailSrc}
        alt={project.name}
        onLoad={imageLoaded}
      />
      
    </div>
  )

}