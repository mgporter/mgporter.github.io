import { useCallback } from "react"

export default function useImagePreload() {

  const preload = useCallback((url: string) => {
    const img = new Image()
    img.src = url
  }, [])

  return {
    preload
  }

}