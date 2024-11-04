import { MutableRefObject } from "react";
import ProjectIcon from "./ProjectIcon";
import { dispatcher } from "../Dispatcher";
import { SelectedProjectType } from "../ProjectSection";
import { ProjectContainer } from "../ProjectService";
import { useProjectStore } from "./ProjectState";

interface IconHolderProps {
  iconHolderRef: MutableRefObject<HTMLDivElement>;
  selectedProject: SelectedProjectType | null;
}

export default function IconHolder({iconHolderRef, selectedProject}: IconHolderProps) {

  const { projects, selectProjectByName } = useProjectStore()


  // function dispatchProjectSelectEvent(index: number) {
  //   dispatcher.dispatch("projectSelected", {idx: index});
  // }

  const selectedId = selectedProject ? selectedProject.id : -1;

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
            selected={selectedId === proj.id}
            onClick={() => selectProjectByName(proj.url)} />
          )
        }
      </div>
    </div>
  )
}