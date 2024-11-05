import { useRef, useState } from "react";
import { ProjectContainer } from "../ProjectService";
import { Link } from "react-router-dom";

interface ProjectIconProps {
  projectContainer: ProjectContainer;
  selected: boolean;
  onProjectSelected: () => void;
}

const MAX_TYPES = 5;

export default function ProjectIcon({ projectContainer, selected, onProjectSelected }: ProjectIconProps) {

  const iconRef = useRef<HTMLDivElement>(null!);
  const [loading, setLoading] = useState(true);
  const project = projectContainer.project;

  function imageLoaded() {
    setLoading(false);
  }

  const loadOpacity = loading ? " opacity-0" : " ";

  return (
    // <Link to={`/projects/${projectContainer.url}`} className={`${selected ? "cursor-default pointer-events-none " : "cursor-pointer "}`}>
      // <div data-id={projectContainer.id} onClick={onClick} 
      <div data-id={projectContainer.id} onClick={onProjectSelected} 
        className={`project group relative aspect-[2.2] w-64 mini:w-3/4 mini:max-w-96 overflow-hidden 
          select-none border-2 transition-all
          ${selected ? "cursor-default pointer-events-none " : "cursor-pointer "}
          ${projectContainer.style === "faded" ? " opacity-60" : " "}
          ${projectContainer.style === "emphasized" ? " border-violet-100 scale-105" : " border-transparent"}
          ${loading ? " border-blue-600 bg-white/10" : " "}
          ${selected ? " border-yellow-400 scale-105 brightness-50" : " "} `}
        ref={iconRef}>

        <p className={`icontitle absolute top-1 left-1 z-20 px-[2px] rounded-sm font-semibold text-white
          group-hover:opacity-100 text-base ${loading ? " opacity-50" : " opacity-0 bg-black/40"}
          ${selected ? " opacity-100" : " "}`}>{project.name} {project.featured && "★"}</p>

        <div className={`absolute bottom-1 left-1 z-20 text-xs flex gap-2 text-rose-100
          ${loadOpacity} transition-opacity`}>
          {Array.from(project.types).slice(0, MAX_TYPES).map(type => (
            <p key={type} className="bg-black/40 px-[2px] py-[1px] rounded-sm text-xs">{type}</p>
          ))}
        </div>

        <img 
          className={`relative z-10 w-full aspect-auto contrast-[90%] brightness-90 
            group-hover:contrast-100 group-hover:brightness-100 transition-opacity
            ${loadOpacity}
            ${selected ? " brightness-50" : " "}`}
          src={project.imageThumbnailSrc}
          alt={project.name}
          onLoad={imageLoaded}
        />
        
      </div>
    // </Link>
  )

}