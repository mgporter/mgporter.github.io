import { MutableRefObject } from "react";
import ProjectIcon from "./ProjectIcon";
import { dispatcher } from "./Dispatcher";
import { SelectedProjectType } from "./Main";
import { ProjectContainer } from "./ProjectService";

interface IconHolderProps {
  iconHolderRef: MutableRefObject<HTMLDivElement>;
  projectArray: ProjectContainer[];
  selectedProject: SelectedProjectType | null;
}

export default function IconHolder({iconHolderRef, projectArray, selectedProject}: IconHolderProps) {

  function dispatchProjectSelectEvent(index: number) {
    dispatcher.dispatch("projectSelected", {idx: index});
  }

  const selectedId = selectedProject ? selectedProject.id : -1;

  return (
    <div
      ref={iconHolderRef}
      className="icon_holder w-full mt-24">
      <h1 className="text-7xl text-slate-200/40 vert:mb-8 mr-2 text-right vert:text-center select-none">PROJECTS</h1>
      <div className="flex w-full flex-wrap justify-center gap-6">
        {projectArray.map((proj, i) => 
          <ProjectIcon 
            key={proj.id} 
            projectContainer={proj} 
            selected={selectedId === proj.id}
            onClick={() => dispatchProjectSelectEvent(i)} />
          )
        }
      </div>
    </div>
  )
}