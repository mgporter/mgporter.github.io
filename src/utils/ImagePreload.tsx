import { useCallback } from "react"
import { useAppStore } from "../components/AppState";

export default function useImagePreload() {

  const { slowConnection } = useAppStore()

  const preload = useCallback((url: string) => {
    if (slowConnection) return;
    const img = new Image()
    img.src = url
  }, [slowConnection])

  return {
    preload
  }

}