import { useLocalStorage } from "usehooks-ts";
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

export function useAppState() {
  const appStore = useAppStore()
  const effectStorage = useLocalStorage("enableEffects", true);

  function setEnableEffects(val: boolean) {
    appStore.setEnableEffects(val);
    effectStorage[1](val);
  }

  return {
    enableEffects: appStore.enableEffects,
    setEnableEffects
  }
}