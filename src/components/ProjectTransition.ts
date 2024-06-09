import { MutableRef } from "preact/hooks"
import { ProjectContainer } from "./ProjectService"

class ProjectTransition {

  thumbnailDiv: HTMLElement;

  constructor(projectContainer: ProjectContainer) {
    this.thumbnailDiv = document.querySelector(`.icon_holder div[dataid="${projectContainer.id}"]`);
    this.containerRef = document.querySelector("main");

    if (this.thumbnailDiv == null) throw new Error("No thumbnail found");



    thumbnailDiv={selectedProject.div} 
          containerRef={containerRef}
          projectPreviewRef={projectPreviewRef}
          onEffectComplete={onTransitionEnd}
          tempImage={<img 
            src={project.preview.type === "image" ? project.preview.source : project.imageThumbnailSrc} 
            alt={project.name} 
            className="w-full aspect-auto"></img>
  }

  setBoundaryContainerRef(ref: MutableRef<HTMLElement>) {

  }

  onEffectComplete() {

  }

}