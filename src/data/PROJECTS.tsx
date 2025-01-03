import { JSX } from "react";

export type Dimensions_2d = [number, number];
const STANDARD_1080P: Dimensions_2d = [1920, 1080];

export interface Media {
  source: string;
  dimensions: Dimensions_2d,
  type: "image" | "video",
}

export type ProjectType = 
  | "Javascript" 
  | "TypeScript" 
  | "React"
  | "Preact" 
  | "Angular"
  | "Three.js" 
  | "Java" 
  | "Swing"
  | "C++" 
  | "C#"
  | "Python"
  | "PyQt"
  | "WebAssembly" 
  | "WebSockets" 
  | "MongoDB" 
  | "PostgreSQL"
  | "SQLite"
  | "Open-Source";

export interface Project {
  name: string;
  types: Set<ProjectType>;
  status: "featured" | "old" | "default";
  imageThumbnailSrc: string;
  preview: Media;
  livePreviewUrl: string | null;
  sourceUrl: string | null;
  heading: string;
  description: () => JSX.Element;
}


const youtubeStylingProps = "self-center aspect-video w-full px-8 mini:px-0";


const projects: Project[] = [
  {
    name: "Chinese Character Explorer",
    types: new Set(["TypeScript", "React", "C#", "PostgreSQL"]),
    status: "featured",
    imageThumbnailSrc: "/screenshots/webp_thumbnails/ccex.webp",
    preview: {
      source: "/screenshots/webp_full/ccex.webp",
      dimensions: [1906, 1064],
      type: "image",
    },
    livePreviewUrl: "https://mgporter.github.io/ccex/",
    sourceUrl: "https://github.com/mgporter/ccex",
    heading: "An interface to explore the relationships between Chinese characters.",
    description: () => {
      return (<>
        <h5>Introduction</h5>
        <p>The Chinese Character Explorer, or CCEX, contains descriptions, components, and derivatives for over 6,000 Chinese characters. In my learning of Chinese, I was fascinated with how most characters are built from other characters. If you know enough of these 'components', then it gives you a sort of alphabet to use in learning new characters.</p>
        <p>These components, of course, are often called radicals. Many of the radicals do indeed appear quite frequently, such as 氵 for water, which is found in the characters 河 (river), 湖 (lake), and 海 (ocean), as well as many amny others. However, there are also many components that are not commonly accepted radicals. For example, 青 (teal) is not a radical, however it is found in 请 (to invite), 清 (clear), and 晴 (clear day). In this case, the component 青 (teal) gives its pronunciation, rather than its meaning, to its derivative characters. In this case, 青, 请, 清 and 晴 are all pronounced "qing".</p>
        <p>There are many examples of components giving either their meaning or their pronunciation to derivative characters, and that is way I created the Chinese Character Explorer. This simple program lays out the structure of characters into a tree, showing the relatinoships between different characters. I intend this to be helpful for learners of Chinese, as well as those just interested in the characters themselves.</p>
        <h5>An important note</h5>
        <p>Chinese characters have gone through thousands of years of evolution, so that many components of characters were actually once something else. For example, 能 (able to) was originally a pictograph representing a bear. You can still kind of see it if you think of the right side as sharp claws sticking out. In the modern character, however, the components of this character (厶, 月, and 匕) have nothing to do with bears or bear parts, they just resemble how the old character was written. Later, this character was given a separate character for the bear meaning: 熊, and 能 now exists independently as a word meaning "can" or "able to". See, Chinese *can* be fun ;)</p>
        <p>Anyways, the point is that the components given for a certain character are based on the way it is written in MODERN simplified Chinese. For this reason, keep in mind that some components contribute nothing to the character as a whole: they simply exist in the modern character because they look like something else that historically made up that character. The main reason for this is that the purpose of the program is to aid in people learning the read the language, rather than teach them the etymology of the characters. An additional reason is that I would like to include this information, but it's a lot of work to do for every character.</p>
        <h5>Some technical details</h5>
        <p>CCEX is built in React as a frontend, which communicates through a REST api to a backend .NET application running on an AWS instance. That in turn is backed by a PostgreSQL instance running in an AWS RDS instance.</p>
        <p>Enjoy!</p>
      </>)
    }
  },
  {
    name: "Chinese API and Storybook",
    types: new Set(["TypeScript", "Angular", "Java", "PostgreSQL"]),
    status: "featured",
    imageThumbnailSrc: "/screenshots/webp_thumbnails/imj_thumbnail.webp",
    preview: {
      source: "/screenshots/webp_full/imj.webp",
      dimensions: [1874, 1080],
      type: "image",
    },
    livePreviewUrl: null,
    sourceUrl: null,
    heading: "A Chinese storybook creator/reader for language learning built on my own Chinese language REST API using Java Hibernate and PostgreSQL.",
    description: () => {
      return (<>
        <h5 className="font-bold">Overview video:</h5>
        <iframe className={youtubeStylingProps} src="https://www.youtube.com/embed/GMzTu-j3wfs?si=X29hRxqkhmGLDEEt" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
        <h5 className="font-bold">Details:</h5>
        <p>The Chinese API and Storybook, or ImmersionJourney, is a hobby application that I wanted to build to make it easier for learnes of Chinese to start out learning the language. It is aimed at generating stories (and eventually exercises) with multiple forms of learner support from basic text.</p>
        <p>The system is built on a REST API that I built for the Chinese language. The API functions basically like a dictionary, however, it has several features unique to the Chinese language:</p>
        <img src="/images/IMJ_API_uml_diagram.webp" className="self-center w-[80%] m-4 mx-8"></img>
        <p>By separating out the elements of the language in this way, it is possible to provide fine-grained look-up capabilities. Currently, the API contains about 9000 characters (all the level I and level II characters), built using Python scripts. Work is ongoing to categorize and annotate words, since much it needs to be done by hand.</p>
        <p>The API exists primarily as part of the backend to the Storybook application. The goal is to turn raw text stories into interactive experiences that can be explored by the learner. For example, if a learner is stuck on a word in the story, the learner could find its pronunciation, meaning, a picturial representation, and its meanings by just clicking on it. The learner could also add the word to a personal set of vocab words to study later.</p>
        <p>Stories can be "built" (and edited) in an admin area. They are then uploaded to the server and stored in a PostgreSQL database, along with their media (such as images and audio recordings). After that, the story is available for learners to use!</p>
        <p>On the technical side of things, this project is set up as a monorepo with a Angular frontend, Java Spring Backend, and a PostgreSQL database. I use Docker compose to manage its three containers (frontend/backend/database), so startup and shutdown can be done with one command.</p>
      </>)
    }
  },
  {
    name: "Wasm Image Processor",
    types: new Set(["TypeScript", "React", "WebAssembly", "C++"]),
    status: "featured",
    imageThumbnailSrc: "/screenshots/webp_thumbnails/image_processor_thumbnail.webp",
    preview: {
      source: "/screenshots/webp_full/image_processor.webp",
      dimensions: [1874, 1080],
      type: "image",
    },
    livePreviewUrl: "https://image-processor-xi.vercel.app/",
    sourceUrl: "https://github.com/mgporter/image_processor",
    heading: "An example of client-side image processing comparing the performance of WebAssembly (from C++) against Javascript.",
    description: () => {
      return (<>
        <p>Allows users to upload a picture, process it, and save the results back to disk.</p>
        <p>Utilizes C++ code compiled to WebAssembly with emscripten to accelerate image processing (it only does a gaussian blur right now though).</p>
        <p>Data is transferred using Javascript's ArrayBuffers (or pointers to ArrayBuffers). The program manages the WebAssembly memory manually (that is, without using emscripten's 'glue code') in order to keep the wasm code size small (~1,299 bytes).</p>
        <p>Performance of calculation time and overhead time is measured on each run. Even with its extra overhead, the WebAssembly module easily beats the Javascript implementation by a factor of 10.</p>
        <p>Javascript's Web Workers API is used in order to keep the thread responsive during calculations.</p>
      </>)
    }
  },
  {
    name: "Oppia",
    types: new Set(["TypeScript", "Angular", "Python", "Open-Source"]),
    status: "featured",
    imageThumbnailSrc: "/screenshots/webp_thumbnails/oppia_thumbnail.webp",
    preview: {
      source: "/screenshots/webp_full/oppia.webp",
      dimensions: [1280, 640],
      type: "image",
    },
    livePreviewUrl: "https://www.oppia.org/",
    sourceUrl: "https://github.com/oppia/oppia",
    heading: "Oppia is a web app that allows learners to access free lessons created and shared by contributors.",
    description: () => {
      return (<>
        <p>My contributions are currently centered around bug fixes on the Angular frontend and Python Backend.</p>
        <p>I created a bugfix with the certificate generation system which resolved server errors under certain conditions.</p>
        <p>Currently, I am resolving an issue with the saving, loading, and publishing of skill data from the frontend.</p>
      </>)
    }
  },
  {
    name: "Blubble's World Demo",
    types: new Set(["TypeScript", "React", "Three.js"]),
    status: "featured",
    imageThumbnailSrc: "/screenshots/webp_thumbnails/blubbles_world_thumbnail.webp",
    preview: {
      source: "/screenshots/webp_full/blubbles_world.webp",
      dimensions: STANDARD_1080P,
      type: "image",
    },
    livePreviewUrl: "https://blubbleworld-01-client.vercel.app/",
    sourceUrl: "https://github.com/mgporter/blubbleworld-01-client",
    heading: "Build a town and grow your population in this 3d app. Just a demo currently, but you can generate landscapes and place buildings.",
    description: () => {
      return (<>
        <h5 className="font-bold">Watch my video about polymorphism, which features this project:</h5>
        <iframe className={youtubeStylingProps} src="https://www.youtube.com/embed/7M4utWaz0H0?si=rhSXHm7cIWeeo_dK" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
        <p>Blubble's world is built with React, Three.js, and Typescript. It allows the player to buy and place buildings down on a cube-like 3d landscape.</p>
        <p>It makes use of a strongly object-oriented design, and the streamlined selection and building placement system allows easy editing and changing of building properties. For example, building max height, what part of the landscape it can be placed at, etc can all be changed with just one variable.</p>
        <p>Blubble's world is built with an eye towards performance. It primarily uses the Three.js InstancedMesh class, which is difficult to work with, but allows the creation of large landscapes that render efficiently and quickly. Although the InstancedMesh renders many different objects, it is itself only one object, so it cannot save the state of the terrain that it represents by itself. Because of this, I had to build an entire helper system to hold the state of each instance, so that each terrain cube knows whether it is being hovered, selected, has a building on it, how high that building is, and so on.</p>
        <p>This app also features a nifty conversion of mouse coordinates to 3d world coordinates and vice versa, allowing it to align HTML Dom elements with the 3D canvas underneath. This is used to create a nice overlay effect that is fully interactive, and is used in the marker system and selection system.</p>
      </>)
    }
  },
  {
    name: "Battleship! Online (PvP)",
    types: new Set(["Javascript", "Three.js", "React", "Java", "MongoDB", "WebSockets"]),
    status: "featured",
    imageThumbnailSrc: "/screenshots/webp_thumbnails/battleship_online_thumbnail.webp",
    preview: {
      source: "/screenshots/webp_full/battleship_online.webp",
      dimensions: STANDARD_1080P,
      type: "image",
    },
    livePreviewUrl: "https://mgporter.github.io/top10b_battleship_online_client/",
    sourceUrl: "https://github.com/mgporter/top10b_battleship_online_client",
    heading: "Create a game room and play against other players in this Battleship app backed by a Java Spring Boot backend.",
    description: () => {
      return (<>
        <p>Uses React.js with websockets on the frontend, with Java Spring Boot and MongoDB on the backend.</p>
        <p>Players are provided with constant feedback on their opponent and his/her actions, improving the UI/UX experience.</p>
        <p>The frontend utilizes most of the hooks in React, including useCallback and useMemo for efficiency. I also created custom hooks and a simple event emitter to streamline the code.</p>
        <p>Games can be saved and loaded, as long as at least one player is in the game room. On the backend, the server efficiently stores only the minimum game state needed to recreate the game.</p>
        <p>The server performs all checks and calculations within the game independently, rather than trusting the client. Data sent to the player is only what the player is allowed to see at any particular moment (we don't just send everything to the player and let the client work it out).</p>
        <p>Access the server repository here: https://github.com/mgporter/top10b_battleship_online</p>
      </>)
    }
  },
  {
    name: "Canvas Pages Generator",
    types: new Set(["Python", "PyQt", "SQLite"]),
    status: "default",
    imageThumbnailSrc: "/screenshots/webp_thumbnails/canvas_pages_generator_thumbnail.webp",
    preview: {
      source: "/screenshots/webp_full/canvas_pages_generator.mp4",
      dimensions: [1344, 756],
      type: "video",
    },
    livePreviewUrl: null,
    sourceUrl: "https://github.com/mgporter/Canvas-Pages-Generator",
    heading: "A Python application that allows teachers to enter data, generates a page from that data using a template, and finally uploads the page to the teacher's Canvas account.",
    description: () => {
      return (<>
        <p>The user can select any year, any month, and any combination of grade levels. The user can enter in goals (and reuse previous months' goals in one click if desired), as well as activities with images or video.</p>
        <p>Saves information immediately on input; no need to use a save button. Data is saved into a SQLite database and retreived as needed.</p>
        <p>Once the user decides to upload the page, the program interfaces with the Canvas API to upload all media files, then generate a page and fill it in with the text data and URLs of uploaded media, and finally upload the resulting page to Canvas.</p>
        <p>Configuration settings are saved in an .ini file so that the program always remembers the most recent settings.</p>
        <p>The Python source code includes full type definitions for all classes and methods.</p>
      </>)
    }
  },
  {
    name: "Audiveris",
    types: new Set(["Java", "Swing", "Open-Source"]),
    status: "default",
    imageThumbnailSrc: "/screenshots/webp_thumbnails/audiveris.webp",
    preview: {
      source: "/screenshots/webp_full/audiveris.webp",
      dimensions: [567, 260],
      type: "image",
    },
    livePreviewUrl: null,
    sourceUrl: "https://github.com/Audiveris/audiveris",
    heading: "Written by Hervé Bitteur, Audiveris converts images of sheet music to MusicXML format.",
    description: () => {
      return (<>
        <p>My contributions include UI and usability updates. Audiveris is an application long in development and now consists of ~400,000 lines, so it presents numerous challenges to contributors.</p>
        <p>I worked on UI elements related to binarization (conversion of images to black and white). My binarization UI elements tie into the processing engine to allow quick editing of binarization settings and real-time updated views.</p>
      </>)
    }
  },
  {
    name: "Wordle Wrangler",
    types: new Set(["Java"]),
    status: "default",
    imageThumbnailSrc: "/screenshots/webp_thumbnails/wordle_wrangler_thumbnail.webp",
    preview: {
      source: "/screenshots/webp_full/wordle_wrangler.gif",
      dimensions: [1376, 675],
      type: "image",
    },
    livePreviewUrl: null,
    sourceUrl: "https://github.com/mgporter/java03_wordle-wrangler",
    heading: "My mom likes to play Wordle, so I created a program to help me beat her at it ;)",
    description: () => {
      return (<>
        <p>Wordle Wrangler works by first inputting the target word, and then inputting the result, using CAPITAL LETTERS for green, lowercase letters for yellow, and ??? for gray.</p>
        <p>See it in action above!</p>
        <p>Under the hood, the wrangler uses Iterator and Stream classes to efficiently process and filter the &gt;69,000 words in the dictionary.</p>
        <p>It also handles fringe cases, such as when double letters appear and one is valid but the other is not.</p>
        <p>Uses colorized console text and instructions for guided input, and provides helpful warning messages to teach the user to provide correct input.</p>
      </>)
    }
  },
  {
    name: "Moana Memory Card Game",
    types: new Set(["Javascript", "React"]),
    status: "default",
    imageThumbnailSrc: "/screenshots/webp_thumbnails/moana_memory_cards_thumbnail.webp",
    preview: {
      source: "/screenshots/webp_full/moana_memory_cards.webp",
      dimensions: [1883, 1059],
      type: "image",
    },
    livePreviewUrl: "https://top11-memory-cards.vercel.app/",
    sourceUrl: "https://github.com/mgporter/top11_memory-cards",
    heading: "Click on each character once and only once, but beware: the cards shuffle themselves after each click!",
    description: () => {
      return (<>
        <p>My first app using the React library!</p>
        <p>Uses React's useState and useEffect hooks to manage rendering.</p>
        <p>Animations give user feedback based on if cards are selected correctly or incorrectly, and also when they are shuffled.</p>
        <p>The shuffling animation uses Javascript to calculate a translate value for each card. It works no matter the screen size, zoom level, number of cards displayed, or the arrangement of the cards on the screen.</p>
        <p>Uses asynchronous functions and JS Promises to fetch data from an API and update state when ready.</p>
        <p>Automatically sizes characters' names to fit within the space on the card. You can test this by adding new random cards to the set. Since the names are not known ahead of time, the algorithm scales them down if they would have overflowed the container.</p>
      </>)
    }
  },
  {
    name: "Knights' Travails",
    types: new Set(["Java"]),
    status: "default",
    imageThumbnailSrc: "/screenshots/webp_thumbnails/knights_travails_thumbnail.webp",
    preview: {
      source: "/screenshots/webp_full/knights_travails.gif",
      dimensions: [1107, 651],
      type: "image",
    },
    livePreviewUrl: null,
    sourceUrl: "https://github.com/mgporter/java01_knights-travails",
    heading: "An algorithm to find the shortest path for a chess knight to move between any two squares.",
    description: () => {
      return (<>
        <p>To use Knights Travails, we call the program with four arguments: the startingRow, the startingColumn, the endingRow, and the endingColumn.</p>
        <p>This program uses a breadth-first search algorithm to find the fewest number of jumps a knight would take from the start square to the ending square</p>
        <p>Throws helpful errors to the user when given incorrect input. Notice in the gif how the user gets an error when an invalid square is inputted.</p>
        <p>Uses basic java.util data structures.</p>
      </>)
    }
  },
  {
    name: "Battleship! Single-player",
    types: new Set(["Javascript", "Three.js"]),
    status: "default",
    imageThumbnailSrc: "/screenshots/webp_thumbnails/battleship_singleplayer_thumbnail.webp",
    preview: {
      source: "/screenshots/webp_full/battleship_singleplayer.webp",
      dimensions: STANDARD_1080P,
      type: "image",
    },
    livePreviewUrl: "https://mgporter.github.io/top10_battleship/",
    sourceUrl: "https://github.com/mgporter/top10_battleship",
    heading: "The classic game of Battleship, reborn in a 3d javascript environment!",
    description: () => {
      return (<>
        <p>Players face off against a hand-coded computer opponent. The opponent's algorithm searches for your ships and picks them off one by one when it finds them.</p>
        <p>Uses a WebGL canvas to display 3d models of ships within the gamespace.</p>
        <p>Uses a 3d Three.js canvas (for the 3d models) superimposed on a CSS div (for user interaction). The two are 'locked' together with Javascript, even with transformations and resize events.</p>
        <p>UI/UX design: ships capsize when they are sunk, elements flash to show they require user interaction, and dom menus animate in and out of the gamespace.</p>
        <p>Models are loaded asyncronously using Javascript promises, and a loading bar at the beginning gives progress indication.</p>
        <p>Use of Jest to test automate testing.</p>
        <p>Strong use of Object-Oriented Programming principles, e.g. with the gameboard, the ships, and the players.</p>
        <p>The game stores play history in a collection of 'battle stats' that players can view.</p>
        <p>Includes gamespeed options to speed up or slow down the progression of the game.</p>
      </>)
    }
  },
  {
    name: "Profile Page Website",
    types: new Set(["TypeScript", "Preact"]),
    status: "default",
    imageThumbnailSrc: "/screenshots/webp_thumbnails/profile_website_thumbnail.webp",
    preview: {
      source: "/screenshots/webp_full/profile_website.webp",
      dimensions: [1873, 1054],
      type: "image",
    },
    livePreviewUrl: "https://mgporter.github.io/",
    sourceUrl: "https://github.com/mgporter/mgporter.github.io",
    heading: "The website you are viewing now. A lightweight portfolio showcase made with Preact, Typescript, and GRADIENTS ;) .",
    description: () => {
      return (<>
        <p>This is a simple website for displaying some of my programming work. It is lightweight, and responsive up to 500% zoom. Asides from using Preact to cut down on overhead code, it also contains simple optimizations to improve the user experience on slower connections. For example, thumbnail and placeholder images are used to improve 'first meaningful paint', and some images are preloaded to keep animations smooth.</p>
        <p>I couldn't help but include one snazzy effect when the user opens a project. The page 'bubbles' out and is replaced by the project description. This effect actually has quite a few moving parts, since it is not usually possible to clip (or delete) a portion of an element starting from the inside. See if you can figure out how it's done! As far as hooks, this effect requires the rarely-seen useLayoutEffect hook to get accurate measurements of dom elements (complicated greatly by the presence/absence of the scrollbar!).</p>
      </>)
    }
  },
  {
    name: "Visual Linked List",
    types: new Set(["Javascript"]),
    status: "default",
    imageThumbnailSrc: "/screenshots/webp_thumbnails/linked_list_thumbnail.webp",
    preview: {
      source: "/screenshots/webp_full/linked_list.webp",
      dimensions: STANDARD_1080P,
      type: "image",
    },
    livePreviewUrl: "https://mgporter.github.io/top09_linkedlist/",
    sourceUrl: "https://github.com/mgporter/top09_linkedlist",
    heading: "A visualization of a linked list with connected, draggable nodes, built on an actual linked list in Javascript.",
    description: () => {
      return (<>
        <p>Creates a linked list using javascript pass-by-reference instead of pointers (as in other languages). Objects are chained together by setting them to the previous object's .next property.</p>
        <p>Nodes are absolutely positioned on top of a canvas element based on the location of adjacent nodes. New nodes are always clamped to be inside this element, even when resizing the window.</p>
        <p>Nodes are connected with a bezier curve drawn on the canvas. The start/end points are always in the center of the .value/.next part of the node, respectively. Dragging nodes automatically animates the connections so that they stay connected. Applies dynamic scaling to canvas to keep content looking sharp, even when highly zoomed in.</p>
        <p>The linked list uses custom error messages on invalid input, which are caught by the dom modules in 'try' blocks and displayed to the user.</p>
        <p>The DOM gives the user access to the 12 functions of the linked list by calling those functions directly--there are no intermediary objects. The DOM is updated with logic that decides when to show/clear messages, when to show/clear controls, when to highlight nodes, and so on.</p>
      </>)
    }
  },
  {
    name: "Weather App",
    types: new Set(["Javascript"]),
    status: "default",
    imageThumbnailSrc: "/screenshots/webp_thumbnails/weather_app_thumbnail.webp",
    preview: {
      source: "/screenshots/webp_full/weather_app.webp",
      dimensions: STANDARD_1080P,
      type: "image",
    },
    livePreviewUrl: "https://mgporter.github.io/top08_weather-app/",
    sourceUrl: "https://github.com/mgporter/top08_weather-app",
    heading: "Frontend for a weather API that features a 3-day day-by-day report as well as hour-by-hour forecasts.",
    description: () => {
      return (<>
        <p>Uses asynchronous functions to retreive data from an API. Fires off custom events to inform the DOM module to update the view based on program state (data loading, data retrieval, change of display units, etc).</p>
        <p>Implements autocomplete functionality for locations based on API queries.</p>
        <p>Custom built slider displays hourly weather data. Elements in the slider fade in and out by finding the relative position of each element (the 'hour-box'), and calculating its opacity based on its distance from the horizontal center of the screen.</p>
        <p>The slider uses the requestAnimationFrame method to create a deceleration effect after being dragged by the mouse by saving a value for the velocity of the slider at mouse release. It then continually adds that value to the slider's position while also decreasing it slowly.</p>
        <p>The slider also moves automatically when the user clicks on a day. Because of the opacity calculations, this movement cannot be done with CSS transitions. Instead, it is implemented manually using requestAnimationFrame and a parametric equation to create an ease-in-ease-out movement effect to the desired coordinates.</p>
      </>)
    }
  },
  {
    name: "Todo List App",
    types: new Set(["Javascript"]),
    status: "default",
    imageThumbnailSrc: "/screenshots/webp_thumbnails/todo_list_app_thumbnail.webp",
    preview: {
      source: "/screenshots/webp_full/todo_list_app.webp",
      dimensions: STANDARD_1080P,
      type: "image",
    },
    livePreviewUrl: "https://mgporter.github.io/top07_todo-list/",
    sourceUrl: "https://github.com/mgporter/top07_todo-list",
    heading: "A todo list app that allows uesrs to organize and drag-and-drop items, with automatic saving to LocalStorage.",
    description: () => {
      return (<>
        <p>All data is saved to localStorage and retrieved on startup. All changes are saved when they are made (rather than resaving all lists).</p>
        <p>The lastModified timestamp for a list is automatically updated on any change to the list or its items.</p>
        <p>Session, list, and items objects are built from factory-functions.</p>
        <p>Uses SOLID programming concepts with a modularized degin (separate DOM controller, storage interface, etc).</p>
        <p>Uses custom events to trigger DOM updates, i.e., updating timestamps and moving most recently modified lists to the top of the nav bar.</p>
        <p>Efficient event listeners: event listeners placed on parent container can use e.target properties to modify relavent child elements.</p>
        <p>Item order can be rearranged through drag and drop with custom dropzones that appear on dragstart. Item order is saved with the list.</p>
      </>)
    }
  },
  {
    name: "Restaurant Page",
    types: new Set(["Javascript"]),
    status: "default",
    imageThumbnailSrc: "/screenshots/webp_thumbnails/restaurant_page_thumbnail.webp",
    preview: {
      source: "/screenshots/webp_full/restaurant_page.webp",
      dimensions: [1875, 1055],
      type: "image",
    },
    livePreviewUrl: "https://mgporter.github.io/top06_restaurant-page/",
    sourceUrl: "https://github.com/mgporter/top06_restaurant-page",
    heading: "A tabbed navigation site with a spiffy background that uses webpack to bundle all dependencies and assets.",
    description: () => {
      return (<>
        <p>Uses Webpack to bundle project dependencies.</p>
        <p>Pages are created dynamically with Javascript, rather than hardcoded into the HTML.</p>
        <p>Uses imports and exports of assets and data for images, stylesheets, and csv data.</p>
        <p>Moving stars background created by generating svg stars with random size and position onto a div. The div is then animated across the screen with random speed and starting position. Only the divs move, not the stars. This creates a nice parallax effect that is more efficient than animating each star individually.</p>
      </>)
    }
  },
  {
    name: "Ultimate Tic-Tac-Toe",
    types: new Set(["Javascript"]),
    status: "old",
    imageThumbnailSrc: "/screenshots/webp_thumbnails/ultimate_tic_tac_toe_thumbnail.webp",
    preview: {
      source: "/screenshots/webp_full/ultimate_tic_tac_toe.webp",
      dimensions: STANDARD_1080P,
      type: "image",
    },
    livePreviewUrl: "https://mgporter.github.io/top05_tic-tac-toe/",
    sourceUrl: "https://github.com/mgporter/top05_tic-tac-toe",
    heading: "A tic-tac-toe game that allows for custom grid sizes, number of players, player decals, and even win conditions.",
    description: () => {
      return (<>
        <p>Customizable number of players, from 2-8. Turn control will automatically switch between each player.</p>
        <p>Allows customizable grid size, such as 5x5 or even non-square grids like 3x6.</p>
        <p>Can customize win conditions (how many items in a row that you need to win).</p>
        <p>Because grid size and win conditions are dynamic, the algorithm loops over each cell in the grid, and if a surrounding cell is the same as the current cell, the alorithm continues to search in that same direction to see how many of the same cells are in a row. For efficiency, the algorithm continues to the next cell (without doing all the calculations) if a win is not possible from the current cell.</p>
        <p>Uses Javascript module pattern to create separate objects for the cells, the board controller, the dom controller, and so on.</p>
      </>)
    }
  },
  {
    name: "Bookshelf App",
    types: new Set(["Javascript"]),
    status: "old",
    imageThumbnailSrc: "/screenshots/webp_thumbnails/bookshelf_app_thumbnail.webp",
    preview: {
      source: "/screenshots/webp_full/bookshelf_app.webp",
      dimensions: [1900, 1069],
      type: "image",
    },
    livePreviewUrl: "https://mgporter.github.io/top04_library/",
    sourceUrl: "https://github.com/mgporter/top04_library",
    heading: "A skeuomorphic virtual bookshelf that displays virtual book entries and information like books on a shelf.",
    description: () => {
      return (<>
        <p>Uses Javascript constructor functions to create and store library information as book objects.</p>
        <p>CSS background filter, blend, and gradient styling are used to give a realistic bookshelf look complete with spotlights.</p>
        <p>Uses HTML forms with Javascript handling.</p>
        <p>Custom drop-down menus are created with Javascript that allow manipulation of the book objects.</p>
      </>)
    }
  },
  {
    name: "Simple Calculator",
    types: new Set(["Javascript"]),
    status: "old",
    imageThumbnailSrc: "/screenshots/webp_thumbnails/simple_calculator_thumbnail.webp",
    preview: {
      source: "/screenshots/webp_full/simple_calculator.webp",
      dimensions: STANDARD_1080P,
      type: "image",
    },
    livePreviewUrl: "https://mgporter.github.io/top03_calculator/",
    sourceUrl: "https://github.com/mgporter/top03_calculator",
    heading: "A simple Javascript calculator that does decimal numbers correctly. Also does repeated operations.",
    description: () => {
      return (<>
        <p>Creates a calculator class with all relevant calculator functions.</p>
        <p>Add, subtract, multiply, divide, and use exponents on numbers up to 16 digits. Returns error if number is out of range.</p>
        <p>Some buttons have different functions based on calculator state, i.e., the equals button executes a previously entered operation, but can also repeat that operation when pressed multiple times.</p>
        <p>Uses the library Big.js to accurately calculate decimal numbers.</p>
      </>)
    }
  },
  {
    name: "Etch-a-Sketch",
    types: new Set(["Javascript"]),
    status: "old",
    imageThumbnailSrc: "/screenshots/webp_thumbnails/etch_a_sketch_thumbnail.webp",
    preview: {
      source: "/screenshots/webp_full/etch_a_sketch.webp",
      dimensions: STANDARD_1080P,
      type: "image",
    },
    livePreviewUrl: "https://mgporter.github.io/top02_etch-a-sketch/",
    sourceUrl: "https://github.com/mgporter/top02_etch-a-sketch",
    heading: "Select a color and paint with it by moving the mouse over a grid of custom size. Supports blending of colors.",
    description: () => {
      return (<>
        <p>Uses CSS grid to create a custom-sized drawing grid.</p>
        <p>Blends selected colors with existing colors by parsing CSS color values with Regex and adding them.</p>
        <p>Event listeners are created dynamically based on user input.</p>
      </>)
    }
  },
  {
    name: "Rock-Paper-Scissors",
    types: new Set(["Javascript"]),
    status: "old",
    imageThumbnailSrc: "/screenshots/webp_thumbnails/rock_paper_scissors_thumbnail.webp",
    preview: {
      source: "/screenshots/webp_full/rock_paper_scissors.webp",
      dimensions: STANDARD_1080P,
      type: "image",
    },
    livePreviewUrl: "https://mgporter.github.io/top01_rock-paper-scissors/",
    sourceUrl: "https://github.com/mgporter/top01_rock-paper-scissors",
    heading: "Play an animated game of Rock-paper-scissors against a computer opponent.",
    description: () => {
      return (<>
        <p>First Javascript project!</p>
        <p>Uses CSS animations and keyframes to animate game states.</p>
        <p>Uses Javascript event listeners to receive user input.</p>
        <p>DOM manipulating with Javascript.</p>
        <p>Demonstrates basic program flow.</p>
      </>)
    }
  }

]

export { projects };