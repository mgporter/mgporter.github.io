/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 968:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(81);
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(645);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `/* http://meyerweb.com/eric/tools/css/reset/ 
   v2.0 | 20110126
   License: none (public domain)
*/

html,
body,
div,
span,
applet,
object,
iframe,
h1,
h2,
h3,
h4,
h5,
h6,
p,
blockquote,
pre,
a,
abbr,
acronym,
address,
big,
cite,
code,
del,
dfn,
em,
img,
ins,
kbd,
q,
s,
samp,
small,
strike,
strong,
sub,
sup,
tt,
var,
b,
u,
i,
center,
dl,
dt,
dd,
ol,
ul,
li,
fieldset,
form,
label,
legend,
table,
caption,
tbody,
tfoot,
thead,
tr,
th,
td,
article,
aside,
canvas,
details,
embed,
figure,
figcaption,
footer,
header,
hgroup,
menu,
nav,
output,
ruby,
section,
summary,
time,
mark,
audio,
video {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article,
aside,
details,
figcaption,
figure,
footer,
header,
hgroup,
menu,
nav,
section {
  display: block;
}
body {
  line-height: 1;
}
ol,
ul {
  list-style: none;
}
blockquote,
q {
  quotes: none;
}
blockquote:before,
blockquote:after,
q:before,
q:after {
  content: "";
  content: none;
}
table {
  border-collapse: collapse;
  border-spacing: 0;
}

a,
a:hover,
a:active,
a:visited {
  /* text-decoration: none; */
  color: inherit;
}
`, ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 426:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(81);
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(645);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `:root {
  font-size: 15px;
  --app-font: "Open Sans", "Calibri", sans-serif;
}

html {
  min-height: 100vh;
}

body {
  min-height: 100vh;
  margin: 0;
  font-family: var(--app-font);
}

h1 {
  font-size: 3rem;
  font-weight: bold;
}

h2 {
  font-size: 2.2rem;
  font-weight: bold;
}

h3 {
  font-size: 1.8rem;
  font-weight: bold;
}

h4 {
  font-size: 1.5rem;
  font-weight: bold;
}

h5 {
  font-size: 1.2rem;
  font-weight: bold;
}

h6 {
  font-size: 1rem;
  font-weight: bold;
}

p,
ul,
ol {
  line-height: 1.4rem;
}

div,
button,
img {
  transition: 0.2s;
}

li {
  margin: 4px 0;
}

.bold {
  font-weight: bold;
}

a,
a:visited {
  color: black;
  transition: 0.2s;
}

a:hover {
  color: #1383d9;
}

/* Layout styling */

body {
  display: flex;
  flex-direction: column;
  background-color: #e0e0ea;
  align-items: center;
}

#main-grid {
  display: grid;
  grid-template-areas: "hd cc";
  grid-template-columns: 300px auto;
  max-width: 1000px;
  gap: 62px;
  align-items: start;
}

#page-heading {
  grid-area: hd;
}

#content-container {
  grid-area: cc;
}

nav,
main {
  padding-top: 36px;
}

/* Page Heading styling */

nav {
  position: sticky;
  top: 0;
  display: flex;
  flex-direction: column;
  gap: 24px;
}

nav > h1 {
  text-align: right;
}

#contact-container {
  display: flex;
  flex-direction: column;
  gap: 16x;
}

.contact-row {
  display: flex;
  justify-content: flex-end;
  gap: 12px;
  align-items: center;
}

.contact-row > img {
  width: 24px;
  height: 24px;
}

/* Content Styling */

main {
  display: flex;
  flex-direction: column;
  gap: 225px;
  position: relative;
  z-index: 2;
  padding-top: 172px;
}

.project-container {
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.project-container:last-child {
  margin-bottom: 128px;
}

.big-number {
  position: absolute;
  font-size: 28rem;
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
  top: -150px;
  left: -70px;
  z-index: 5;
  opacity: 0.6;
  background: -webkit-linear-gradient(
    115deg,
    rgb(255, 255, 255) 10%,
    #0008a6 100%
  );
  background-clip: text;
  -webkit-background-clip: text;
  -moz-background-clip: text;
  -webkit-text-fill-color: transparent;
  -moz-text-fill-color: transparent;
  line-height: 80%;
}

.project-top {
  display: flex;
  gap: 16px;
  z-index: 10;
}
.project-top > img {
  width: 160px;
  height: 90px;
  border: 1px solid black;
  border-radius: 0 16px 16px 16px;
  box-shadow: 2px 2px 1px #000000;
  cursor: pointer;
}
.project-top > img:hover {
  box-shadow: 2px 2px 1px rgb(85, 85, 255);
}

.project-top .info-box {
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.project-top .info-box > p:first-child {
  font-weight: bold;
  font-size: 1.2rem;
}

.project-bottom {
  border: 1px solid black;
  z-index: 10;
  border-radius: 0 0 24px 24px;
  display: flex;
  flex-direction: column;
}
.project-bottom .features-header {
  padding: 2px 24px 3px 24px;
  background-color: #135fd9aa;
  /* background-color: rgba(0, 62, 0, 0.798); */
  color: white;
  text-align: center;
}

.project-bottom .features {
  padding: 6px 24px 8px 24px;
  background-color: #ffffff99;
  border-radius: 0 0 23px 23px;
}

.project-bottom ul {
  margin-left: 16px;
  list-style-type: disc;
  list-style-position: outside;
}

/* Media queries */

@media screen and (max-width: 1024px) {
  #main-grid {
    grid-template-areas:
      "hd"
      "cc";
    grid-template-columns: 1fr;
    grid-template-rows: min-content auto;
  }

  body {
    padding-left: 16px;
    padding-right: 16px;
  }

  nav {
    position: static;
  }

  nav > h1 {
    text-align: center;
  }

  nav .contact-row {
    justify-content: center;
  }

  .big-number {
    top: -150px;
    left: -20px;
  }
}
`, ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 645:
/***/ ((module) => {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ 81:
/***/ ((module) => {

"use strict";


module.exports = function (i) {
  return i[1];
};

/***/ }),

/***/ 870:
/***/ ((module) => {

module.exports = [{"name":"Battleship!","livePreviewUrl":"https://mgporter.github.io/top10_battleship/","sourceUrl":"https://github.com/mgporter/top10_battleship","description":"The classic game of Battleship, reborn in a 3d javascript environment!","imageUrl":"top10_screenshot.png","features":"Uses a WebGL canvas to display 3d models of ships within the gamespace.//The webGL canvas is 'locked' to a CSS grid through Javascript DOM calculations, even though both grids have 3d transformations. Both elements stay in sync even when resizing or zooming in the window, so they appear as one.//More complex game loop than the Tic-tac-toe game, with different game phases and conditional branches.//Many Dom features are animated: ships capsize when they are sunk, elements flash when they require user interaction, and dom menus animate in and out of the gamespace.//Models are loaded asyncronously using Javascript promises, and a loading bar at the beginning gives progress indication.//Better implementation of pure functions and SOLID principles than previous projects, allowing a good separation of modules (though the dom.js module is a bit long).//Use of Test Driven Development (TDD) principles using Jest.//Heavy use of algorithms. For example, the computer's attack algorithm follows up a hit on a ship by searching around the hit coordinates for the rest of the ship. When it finds the ship's direction, it searches back and forth along this direction until the enemy ship is sunk. Another algorithm finds all the coordinates a ship occupies given the ship's length, direction, and starting coordinates.//Strong use of Object-Oriented Programming principles. The gameboard cells, the ships, the players, the gameboard itself, and even play history are all Javascript objects that interact with each other during gameplay.//The game stores play history such as shots fired and their outcome, as well as total playtime. This can be viewed in the \"battle stats menu\".//Includes gamespeed options to speed up or slow down the progression of the game."},{"name":"Linked List","livePreviewUrl":"https://mgporter.github.io/top09_linkedlist/","sourceUrl":"https://github.com/mgporter/top09_linkedlist","description":"A visualization of a linked list with connected, draggable nodes, built on an actual linked list in Javascript.","imageUrl":"top09_screenshot.png","features":"Creates a linked list using javascript pass-by-reference instead of pointers (as in other languages). Objects are chained together by setting them to the previous object's .next property.//Nodes are absolutely positioned on top of a canvas element based on the location of adjacent nodes. New nodes are always clamped to be inside this element, even when resizing the window.//Nodes are connected with a bezier curve drawn on the canvas. The start/end points are always in the center of the .value/.next part of the node, respectively. Dragging nodes automatically animates the connections so that they stay connected. Applies dynamic scaling to canvas to keep content looking sharp, even when highly zoomed in.//The linked list uses custom error messages on invalid input, which are caught by the dom modules in 'try' blocks and displayed to the user.//The DOM gives the user access to the 12 functions of the linked list by calling those functions directly--there are no intermediary objects. The DOM is updated with logic that decides when to show/clear messages, when to show/clear controls, when to highlight nodes, and so on."},{"name":"Weather App","livePreviewUrl":"https://mgporter.github.io/top08_weather-app/","sourceUrl":"https://github.com/mgporter/top08_weather-app","description":"Look up the weather using autocomplete for locations, with a 3-day forecast and hour by hour data","imageUrl":"top08_screenshot.png","features":"Uses asynchronous functions to retreive data from an API. Fires off custom events to inform the DOM module to update the view based on program state (data loading, data retrieval, change of display units, etc).//Implements autocomplete functionality for locations based on API queries.//Custom built slider displays hourly weather data. Elements in the slider fade in and out by finding the relative position of each element (the 'hour-box'), and calculating its opacity based on its distance from the horizontal center of the screen.//The slider uses the requestAnimationFrame method to create a deceleration effect after being dragged by the mouse by saving a value for the velocity of the slider at mouse release. It then continually adds that value to the slider's position while also decreasing it slowly.//The slider also moves automatically when the user clicks on a day. Because of the opacity calculations, this movement cannot be done with CSS transitions. Instead, it is implemented manually using requestAnimationFrame and a parametric equation to create an ease-in-ease-out movement effect to the desired coordinates."},{"name":"Todo List App","livePreviewUrl":"https://mgporter.github.io/top07_todo-list/","sourceUrl":"https://github.com/mgporter/top07_todo-list","description":"A todo list app that allows uesrs to organize and drag-and-drop items, with automatic saving to localStorage.","imageUrl":"top07_screenshot.png","features":"All data is saved to localStorage and retrieved on startup. All changes are saved when they are made (rather than resaving all lists)//The lastModified timestamp for a list is automatically updated on any change to the list or its items.//Session, list, and items objects are built from factory-functions.//Uses SOLID programming concepts with a modularized degin (separate DOM controller, storage interface, etc).//Uses custom events to trigger DOM updates, i.e., updating timestamps and moving most recently modified lists to the top of the nav bar.//Efficient event listeners: event listeners placed on parent container can use e.target properties to modify relavent child elements.//Item order can be rearranged through drag and drop with custom dropzones that appear on dragstart. Item order is saved with the list."},{"name":"Restaurant Page","livePreviewUrl":"https://mgporter.github.io/top06_restaurant-page/","sourceUrl":"https://github.com/mgporter/top06_restaurant-page","description":"A tabbed navigation site with a  spiffy background that uses webpack to bundle all dependencies and assets.","imageUrl":"top06_screenshot.png","features":"Uses Webpack to bundle project dependencies.//Pages are created dynamically with Javascript, rather than hardcoded into the HTML.//Uses imports and exports of assets and data for images, stylesheets, and csv data.//Moving stars background created by generating svg stars with random size and position onto a div. The div is then animated across the screen with random speed and starting position. Only the divs move, not the stars. This creates a nice parallax effect that is more efficient than animating each star individually."},{"name":"Ultimate Tic-Tac-Toe","livePreviewUrl":"https://mgporter.github.io/top05_tic-tac-toe/","sourceUrl":"https://github.com/mgporter/top05_tic-tac-toe","description":"A tic-tac-toe game that allows for custom grid sizes, number of players, player decals, and even win conditions.","imageUrl":"top05_screenshot.png","features":"Customizable number of players, from 2-8. Turn control will automatically switch between each player.//Allows customizable grid size, such as 5x5 or even non-square grids like 3x6.//Can customize win conditions (how many items in a row that you need to win).//Because grid size and win conditions are dynamic, the algorithm loops over each cell in the grid, and if a surrounding cell is the same as the current cell, the alorithm continues to search in that same direction to see how many of the same cells are in a row. For efficiency, the algorithm continues to the next cell (without doing all the calculations) if a win is not possible from the current cell.//Uses Javascript module pattern to create separate objects for the cells, the board controller, the dom controller, and so on."},{"name":"My Bookshelf","livePreviewUrl":"https://mgporter.github.io/top04_library/","sourceUrl":"https://github.com/mgporter/top04_library","description":"A skeuomorphic virtual bookshelf that displays virtual book entries and information like books on a shelf.","imageUrl":"top04_screenshot.png","features":"Uses Javascript constructor functions to create and store library information as book objects.//CSS background filter, blend, and gradient styling are used to give a realistic bookshelf look complete with spotlights.//Uses HTML forms with Javascript handling.//Custom drop-down menus are created with Javascript that allow manipulation of the book objects."},{"name":"Simple Calculator","livePreviewUrl":"https://mgporter.github.io/top03_calculator/","sourceUrl":"https://github.com/mgporter/top03_calculator","description":"A simple Javascript calculator that actually does decimal numbers correctly. Also does repeated operations.","imageUrl":"top03_screenshot.png","features":"Creates a calculator class with all relevant calculator functions.//Add, subtract, multiply, divide, and use exponents on numbers up to 16 digits. Returns error if number is out of range.//Some buttons have different functions based on calculator state, i.e., the equals button executes a previously entered operation, but can also repeat that operation when pressed multiple times.//Uses the library Big.js to accurately calculate decimal numbers."},{"name":"Etch-a-Sketch","livePreviewUrl":"https://mgporter.github.io/top02_etch-a-sketch/","sourceUrl":"https://github.com/mgporter/top02_etch-a-sketch","description":"Select a color and paint with it by moving the mouse over a grid of custom size. Supports blending of colors.","imageUrl":"top02_screenshot.png","features":"Uses CSS grid to create a custom-sized drawing grid.//Blends selected colors with existing colors by parsing CSS color values with Regex and adding them.//Event listeners are created dynamically based on user input."},{"name":"Rock-Paper-Scissors","livePreviewUrl":"https://mgporter.github.io/top01_rock-paper-scissors/","sourceUrl":"https://github.com/mgporter/top01_rock-paper-scissors","description":"Play an animated game of Rock-paper-scissors against a computer opponent.","imageUrl":"top01_screenshot.png","features":"First Odin project!//Uses CSS animations and keyframes to animate game states.//Uses Javascript event listeners to receive user input.//DOM manipulating with Javascript.//Demonstrates basic program flow."}]

/***/ }),

/***/ 379:
/***/ ((module) => {

"use strict";


var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ 569:
/***/ ((module) => {

"use strict";


var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ 216:
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ 565:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ 795:
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ 589:
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ 890:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./top01_screenshot.png": 866,
	"./top02_screenshot.png": 158,
	"./top03_screenshot.png": 315,
	"./top04_screenshot.png": 222,
	"./top05_screenshot.png": 788,
	"./top06_screenshot.png": 520,
	"./top07_screenshot.png": 11,
	"./top08_screenshot.png": 226,
	"./top09_screenshot.png": 539,
	"./top10_screenshot.png": 50
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 890;

/***/ }),

/***/ 866:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "5f9202fa47ba488dac07.png";

/***/ }),

/***/ 158:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "b2583bdc61719ba89e33.png";

/***/ }),

