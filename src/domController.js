import githubLogoUrl from "./github-logo.png";
import createEl from "./createElement";

export default function domController() {
  function importAll(r) {
    // This function maps an input url to a webpacked id url
    const images = {};
    r.keys().forEach((item) => (images[item] = r(item)));
    return images; // it then returns an object with key-value pairs of the matchings
  }

  // Create an object with the webpack urls of all images in the screenshots folder
  const screenshots = importAll(
    require.context("./screenshots/", false, /\.(jpg|jpeg|png|gif)$/i)
  );

  function generateStructure() {
    return createEl("div", null, null, "main-grid");
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

    nav.append(headerName, contactContainer);

    return nav;
  }

  function generateMain() {
    return createEl("main");
  }

  function openPreview(url) {
    const win = window.open(url, "_blank");
    win.focus();
  }

  function generateProjectRow(project, number) {
    const bigNumber = createEl("div", number, "big-number");

    const projectTop = createEl("div", null, "project-top");
    const projectImg = createEl("img");
    projectImg.src = screenshots[`./${project.imageUrl}`];
    projectImg.setAttribute("alt", project.name);
    projectImg.addEventListener("click", () =>
      window.open(project.livePreviewUrl, "_blank").focus()
    );

    const infoBox = createEl("div", null, "info-box");

    const nameP = document.createElement("p");
    const nameLabel = createEl("span", "Name: ", "bold");
    const nameValue = createEl("span", project.name, "name");
    nameP.append(nameLabel, nameValue);

    const urlP = document.createElement("p");
    const urlLabel = createEl("span", "Links: ", "bold");
    const urlValue = createEl("a", "Live Preview", "url");
    urlValue.href = project.livePreviewUrl;
    urlValue.target = "_blank";
    const urlSeparator = createEl("span", " | ");
    const urlSource = createEl("a", "Repository Link", "urlSource");
    urlSource.href = project.sourceUrl;
    urlSource.target = "_blank";
    urlP.append(urlLabel, urlValue, urlSeparator, urlSource);

    const descriptionP = document.createElement("p");
    const descriptionLabel = createEl("span", "Description: ", "bold");
    const descriptionValue = createEl(
      "span",
      project.description,
      "description"
    );
    descriptionP.append(descriptionLabel, descriptionValue);

    infoBox.append(nameP, urlP, descriptionP);
    projectTop.append(projectImg, infoBox);

    const projectBottom = createEl("div", null, "project-bottom");
    const featuresHeader = createEl(
      "div",
      "Features / programming concepts",
      "features-header"
    );
    const features = createEl("div", null, "features");
    const featuresUl = document.createElement("ul");

    const featureList = project.features.split("//");

    featureList.forEach((feature) => {
      const featureLi = createEl("li", feature);
      featuresUl.appendChild(featureLi);
    });

    features.append(featuresUl);
    projectBottom.append(featuresHeader, features);

    const projectContainer = createEl("div", null, "project-container");
    projectContainer.append(bigNumber, projectTop, projectBottom);

    return projectContainer;
  }

  return {
    generateStructure,
    generateNav,
    generateMain,
    generateProjectRow,
  };
}
