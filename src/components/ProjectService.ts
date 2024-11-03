import { Project, ProjectType, projects } from "./PROJECTS";

export type ProjectStyle = "emphasized" | "faded" | "default";

export interface ProjectContainer {
  project: Project,
  id: number,
  style: ProjectStyle,
  url: string
}

class ProjectService {

  private readonly projectContainers: ProjectContainer[];

  constructor(projects: Project[]) {
    this.projectContainers = this.initProjects(projects);
  }

  getProjectContainers() {
    return this.projectContainers;
  }

  getProjectCount() {
    return this.projectContainers.length;
  }

  resetAndGetProjectContainers() {
    this.projectContainers.forEach(x => x.style = "default");
    return this.projectContainers;
  }

  getProjectContainersSortedByType(types: Set<ProjectType>) {
    const copiedArray = [...this.projectContainers];

    copiedArray.forEach(x => {
        for (const type of types) {
          if (x.project.types.has(type)) {
            x.style = "emphasized";
            return;
          }
        }
        x.style = "faded";
    });

    return this.sortByStyle(copiedArray);
  }

  getProjectContainersSortedByFeatured() {
    const copiedArray = [...this.projectContainers];

    copiedArray.forEach(x => {
      if (x.project.featured === true) x.style = "emphasized";
      else x.style = "faded";
    });

    return this.sortByStyle(copiedArray);
  }

  getProjectByName(name: string | undefined) {
    return this.projectContainers.find(x => x.url === name);
  }

  // getProjectByNameStatic(array: ProjectContainer[], name: string | undefined) {
  //   return array.find(x => x.url === name);
  // }

  getProjectById(id: number | undefined) {
    return this.projectContainers.find(x => x.id === id);
  }

  private sortByStyle(projectContainers: ProjectContainer[]) {
    return projectContainers.sort((a, b) => {
      if (a.style === b.style) return 0;
      else return a.style === "emphasized" ? -1 : 1;
    })
  }

  private initProjects(projects: Project[]): ProjectContainer[] {
    return projects.map(((project, i) => {
      return {
        project: project,
        id: i,
        style: "default",
        url: this.createUrlFromProjectName(project.name),
      }
    }))
  }

  private createUrlFromProjectName(name: string) {
    return name
      .trim()
      .replace(/ /g, "-")
      .replace(/[^(-|\w)]/g, "")
      .toLowerCase();
  }

}

const projectService = new ProjectService(projects);

export default projectService;