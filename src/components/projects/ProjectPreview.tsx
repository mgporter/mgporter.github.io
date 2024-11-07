import { forwardRef } from "react"
import { Project } from "../../data/PROJECTS"

interface ProjectPreviewProps {
  project: Project;
  onLoad: () => void;
  startVisible: boolean;
}

const ProjectPreview = forwardRef<HTMLElement, ProjectPreviewProps>((props, ref) => {

  const project = props.project;
  const styles = `project_preview w-3/4 my-8 rounded-md box-content self-center ${props.startVisible ? "" : "invisible "}`;
  const HTMLWidth = project.preview.dimensions[0] + "";
  const HTMLHeight = project.preview.dimensions[1] + "";
  const aspectRatio = project.preview.dimensions[0] / project.preview.dimensions[1];


  if (project.preview.type === "image") {
    return (
      <img
        // @ts-expect-error HTMLElement ref assigned to HTMLImageElement
        ref={ref}
        className={styles} 
        onLoad={props.onLoad}
        width={HTMLWidth}
        height={HTMLHeight}
        style={{aspectRatio: aspectRatio}}
        src={project.preview.source}
        alt={project.name}>
      </img>
    )
  } 
  else {
    return (
      <video
        // @ts-expect-error HTMLElement ref assigned to HTMLVideoElement
        ref={ref} 
        autoPlay
        muted={true}
        controls
        disablePictureInPicture
        loop={true}
        onLoadedData={props.onLoad}
        width={HTMLWidth}
        height={HTMLHeight}
        className={styles} 
        style={{aspectRatio: aspectRatio}}
        src={project.preview.source}
        poster={project.imageThumbnailSrc}>
      </video>
    )

  }
})

export default ProjectPreview;