"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"

interface LoadingScreenProps {
  level?: number
}

export default function LoadingScreen({ level = 99 }: LoadingScreenProps) {
  const [progress, setProgress] = useState(0)
  const [loadingText, setLoadingText] = useState("Inicializando...")

  useEffect(() => {
    const loadingTexts = [
      "Inicializando...",
      "Cargando recursos...",
      "Compilando shaders...",
      "Estableciendo conexión...",
      "¡Listo para comenzar!",
    ]

    const interval = setInterval(() => {
      setProgress((prev) => {
        const newProgress = prev + Math.random() * 15
        return newProgress > 100 ? 100 : newProgress
      })
    }, 200)

    const textInterval = setInterval(() => {
      const currentIndex = loadingTexts.indexOf(loadingText)
      const nextIndex = (currentIndex + 1) % loadingTexts.length
      setLoadingText(loadingTexts[nextIndex])
    }, 500)

    return () => {
      clearInterval(interval)
      clearInterval(textInterval)
    }
  }, [loadingText])

  return (
    <div className="fixed inset-0 bg-black flex flex-col items-center justify-center z-50">
      <div className="fixed inset-0 bg-[url('/descargar.gif')] bg-repeat opacity-10"></div>
      <div className="fixed inset-0 bg-scanlines opacity-10"></div>

      <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-green-400 mb-8">ANTONIO LOYA</h1>
        <h2 className="text-2xl text-green-300 mb-8">DEVELOPER LVL {level}</h2>

        <div className="w-64 md:w-96 h-6 bg-gray-800 rounded-full overflow-hidden border-2 border-green-500 mb-4 pixel-corners">
          <motion.div
            className="h-full bg-gradient-to-r from-green-600 to-green-400"
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
          ></motion.div>
        </div>

        <div className="h-8 flex items-center justify-center">
          <p className="text-green-300">{loadingText}</p>
        </div>

        <p className="text-green-500 mt-8 animate-pulse">
          {progress === 100 ? "PRESS ANY KEY TO CONTINUE" : `${Math.floor(progress)}%`}
        </p>
      </motion.div>
    </div>
  )
}
