import "./meyer_reset.css";
import "./style.css";
import projects from "./projects.csv";
import domController from "./domController";

function app() {
  const dom = domController();

  const content = dom.generateStructure();
  document.body.appendChild(content);

  // const nav = dom.generateNav();
  // const main = dom.generateMain();
  // mainGrid.append(nav, main);

  let projectCounter = 1;
  const main = document.querySelector('main');
  projects.forEach((project) => {
    const projectContainer = dom.generateProjectRow(project, projectCounter);
    main.appendChild(projectContainer);
    projectCounter += 1;
  });

  dom.addBraceMove()
}

app();
