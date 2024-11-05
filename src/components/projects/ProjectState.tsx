import { create } from "zustand";
import { Project, projects, ProjectType } from "../PROJECTS";

export type ProjectStyle = "emphasized" | "faded" | "default";

export interface ProjectContainer {
  project: Project,
  id: number,
  style: ProjectStyle,
  url: string
}


/* Create initial project containers object */

const projectContainers: ProjectContainer[] = ((projects: Project[]) => {

  const createUrlFromProjectName = (name: string) => {
    return name
      .trim()
      .replace(/ /g, "-")
      .replace(/[^(-|\w)]/g, "")
      .toLowerCase();
  }

  return projects.map((p, i) => {
      return {
        project: p,
        id: i,
        style: "default",
        url: createUrlFromProjectName(p.name)
      }
    })

})(projects)



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
    if (x.project.featured === true) x.style = "emphasized";
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
  selectNextProject: () => void
  selectPrevProject: () => void
  unselectProject: () => void
}

const initialProjects: ProjectState = {
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
  // selectProjectByIndex: (index: number) => set({ selectedIndex: index })
  selectNextProject: () => set(
    state => ({ indices: getIndices(state.projects, state.indices.next), hasSelection: true})
  ),
  selectPrevProject: () => set(
    state => ({ indices: getIndices(state.projects, state.indices.prev), hasSelection: true})
  ),
  unselectProject: () => set({ hasSelection: false })
}))









// class ProjectService {

//   private readonly projectContainers: ProjectContainer[];

//   constructor(projects: Project[]) {
//     this.projectContainers = this.initProjects(projects);
//   }

//   getProjectContainers() {
//     return this.projectContainers;
//   }

//   getProjectCount() {
//     return this.projectContainers.length;
//   }

//   resetAndGetProjectContainers() {
//     this.projectContainers.forEach(x => x.style = "default");
//     return this.projectContainers;
//   }

//   getProjectContainersSortedByType(types: Set<ProjectType>) {
//     const copiedArray = [...this.projectContainers];

//     copiedArray.forEach(x => {
//         for (const type of types) {
//           if (x.project.types.has(type)) {
//             x.style = "emphasized";
//             return;
//           }
//         }
//         x.style = "faded";
//     });

//     return this.sortByStyle(copiedArray);
//   }

//   getProjectContainersSortedByFeatured() {
//     const copiedArray = [...this.projectContainers];

//     copiedArray.forEach(x => {
//       if (x.project.featured === true) x.style = "emphasized";
//       else x.style = "faded";
//     });

//     return this.sortByStyle(copiedArray);
//   }

//   getProjectByName(name: string | undefined) {
//     return this.projectContainers.find(x => x.url === name);
//   }

//   getProjectById(id: number | undefined) {
//     return this.projectContainers.find(x => x.id === id);
//   }





// }