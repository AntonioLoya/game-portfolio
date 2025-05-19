"use client"

import { useState, useEffect } from "react"

export function useIsMobile() {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    // Función para verificar si es un dispositivo móvil
    const checkMobile = () => {
      const userAgent = typeof window.navigator === "undefined" ? "" : navigator.userAgent
      const mobile = Boolean(userAgent.match(/Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i))
      setIsMobile(mobile || window.innerWidth <= 768)
    }

    // Verificar al cargar
    checkMobile()

    // Verificar al cambiar el tamaño de la ventana
    window.addEventListener("resize", checkMobile)

    // Limpiar
    return () => window.removeEventListener("resize", checkMobile)
  }, [])

  return isMobile
}
