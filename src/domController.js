import githubLogoUrl from "./github-logo.png";
import curlyBraceImg from "./curlybrace2.png";
import createEl from "./createElement";
import makeNavContent from "./navContent";
import generateProjectRow from "./projectRows";
import projects from "./projects.csv";
import openPreview from "./openPreview";

export default function domController() {

  function generateStructure() {
    const bgGrid = createEl('div', null, null, "bg-grid");
    const mainGrid = createEl("div", null, null, "main-grid");

    const nav = generateNav();
    const main = generateMain();
    mainGrid.append(nav, main);

    const asideL = createEl('aside', null, null, 'left');
    const asideR = createEl('aside', null, null, 'right');
    const braceL = document.createElement('img')
    braceL.src = curlyBraceImg;
    const braceR = document.createElement('img')
    braceR.src = curlyBraceImg;
    asideL.appendChild(braceL);
    asideR.appendChild(braceR);


    bgGrid.append(asideL, mainGrid, asideR);
    return bgGrid;
  }

  function generateNav() {
    const nav = createEl("nav");

    const headerName = createEl("h1", "mgporter");

    const contactContainer = createEl("div", null, null, "contact-container");
    const githubContactRow = createEl("a", null, "contact-row");
    githubContactRow.href = "https://github.com/mgporter";
    const githubLogo = createEl("img");
    githubLogo.src = githubLogoUrl;
    githubLogo.setAttribute("alt", "Github");
    const githubUrl = createEl("h5", "https://github.com/mgporter");
    githubContactRow.append(githubLogo, githubUrl);

    contactContainer.append(githubContactRow);

    const navContent = makeNavContent();

    nav.append(headerName, contactContainer, navContent);

    return nav;
  }

  function generateMain() {
    const main = createEl("main");
    main.addEventListener('click', openPreview);

    createProjectRows(main);

    return main;
  }

  function createProjectRows(main) {
    let projectCounter = 1;
    projects.forEach((project) => {
      const projectContainer = generateProjectRow(project, projectCounter);
      main.appendChild(projectContainer);
      projectCounter += 1;
    });
  }



  function addBraceMove() {
    const main = document.querySelector('main');
    const braceL = document.querySelector('aside#left img');
    const braceR = document.querySelector('aside#right img');

    main.addEventListener('mouseenter', () => {
      openBraces();
    })

    main.addEventListener('mouseleave', (e) => {

      // Don't close the braces if the user just opened the preview window
      if (e.relatedTarget && e.relatedTarget.matches('img')) return;

      closeBraces()
    })

    function openBraces() {
      braceL.classList.add('open')
      braceR.classList.add('open')
    }

    function closeBraces() {
      braceL.classList.remove('open')
      braceR.classList.remove('open')
    }
  
    document.body.addEventListener('preview_closed', () => {
      closeBraces();
    })
  }

  return {
    generateStructure,
    addBraceMove,
  };
}
