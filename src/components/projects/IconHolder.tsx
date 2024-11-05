import { MutableRefObject, useEffect } from "react";
import ProjectIcon from "./ProjectIcon";
import { dispatcher } from "../Dispatcher";
import { SelectedProjectType } from "../ProjectSection";
import { ProjectContainer } from "../ProjectService";
import { useProjectStore } from "./ProjectState";
import { useLocation } from "react-router-dom";

interface IconHolderProps {
  iconHolderRef: MutableRefObject<HTMLDivElement>;
  onProjectSelected: (project: ProjectContainer) => void;
}

export default function IconHolder({ iconHolderRef, onProjectSelected }: IconHolderProps) {

  const { projects, hasSelection, unselectProject, selectProjectByName, indices } = useProjectStore();
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/projects") {
      unselectProject();
    }
  }, [location.pathname, unselectProject])




  // function dispatchProjectSelectEvent(index: number) {
  //   dispatcher.dispatch("projectSelected", {idx: index});
  // }

  return (
    <div
      ref={iconHolderRef}
      className="icon_holder w-full mt-24">
      <h1 className="text-7xl text-slate-200/40 vert:mb-8 mr-2 text-right vert:text-center select-none">PROJECTS</h1>
      <div className="flex w-full flex-wrap justify-center gap-6">
        {projects.map((proj, i) => 
          <ProjectIcon 
            key={proj.id} 
            projectContainer={proj} 
            selected={hasSelection && indices.current === i}
            onProjectSelected={() => onProjectSelected(proj)} />
          )
        }
      </div>
    </div>
  )
}