/***/ 315:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "6cfd88ba87ec7c8ce82b.png";

/***/ }),

/***/ 222:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "0c6b7f86a84cf86c6ccf.png";

/***/ }),

/***/ 788:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "e19ad6c0c929e1bc91a6.png";

/***/ }),

/***/ 520:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "9cac8fef05a18d5f8ec8.png";

/***/ }),

/***/ 11:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "88bf8541c54f1bd48025.png";

/***/ }),

/***/ 226:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "b1da931b01d68604c4b8.png";

/***/ }),

/***/ 539:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "cc619f64cb64baea2a28.png";

/***/ }),

/***/ 50:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "9b2ea8321b1612cd1c65.png";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";

// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js
var injectStylesIntoStyleTag = __webpack_require__(379);
var injectStylesIntoStyleTag_default = /*#__PURE__*/__webpack_require__.n(injectStylesIntoStyleTag);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/styleDomAPI.js
var styleDomAPI = __webpack_require__(795);
var styleDomAPI_default = /*#__PURE__*/__webpack_require__.n(styleDomAPI);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/insertBySelector.js
var insertBySelector = __webpack_require__(569);
var insertBySelector_default = /*#__PURE__*/__webpack_require__.n(insertBySelector);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js
var setAttributesWithoutAttributes = __webpack_require__(565);
var setAttributesWithoutAttributes_default = /*#__PURE__*/__webpack_require__.n(setAttributesWithoutAttributes);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/insertStyleElement.js
var insertStyleElement = __webpack_require__(216);
var insertStyleElement_default = /*#__PURE__*/__webpack_require__.n(insertStyleElement);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/styleTagTransform.js
var styleTagTransform = __webpack_require__(589);
var styleTagTransform_default = /*#__PURE__*/__webpack_require__.n(styleTagTransform);
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js!./src/meyer_reset.css
var meyer_reset = __webpack_require__(968);
;// CONCATENATED MODULE: ./src/meyer_reset.css

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (styleTagTransform_default());
options.setAttributes = (setAttributesWithoutAttributes_default());

      options.insert = insertBySelector_default().bind(null, "head");
    
