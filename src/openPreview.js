import createEl from "./createElement";

export default function openPreview(e) {

    if (!e.target.matches(".preview-img")) return;
    const projectContainer = e.target.closest('.project-container');

    const imagelink = projectContainer.dataset.imagelink;
    const buttonlink = projectContainer.dataset.buttonlink;
    
    const backdrop = createEl('div', null, 'preview-backdrop');

    const p = createEl('p', 'click anywhere to close');
    const image = createEl('img', null, 'preview-image-big');
    image.src = imagelink;

    const buttonText = projectContainer.dataset.livepreview ? "Go to live preview" : "View source code";
    const buttonPreview = createEl('button', buttonText, 'preview-button');

    backdrop.append(p, image, buttonPreview);
    document.body.appendChild(backdrop);
    document.body.dispatchEvent(new Event('preview_opened'));

    backdrop.addEventListener('click', (e) => {
        if (e.target.matches('button')) {
        window.open(buttonlink);
        backdrop.remove();
        }
        backdrop.remove();
        document.body.dispatchEvent(new Event('preview_closed'));
    }, {once: true});
}