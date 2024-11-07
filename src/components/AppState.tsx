import { create } from "zustand";

/* Create Project Store */

type ProjectState = {
  enableEffects: boolean
}

type ProjectActions = {
  setEnableEffects: (val: boolean) => void
}

const initialSettings: ProjectState = {
  enableEffects: true
}

export const useAppStore = create<ProjectState & ProjectActions>()(set => ({
  ...initialSettings,
  setEnableEffects: (val: boolean) => set({ enableEffects: val })
}))