options.domAPI = (styleDomAPI_default());
options.insertStyleElement = (insertStyleElement_default());

var update = injectStylesIntoStyleTag_default()(meyer_reset/* default */.Z, options);




       /* harmony default export */ const src_meyer_reset = (meyer_reset/* default */.Z && meyer_reset/* default */.Z.locals ? meyer_reset/* default */.Z.locals : undefined);

// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js!./src/style.css
var style = __webpack_require__(426);
;// CONCATENATED MODULE: ./src/style.css

      
      
      
      
      
      
      
      
      

var style_options = {};

style_options.styleTagTransform = (styleTagTransform_default());
style_options.setAttributes = (setAttributesWithoutAttributes_default());

      style_options.insert = insertBySelector_default().bind(null, "head");
    
style_options.domAPI = (styleDomAPI_default());
style_options.insertStyleElement = (insertStyleElement_default());

var style_update = injectStylesIntoStyleTag_default()(style/* default */.Z, style_options);




       /* harmony default export */ const src_style = (style/* default */.Z && style/* default */.Z.locals ? style/* default */.Z.locals : undefined);

// EXTERNAL MODULE: ./src/projects.csv
var projects = __webpack_require__(870);
var projects_default = /*#__PURE__*/__webpack_require__.n(projects);
;// CONCATENATED MODULE: ./src/github-logo.png
const github_logo_namespaceObject = __webpack_require__.p + "c9ebc07142d357b5d270.png";
;// CONCATENATED MODULE: ./src/createElement.js
function createEl(tag, text = null, classes = null, id = null) {
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

;// CONCATENATED MODULE: ./src/domController.js



function domController() {
  function importAll(r) {
    // This function maps an input url to a webpacked id url
    const images = {};
    r.keys().forEach((item) => (images[item] = r(item)));
    return images; // it then returns an object with key-value pairs of the matchings
  }

  // Create an object with the webpack urls of all images in the screenshots folder
  const screenshots = importAll(
    __webpack_require__(890)
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
    githubLogo.src = github_logo_namespaceObject;
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

;// CONCATENATED MODULE: ./src/index.js





function app() {
  const dom = domController();

  const mainGrid = dom.generateStructure();
  document.body.appendChild(mainGrid);

  const nav = dom.generateNav();
  const main = dom.generateMain();
  mainGrid.append(nav, main);

  let projectCounter = 1;

  projects_default().forEach((project) => {
    const projectContainer = dom.generateProjectRow(project, projectCounter);
    main.appendChild(projectContainer);
    projectCounter += 1;
  });
}

app();

})();

/******/ })()
;