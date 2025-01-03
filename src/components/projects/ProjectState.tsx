import { create } from "zustand";
import { Project, projects, ProjectType } from "../../data/PROJECTS";

export type ProjectStyle = "emphasized" | "faded" | "default";

export interface ProjectContainer {
  project: Project,
  id: number,
  style: ProjectStyle,
  url: string
}


/* Create initial project containers object */

export function createProjectContainer(project: Project, i: number): ProjectContainer {
  return {
    project: project,
    id: i,
    style: "default",
    url: createUrlFromProjectName(project.name)
  }
}

function createUrlFromProjectName(name: string) {
  return name
    .trim()
    .replace(/ /g, "-")
    .replace(/[^(-|\w)]/g, "")
    .toLowerCase();
}

export const projectContainers: ProjectContainer[] = projects
  .map((p, i) => createProjectContainer(p, i));



/* Helper functions */

const sortByStyle = (projectContainers: ProjectContainer[]) => {
  return projectContainers.sort((a, b) => {
    if (a.style === b.style) return 0;
    else return a.style === "emphasized" ? -1 : 1;
  })
}


const getProjectContainersSortedByType = (types: Set<ProjectType>) => {
  const copiedArray = projectContainers.map(x => {
      for (const type of types) {
        if (x.project.types.has(type)) {
          x.style = "emphasized";
          return x;
        }
      }
      x.style = "faded";
      return x;
  });

  return sortByStyle(copiedArray);
}

const getProjectContainersSortedByFeatured = () => {
  const copiedArray = projectContainers.map(x => {
    if (x.project.status === "featured") x.style = "emphasized";
    else x.style = "faded";
    return x;
  });

  return sortByStyle(copiedArray);
}

const resetProjects = (projects: ProjectContainer[]) => {
  projects.forEach(x => x.style = "default")
  return projects;
}

export const getNextIndex = function getNextIndex_fn<T>(arr: ArrayLike<T>, startingIndex: number) {
  return (startingIndex + 1) % arr.length
}

export const getPrevIndex = function getPrevIndex_fn<T>(arr: ArrayLike<T>, startingIndex: number) {
  return (startingIndex + arr.length - 1) % arr.length
}

const getIndices = function getIndices_fn<T>(arr: ArrayLike<T>, current: number) {

  const newCurrent = (current + arr.length) % arr.length

  return {
    current: newCurrent,
    next: getNextIndex(arr, newCurrent),
    prev: getPrevIndex(arr, newCurrent)
  }
}


/* Create Project Store */

type ProjectState = {
  projects: ProjectContainer[],
  hasSelection: boolean,
  indices: {
    current: number,
    next: number,
    prev: number
  }
}

type ProjectActions = {
  reset: () => void
  sortByType: (types: Set<ProjectType>) => void
  sortByFeatured: () => void
  selectProjectByName: (name: string) => void
  selectProjectByIndex: (index: number) => void
  selectNextProject: () => void
  selectPrevProject: () => void
  unselectProject: () => void
}

export const initialProjects: ProjectState = {
  projects: projectContainers,
  hasSelection: false,
  indices: {
    current: 0,
    next: 1,
    prev: projectContainers.length - 1
  }
}

export const useProjectStore = create<ProjectState & ProjectActions>()(set => ({
  ...initialProjects,
  reset: () => set({ projects: resetProjects(initialProjects.projects), indices: initialProjects.indices }),
  sortByType: (types: Set<ProjectType>) => set({ projects: getProjectContainersSortedByType(types) }),
  sortByFeatured: () => set({ projects: getProjectContainersSortedByFeatured() }),
  selectProjectByName: (name: string) => set(
    state => ({ indices: getIndices(state.projects, state.projects.findIndex(p => p.url === name)), hasSelection: true})
  ),
  selectProjectByIndex: (index: number) => set(
    state => ({ indices: getIndices(state.projects, index), hasSelection: true })
  ),
  selectNextProject: () => set(
    state => ({ indices: getIndices(state.projects, state.indices.next), hasSelection: true})
  ),
  selectPrevProject: () => set(
    state => ({ indices: getIndices(state.projects, state.indices.prev), hasSelection: true})
  ),
  unselectProject: () => set({ hasSelection: false })
}))