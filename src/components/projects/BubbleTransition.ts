import { MutableRefObject } from "react";
import { ProjectContainer } from "./ProjectState";

export default function doBubbleTransition(project: ProjectContainer, projectSectionRef: MutableRefObject<HTMLElement>, navigateToPage: () => void): void {

  try {

    // Get DOMRects
    const projectThumbnailDiv = document.querySelector(`div.project[data-id='${project.id}']`)!;
    const projectRect = projectThumbnailDiv.getBoundingClientRect();
    const containerRect = projectSectionRef.current.getBoundingClientRect();

    // Get the picture from the icon and append it overtop of the real icon
    const movingImg = document.createElement('div')
    // const movingImg = projectThumbnailDiv.cloneNode(false) as HTMLElement
    const movingImgInner = document.createElement('img')
    movingImgInner.src = project.project.preview.type === "image" ? project.project.preview.source : project.project.imageThumbnailSrc;
    movingImgInner.style.width = '100%'
    // movingImgInner.style.height = '100%'
    movingImgInner.style.aspectRatio = (project.project.preview.dimensions[0] / project.project.preview.dimensions[1]) + ""
    // movingImgInner.style.aspectRatio = 'auto'
    
    movingImg.appendChild(movingImgInner);

    movingImg.style.position = 'absolute';
    movingImg.style.pointerEvents = 'none';
    movingImg.style.left = `${projectRect.left - containerRect.left + 2}px` // add offsets to account for border on icon
    movingImg.style.top = `${projectRect.top - containerRect.top + 2}px`    // add offsets to account for border on icon
    movingImg.style.width = `${projectRect.width - 4}px`                    // add offsets to account for border on icon
    movingImg.style.height = `${projectRect.height - 4}px`                  // add offsets to account for border on icon
    movingImg.style.zIndex = '120'
    movingImg.style.overflow = 'hidden'
    movingImg.style.transition = '400ms opacity'
    movingImg.onanimationend = startBubbleAnimation;
    movingImg.classList.add("movingImg");
    projectSectionRef.current.appendChild(movingImg);
    movingImg.classList.add('fadein')

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
    bubble.style.transition = "400ms opacity"
    bubble.onanimationend = renderNewPage;
    bubble.classList.add("project_details_bubble");


    function startBubbleAnimation() {
      movingImg.onanimationend = null;
      console.log("start bubble anim")
      bubble.classList.add("bubblegrow")
      projectSectionRef.current.appendChild(bubble);
    }


    function renderNewPage() {
      bubble.onanimationend = null
      console.log("render")
      navigateToPage()

      // Wait for page to finish rendering before going on
      requestAnimationFrame(() => {
        setTimeout(() => {
          startMovingImageAnimation();
        })
      })
    }


    function startMovingImageAnimation() {

      const projectPreview = projectSectionRef.current.querySelector('.project_preview')!;
      const projectPreviewRect = projectPreview.getBoundingClientRect();

      const scaleFactor = projectPreviewRect.width / (projectRect.width - 2);

      const previewCenterX = projectPreviewRect.left + (projectPreviewRect.width / 2) + window.scrollX
      const previewCenterY = projectPreviewRect.top + (projectPreviewRect.height / 2) + window.scrollY

      const translateX = (previewCenterX - iconCenterX) / scaleFactor
      const translateY = (previewCenterY - iconCenterY) / scaleFactor
      
      const newHeight = projectRect.width * projectPreviewRect.height / projectPreviewRect.width
      const heightDifference = (newHeight - projectRect.height) / (scaleFactor * 2)

      root.style.setProperty("--moving_img_scale", scaleFactor + "");
      root.style.setProperty("--moving_img_translateX", translateX + "px");
      root.style.setProperty("--moving_img_translateY", (translateY - heightDifference) + "px");
      root.style.setProperty("--moving_img_orig_height", projectRect.height + "px");
      root.style.setProperty("--moving_img_height", newHeight + "px");
      root.style.setProperty("--moving_img_borderradius", `${0.375 / scaleFactor}rem`);

      movingImg.onanimationend = revealNewPage
      movingImg.classList.add("movingImg_move_animation");

    }


    function revealNewPage() {
      console.log("reveal new page")
      
      // bubble.style.opacity = "0"
      // movingImg.style.opacity = "0.5"
      // return

      bubble.ontransitionend = () => {
        bubble.remove()
        movingImg.ontransitionend = () => {
          movingImg.remove()
        }
        movingImg.style.opacity = "0"
      }

      bubble.style.opacity = "0"
      
    }


  } catch (e) {
    console.log(e)
    console.log("Transition error")
    navigateToPage()
  }

}