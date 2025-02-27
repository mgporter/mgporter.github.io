import { useState } from "react";
import { ProjectType } from "../data/PROJECTS";
import { Link } from "react-router-dom";
import { useProjectStore } from "./projects/ProjectState";
import { useAppStore } from "./AppState";
import { Field, Label, Switch } from "@headlessui/react";
import { useLocalStorage } from "usehooks-ts";
import NavButton from "./NavButton";

export type NavOptionName = "All"
  | "Featured"
  | "React / Preact"
  | "Typescript"
  | "Java"
  | "Python"
  | "C++"
  | "Database"
  | "WebAssembly"
  | "Vanilla JS"
  | "Open-Source Contribution";

export interface NavOption {
  optionName: NavOptionName,
  types: Set<ProjectType>
}

export const navOptions: NavOption[] = [
  {
    optionName: "All",
    types: new Set<ProjectType>()
  },
  {
    optionName: "Featured",
    types: new Set<ProjectType>()
  },
  {
    optionName: "React / Preact",
    types: new Set<ProjectType>(["React", "Preact"])
  },
  {
    optionName: "Typescript",
    types: new Set<ProjectType>(["TypeScript"])
  },
  {
    optionName: "Java",
    types: new Set<ProjectType>(["Java"])
  },
  {
    optionName: "Python",
    types: new Set<ProjectType>(["Python"])
  },
  {
    optionName: "C++",
    types: new Set<ProjectType>(["C++"])
  },
  {
    optionName: "Database",
    types: new Set<ProjectType>(["MongoDB", "SQLite", "PostgreSQL"])
  },
  {
    optionName: "WebAssembly",
    types: new Set<ProjectType>(["WebAssembly"])
  },
  {
    optionName: "Vanilla JS",
    types: new Set<ProjectType>(["Javascript"])
  },
  {
    optionName: "Open-Source Contribution",
    types: new Set<ProjectType>(["Open-Source"])
  },
]

export default function Nav() {

  const [activeOption, setActiveOption] = useState<NavOptionName>("All");
  const { sortByType, sortByFeatured, reset } = useProjectStore()
  const { narrowWindow } = useAppStore()
  const [enableEffectsLS, setEnableEffectsLS] = useLocalStorage("enableEffects", true);

  function selectProject(option: NavOption) {
    if (option.optionName === "Featured") {
      sortByFeatured()
    } else if (option.optionName === "All") {
      reset()
    } else {
      sortByType(option.types)
    }
    setActiveOption(option.optionName)
  }

  return (
    <nav className="flex flex-col items-center justify-start">

      <div className="navcontainer flex flex-col items-start fixed sm:static gap-6">

        <Link to="/projects" className="w-full flex flex-col items-center">
          <div className="title relative z-10 size-44 mt-8 mb-[-48px] ml-[-4rem]">
            <img src="/images/profile_picture_color.jpg" className="relative rounded-full z-20"></img>
            <div className="absolute z-10 top-6 left-10 size-52 scale-y-[0.2] scale-x-[1.1] translate-y-[2rem] rounded-[100%] bg-stone-600/60"></div>
            <div className="absolute z-[9] top-6 left-2 size-60 scale-y-[0.21] scale-x-[1.1] translate-y-[1.2rem] rounded-[100%] bg-black/60"></div>
          </div>
          
          <h1 className="title relative z-20 text-6xl">mgporter</h1>
        </Link>

        <div className="relative z-20 flex flex-col gap-1 text-lg ">
          <a className="flex group items-center gap-2 hover:text-white" href="https://github.com/mgporter" target="_blank">
            <img src="/images/github-logo.png" alt="Github profile" className="size-6 invert-[0.9] group-hover:invert"></img>
            <p>https://github.com/mgporter</p>
          </a>
          <a className="flex group items-center gap-2 hover:text-white" href="https://linkedin.com/in/mgporter772" target="_blank">
            <img src="/images/Linkedin_logo.png" alt="LinkedIn profile" className="size-6 brightness-90 group-hover:brightness-110"></img>
            <p>https://linkedin.com/in/mgporter772</p>
          </a>
        </div>
        
        <div className="w-full">
          <h2 className="text-xl font-bold mb-2 border-b">Filter projects:</h2>
          <ul className="flex flex-col text-base">
            {navOptions.map(option => (
              <NavButton 
                key={option.optionName}
                isSelected={activeOption === option.optionName}
                option={option}
                handler={() => selectProject(option)} />
              )
            )}
          </ul>
        </div>

        <Field className={`flex items-center gap-2 ${narrowWindow ? "hidden " : " "}`} aria-hidden={narrowWindow}>
          <Switch 
            id="enableEffectsButton"
            checked={enableEffectsLS}
            aria-selected={enableEffectsLS}
            aria-label="enableEffectsButton"
            onChange={(enabled) => setEnableEffectsLS(enabled)}
            className="group inline-flex h-5 w-10 items-center bg-white/20 rounded-full transition data-[checked]:bg-blue-400/60"
          >
            <span className="size-4 translate-x-1 rounded-full bg-gray-200 transition group-data-[checked]:translate-x-5"></span>
          </Switch>
          <Label 
            htmlFor="enableEffectsButton" 
            className={`text-sm ${enableEffectsLS ? "text-white/70" : "text-white/40"}`}
          >
            Enable fancy effects
          </Label>
        </Field>


      </div>

    </nav>
  )
}