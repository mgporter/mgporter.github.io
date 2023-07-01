export default function createEl(tag, text = null, classes = null, id = null) {
  const element = document.createElement(tag);

  if (classes) {
    const classArray = classes.split(" ");
    classArray.forEach((className) => element.classList.add(className));
  }

  if (id) {
    element.id = id;
  }

  if (text) {
    element.textContent = text;
  }

  return element;
}
