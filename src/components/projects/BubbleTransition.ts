import { MutableRefObject } from "react";
import { ProjectContainer } from "./ProjectState";

export default function doBubbleTransition(project: ProjectContainer, projectSectionRef: MutableRefObject<HTMLElement>, navigateToPage: () => void): void {

  const borderoffset = 4
  const borderoffsethalf = borderoffset / 2

  let projectPreview: HTMLElement;


  try {

    // Get DOMRects
    const projectThumbnailDiv = document.querySelector(`div.project[data-id='${project.id}']`)!;
    const projectRectRaw = projectThumbnailDiv.getBoundingClientRect();
    const projectRect = {
      left: projectRectRaw.left + borderoffsethalf, 
      width: projectRectRaw.width - borderoffset,
      top: projectRectRaw.top + borderoffsethalf,
      height: projectRectRaw.height - borderoffset,
    }
    let containerRect = projectSectionRef.current.getBoundingClientRect();

    // Get the picture/container from the icon and append it overtop of the real icon
    const movingImg = document.createElement('div')
    const movingImgInner = document.createElement('img')
    movingImgInner.src = project.project.preview.type === "image" ? project.project.preview.source : project.project.imageThumbnailSrc;
    movingImgInner.style.width = '100%'
    movingImgInner.style.aspectRatio = (project.project.preview.dimensions[0] / project.project.preview.dimensions[1]) + ""
    movingImgInner.style.height = 'auto'
    movingImgInner.style.verticalAlign = 'middle'
    

    movingImg.style.position = 'absolute';
    movingImg.style.pointerEvents = 'none';
    movingImg.style.border = "none"
    movingImg.style.boxSizing = "content-box"
    movingImg.style.left = `${projectRect.left - containerRect.left}px` // add offsets to account for border on icon
    movingImg.style.top = `${projectRect.top - containerRect.top}px`    // add offsets to account for border on icon
    movingImg.style.width = `${projectRect.width}px`                    // add offsets to account for border on icon
    movingImg.style.height = `${projectRect.height}px`                  // add offsets to account for border on icon
    movingImg.style.zIndex = '120'
    movingImg.style.overflow = 'hidden'
    movingImg.style.transition = '200ms opacity'
    // movingImg.onanimationend = startBubbleAnimation;
    movingImg.classList.add("movingImg");

    movingImg.appendChild(movingImgInner);

    projectSectionRef.current.appendChild(movingImg);
    // movingImg.classList.add('fadein')

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
    bubble.style.transition = "600ms opacity"
    bubble.onanimationend = renderNewPage;
    bubble.classList.add("project_details_bubble");


    startBubbleAnimation()


    function updateBubbleDimensions() {
      containerRect = projectSectionRef.current.getBoundingClientRect();
      bubble.style.left = `${-containerRect.left - window.scrollX}px`;
      bubble.style.top = `${-containerRect.top - window.scrollY}px`;
      bubble.style.width = `${document.body.scrollWidth}px`;
      bubble.style.height = `${document.body.scrollHeight}px`;
    }


    function startBubbleAnimation() {
      // Start the bubblegrow animation

      // uncomment to stop after movingImg creation
      // return

      // Make sure that the movingImg is rendered before appending the bubble
      requestAnimationFrame(() => {
        setTimeout(() => {
          projectSectionRef.current.appendChild(bubble);
        })
      })
      movingImg.onanimationend = null;
      bubble.classList.add("bubblegrow")
      
      window.addEventListener("resize", updateBubbleDimensions);
    }


    function renderNewPage() {
      // Render the new page underneath the full-sized bubble

      bubble.onanimationend = null
      navigateToPage()

      // Wait for page to finish rendering before going on
      requestAnimationFrame(() => {
        setTimeout(() => {
          startMovingImageAnimation();
        })
      })
    }


    function startMovingImageAnimation() {

      projectPreview = projectSectionRef.current.querySelector('.project_preview')! as HTMLElement;
      projectPreview.style.opacity = "0"
      projectPreview.style.transition = "opacity 20ms"
      const projectPreviewRect = projectPreview.getBoundingClientRect();

      const scaleFactor = (projectPreviewRect.width) / (projectRect.width);
      // const scaleFactor = 1;

      const previewCenterX = projectPreviewRect.left + (projectPreviewRect.width / 2) + window.scrollX
      const previewCenterY = projectPreviewRect.top + (projectPreviewRect.height / 2) + window.scrollY

      const translateX = (previewCenterX - iconCenterX) / scaleFactor
      const translateY = (previewCenterY - iconCenterY) / scaleFactor
      
      const newHeight = (projectRect.width) * projectPreviewRect.height / projectPreviewRect.width
      const heightDifference = (newHeight - projectRect.height) / (scaleFactor * 2)

      root.style.setProperty("--moving_img_scale", scaleFactor + "");
      root.style.setProperty("--moving_img_translateX", translateX + "px");
      root.style.setProperty("--moving_img_translateY", (translateY - heightDifference) + "px");
      root.style.setProperty("--moving_img_orig_height", projectRect.height + "px");
      root.style.setProperty("--moving_img_height", newHeight + "px");
      root.style.setProperty("--moving_img_borderradius", `${0.375 / scaleFactor}rem`);

      movingImg.onanimationend = removeMovingImg

      setTimeout(() => {
        // Remove the bubble to reveal the page. MovingImg is still moving into place at this time
        revealNewPage();
      }, 400)
      movingImg.classList.add("movingImg_move_animation");

    }


    function revealNewPage() {
      
      // uncomment to stop when movingImg reaches final position
      // bubble.style.opacity = "0"
      // movingImg.style.opacity = "0.5"
      // return

      bubble.ontransitionend = () => {
        bubble.remove()
        window.removeEventListener("resize", updateBubbleDimensions)

      }

      bubble.style.opacity = "0"
      
    }

    function removeMovingImg() {

      projectPreview.ontransitionend = () => {
        
        movingImg.ontransitionend = () => {
          movingImg.remove()
        }
        movingImg.style.opacity = "0"
      }

      projectPreview.style.opacity = "1"

    }


  } catch (e) {
    console.log(e)
    navigateToPage()
  }

}