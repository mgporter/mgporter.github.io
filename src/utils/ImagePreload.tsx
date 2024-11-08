import { useCallback } from "react"
import { useClientSettings } from "./config"

export default function useImagePreload() {

  const { slowConnection } = useClientSettings()

  const preload = useCallback((url: string) => {
    if (slowConnection) return;
    const img = new Image()
    img.src = url
  }, [slowConnection])

  return {
    preload
  }

}