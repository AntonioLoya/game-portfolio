"use client"

import { useRef, useEffect, useCallback } from "react"

export function useSoundEffects(enabled: boolean) {
  const clickSoundRef = useRef<HTMLAudioElement | null>(null)
  const hoverSoundRef = useRef<HTMLAudioElement | null>(null)

  // Inicializar los sonidos
  useEffect(() => {
    if (typeof window !== "undefined") {
      try {
        // Crear elementos de audio
        clickSoundRef.current = new Audio("/sounds/click.mp3")
        hoverSoundRef.current = new Audio("/sounds/hover.mp3")

        // Configurar volumen
        if (clickSoundRef.current) clickSoundRef.current.volume = 0.3
        if (hoverSoundRef.current) hoverSoundRef.current.volume = 0.1

        // Precargar
        clickSoundRef.current.load()
        hoverSoundRef.current.load()
      } catch (error) {
        console.error("Error al inicializar sonidos:", error)
      }
    }

    // Limpiar
    return () => {
      clickSoundRef.current = null
      hoverSoundRef.current = null
    }
  }, [])

  // Función para reproducir sonido de clic
  const playClickSound = useCallback(() => {
    if (!enabled) return

    try {
      // Usar una nueva instancia cada vez para evitar problemas
      const sound = new Audio("/sounds/click.mp3")
      sound.volume = 0.3
      sound.play().catch((e) => console.error("Error reproduciendo sonido:", e))
    } catch (error) {
      console.error("Error al reproducir sonido de clic:", error)
    }
  }, [enabled])

  // Función para reproducir sonido de hover
  const playHoverSound = useCallback(() => {
    if (!enabled) return

    try {
      // Usar una nueva instancia cada vez para evitar problemas
      const sound = new Audio("/sounds/hover.mp3")
      sound.volume = 0.1
      sound.play().catch((e) => console.error("Error reproduciendo sonido:", e))
    } catch (error) {
      console.error("Error al reproducir sonido de hover:", error)
    }
  }, [enabled])

  return { playClickSound, playHoverSound }
}
