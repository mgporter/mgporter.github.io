import { forwardRef } from "react";
import ProjectPreview from "../ProjectPreview";
import { Project } from "../PROJECTS"

interface ProjectDetailsPageProps {
  project: Project;
}

const projectLink = "transition-colors text-xl rounded-sm bg-blue-400/80 hover:bg-blue-700 ml-4 mb-1 px-4 py-1";

const ProjectDetailsPage = forwardRef<HTMLDivElement, ProjectDetailsPageProps>((props, ref) => {

  const project = props.project;

  return (
    <div className="project_details_inner flex flex-col gap-4 items-stretch my-8" ref={ref}>

      <div className="flex flex-col mx-4 vert:mx-0 gap-2 w-full px-2">
        <h2 className="text-4xl font-bold text-blue-200">{project.name} 
          {project.featured && <span className="text-xl ml-3 text-yellow-200/90">(featured)</span>}
        </h2>
        <p>{project.heading}</p>
      </div>

      <ul className="mx-16 vert:mx-8 max-w-[30rem] list-['\21E8\0020\0020']">
        {project.livePreviewUrl && <a href={project.livePreviewUrl} target="_blank"><li className={projectLink}>Go to live preview</li></a>}
        {project.sourceUrl && <a href={project.sourceUrl} target="_blank"><li className={projectLink}>View the source on Github</li></a>}
      </ul>

      <ProjectPreview 
        project={project} 
        onLoad={() => {}} 
        startVisible={true} />

      <ul className="flex items-center bg-indigo-950 border-t border-indigo-600 
        mx-8 vert:mx-0 flex-wrap mb-4 p-2 gap-4">
        <li className="px-2 font-bold">Tech stack:</li>
        {Array.from(project.types).map(type => (
          <li key={type} className=" bg-slate-300 text-black px-2 py-1 rounded-md font-medium">{type}</li>
        ))}
      </ul>
      
      <div className="flex flex-col gap-4 bg-blue-950 rounded-lg p-4">
        {project.description}
      </div>

    </div>
  )
})

export default ProjectDetailsPage;