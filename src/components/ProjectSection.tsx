import { useRef } from "react";
import IconHolder from "./projects/IconHolder";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { ProjectContainer } from "./projects/ProjectState";
import { useProjectStore } from "./projects/ProjectState";
import doBubbleTransition from "./projects/BubbleTransition";
import { Helmet } from "react-helmet";
import { useAppStore } from "./AppState";

// const useTransition = !C.IS_VERTICAL_SCREEN && C.IS_QUICK_CONNECTION;

export type SelectedProjectType = {
  idx: number,
  id: number
};

export default function ProjectSection() {

  const { selectProjectByName } = useProjectStore()
  const { enableEffects } = useAppStore()
  const navigate = useNavigate();
  const location = useLocation();

  const projectSectionRef = useRef<HTMLDivElement>(null!);
  const iconHolderRef = useRef<HTMLDivElement>(null!);

  function onProjectSelected(project: ProjectContainer) {

    const navigateToPage = () => {
      selectProjectByName(project.url)
      navigate(`/projects/${project.url}`)
    }

    if (location.pathname === "/projects" && enableEffects) {
      doBubbleTransition(project, projectSectionRef, navigateToPage)
    } else {
      navigateToPage()
    }

  }

  return (
    <main 
      className="relative w-full pb-48 overflow-hidden"
      ref={projectSectionRef}>
      <Helmet>
        <title>projects - mgporter</title>
      </Helmet>

      <Outlet />

      <IconHolder
        onProjectSelected={onProjectSelected}
        iconHolderRef={iconHolderRef}
      />

    </main>
  )
}