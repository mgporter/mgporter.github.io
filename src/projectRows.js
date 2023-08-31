import createEl from './createElement';
import {screenshots, gifpreviews} from "./constants";
import openPreview from "./openPreview";

export default function generateProjectRow(project, number) {

    const projectTypes = project.type.split('//');
    const projectLang = projectTypes[0]; // the language is the first type

    const bigNumber = createEl("div", number, "big-number");

    const projectTop = createEl("div", null, "project-top");
    const projectImg = createEl("img", null, "preview-img");
    projectImg.src = screenshots[`./${project.imageUrl}`];
    projectImg.setAttribute("alt", project.name);

    const infoBox = createEl("div", null, "info-box");

    const nameP = document.createElement("p");
    const nameLabel = createEl("span", "Name: ", "bold");
    const nameValue = createEl("span", project.name, "name");
    nameP.append(nameLabel, nameValue);

    const urlP = document.createElement("p");
    const urlLabel = createEl("span", "Links: ", "bold");
    urlP.appendChild(urlLabel);

    if (project.livePreview) {
      const urlValue = createEl("a", "Live Preview", "url");
      urlValue.href = project.livePreviewUrl;
      urlValue.target = "_blank";
      const urlSeparator = createEl("span", " | ");
      urlP.append(urlValue, urlSeparator);
    }

    const urlSource = createEl("a", "Repository Link", "urlSource");
    urlSource.href = project.sourceUrl;
    urlSource.target = "_blank";
    urlP.append(urlSource);

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

    const typesHeaderText = "Language: " + projectTypes.join(", ");
    const typesHeader = createEl("div", typesHeaderText, "types-header");
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
    projectBottom.append(typesHeader, featuresHeader, features);

    const projectContainer = createEl("div", null, "project-container");
    projectContainer.setAttribute("data-id", number);

    // These links will be used by the openPreview function 
    let imagelink, buttonlink, livepreview;
    if (project.livePreview) {
      imagelink = screenshots[`./${project.imageUrl}`];
      buttonlink = project.livePreviewUrl;
      livepreview = "true";
    } else {
      imagelink = gifpreviews[`./${project.livePreviewUrl}`];  // This will be an animated gif to demonstrate
      buttonlink = project.sourceUrl;
      livepreview = "";
    }

    projectContainer.setAttribute("data-imagelink", imagelink);
    projectContainer.setAttribute("data-buttonlink", buttonlink);
    projectContainer.setAttribute("data-livepreview", livepreview);
    projectContainer.append(bigNumber, projectTop, projectBottom);

    return projectContainer;
}