import "./meyer_reset.css";
import "./style.css";

import domController from "./domController";


function app() {
  const dom = domController();

  const content = dom.generateStructure();
  document.body.appendChild(content);

  dom.addBraceMove()
}

app();
