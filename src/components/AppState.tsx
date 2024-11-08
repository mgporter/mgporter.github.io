import { useEffect } from "react";
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

export function useAppStoreHook() {
  const appStore = useAppStore()
  const [value, setValue, removeValue] = useLocalStorage("enableEffects", true);

  function setEnableEffects(val: boolean) {
    appStore.setEnableEffects(val);
    setValue(val);
  }

  return {
    enableEffects: appStore.enableEffects,
    setEnableEffects
  }
}