import { MutableRefObject } from "react";
import { ProjectContainer } from "./ProjectState";

export default function doBubbleTransition(project: ProjectContainer, projectSectionRef: MutableRefObject<HTMLElement>, navigateToPage: () => void): void {

  try {

    // Get DOMRects
    const projectThumbnailDiv = document.querySelector(`div.project[data-id='${project.id}']`)!;
    const projectRect = projectThumbnailDiv.getBoundingClientRect();
    const containerRect = projectSectionRef.current.getBoundingClientRect();

    // Get the picture from the icon and append it overtop of the real icon
    const movingImg = document.createElement('img')
    movingImg.src = project.project.preview.source
    movingImg.style.position = 'absolute';
    movingImg.style.pointerEvents = 'none';
    movingImg.style.left = `${projectRect.left - containerRect.left}px`
    movingImg.style.top = `${projectRect.top - containerRect.top}px`
    movingImg.style.width = `${projectRect.width}px`
    movingImg.style.height = `${projectRect.height}px`
    movingImg.style.zIndex = '120'
    movingImg.style.opacity = '0'
    movingImg.classList.add("movingImg");
    projectSectionRef.current.appendChild(movingImg);

    // Create the bubble by creating a div to cover the screen, then giving
    // it a small circle clippath centered over the icon
    const iconCenterX = (projectRect.left + (projectRect.width / 2) + window.scrollX)
    const iconCenterY = (projectRect.top + (projectRect.height / 2) + window.scrollY)
    const root = (document.querySelector(':root') as HTMLElement);
    root.style.setProperty("--bubble-pos-x", iconCenterX + "px");
    root.style.setProperty("--bubble-pos-y", iconCenterY + "px");

    const bubble = document.createElement('div')
    bubble.style.left = `${-containerRect.left - window.scrollX}px`
    bubble.style.top = `${-containerRect.top - window.scrollY}px`
    bubble.style.width = `${document.body.scrollWidth}px`;
    bubble.style.height = `${document.body.scrollHeight}px`;
    bubble.style.clipPath = `circle(1% at ${iconCenterX}px ${iconCenterY}px)`
    bubble.style.position = 'absolute';
    bubble.style.zIndex = '100';
    bubble.onanimationend = () => {
      navigateToPage()

      setTimeout(() => {
        const projectPreview = projectSectionRef.current.querySelector('.project_preview')!;
        const projectPreviewRect = projectPreview.getBoundingClientRect();
  
        const scaleFactor = projectPreviewRect.width / projectRect.width;
  
        const previewCenterX = projectPreviewRect.left + (projectPreviewRect.width / 2)
        const previewCenterY = projectPreviewRect.top + (projectPreviewRect.height / 2)
  
        const translateX = (previewCenterX - iconCenterX) / scaleFactor
        const translateY = (previewCenterY - iconCenterY) / scaleFactor
        
        const newHeight = projectRect.width * projectPreviewRect.height / projectPreviewRect.width
        const heightDifference = (newHeight - projectRect.height) / (scaleFactor * 2)
  
        root.style.setProperty("--moving_img_scale", scaleFactor + "");
        root.style.setProperty("--moving_img_translateX", translateX + "px");
        root.style.setProperty("--moving_img_translateY", (translateY - heightDifference) + "px");
        root.style.setProperty("--moving_img_orig_height", projectRect.height + "px");
        root.style.setProperty("--moving_img_height", newHeight + "px");
        root.style.setProperty("--moving_img_borderradius", "0.15rem");
  
        movingImg.onanimationend = () => {

          bubble.ontransitionend = () => {
            bubble.remove()
            movingImg.remove()
          }
          
          bubble.style.transition = "400ms opacity"
          bubble.style.opacity = "0"
        }
    
        movingImg.classList.add("movingImg_move_animation");
      }, 100)

    }
    bubble.className = "project_details_bubble bubblegrow"
    projectSectionRef.current.appendChild(bubble);


    // Render the page underneath the bubble (which now fills the page)
    


    // Get the position of the (invisible) preview image and use that
    // as a destination for the moving image.







    




  } catch (e) {
    console.log(e)
    console.log("Transition error")
    navigateToPage()
  }

}

// function createMovingImage(containerElement: HTMLElement, project: ProjectContainer): HTMLElement {

//   const containerRect = containerElement.getBoundingClientRect();

//   console.log(rect.left, projectThumbnailDiv.clientLeft, projectThumbnailDiv.scrollLeft)

//   const movingImg = projectThumbnailDiv.cloneNode(true) as HTMLElement;
//   movingImg.style.position = 'absolute';
//   movingImg.style.pointerEvents = 'none';
//   (projectThumbnailDiv.querySelector(".icontitle") as HTMLElement).style.opacity = "100";
//   movingImg.style.left = `${rect.left - containerRect.left}px`
//   movingImg.style.top = `${rect.top - containerRect.top}px`

//   containerElement.appendChild(movingImg);

//   return movingImg;

// }