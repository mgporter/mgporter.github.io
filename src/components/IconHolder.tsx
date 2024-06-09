import { MutableRef } from "preact/hooks";
import ProjectIcon from "./ProjectIcon";
import { TargetedEvent } from "preact/compat";
import { dispatcher } from "./Dispatcher";
import { SelectedProjectType } from "./Main";
import { ProjectContainer } from "./ProjectService";

interface IconHolderProps {
  iconHolderRef: MutableRef<HTMLDivElement>;
  projectArray: ProjectContainer[];
  selectedProject: SelectedProjectType;
}

export default function IconHolder({iconHolderRef, projectArray, selectedProject}: IconHolderProps) {

  function dispatchProjectSelectEvent(e: TargetedEvent<HTMLDivElement>) {
    if (e.target instanceof HTMLElement) {
      const target = e.target.closest(".project");
      if (target instanceof HTMLElement) {
        dispatcher.dispatch(
          "projectSelected", 
          {idx: Number(target.dataset.id), div: target}
        );
      }
    } 
  }

  const selectedIndex = selectedProject ? selectedProject.idx : -1;

  return (
    <div
      onClick={dispatchProjectSelectEvent}
      ref={iconHolderRef}
      className="icon_holder w-full mt-24">
      <h1 className="text-7xl text-slate-200/40 mb-[-0rem] mr-2 text-right vert:text-center">PROJECTS</h1>
      <div className="flex w-full flex-wrap justify-center gap-6">
        {projectArray.map((x, i) => <ProjectIcon key={x.id} projectContainer={x} id={i} selectedIdx={selectedIndex} />)}
      </div>
    </div>
  )
}