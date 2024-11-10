import { create } from "zustand";

/* Create Project Store */

type ProjectState = {
  enableEffects: boolean,
  narrowWindow: boolean,
  slowConnection: boolean,
}

type ProjectActions = {
  setEnableEffects: (val: boolean) => void
  setNarrowWindow: (val: boolean) => void
  setSlowConnection: (val: boolean) => void
}

const initialSettings: ProjectState = {
  enableEffects: true,
  narrowWindow: false,
  slowConnection: false,
}

export const useAppStore = create<ProjectState & ProjectActions>()(set => ({
  ...initialSettings,
  setEnableEffects: (val: boolean) => set({ enableEffects: val }),
  setNarrowWindow: (val: boolean) => set({ narrowWindow: val }),
  setSlowConnection: (val: boolean) => set({ slowConnection: val }),
}))