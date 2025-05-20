"use client"

import { Volume2, VolumeX } from "lucide-react"
import { motion } from "framer-motion"

interface SoundToggleProps {
  enabled: boolean
  setEnabled: (enabled: boolean) => void
}

export default function SoundToggle({ enabled, setEnabled }: SoundToggleProps) {
  const handleToggle = () => {
    // Intentar reproducir un sonido para verificar que funciona
    if (!enabled) {
      const audio = new Audio("/sounds/click.mp3")
      audio.volume = 0.3
      audio.play().catch((e) => console.error("Error al probar el sonido:", e))
    }
    setEnabled(!enabled)
  }

  return (
    <motion.button
      className={`p-2 pixel-corners ${
        enabled
          ? "bg-green-600 text-black border-2 border-green-400"
          : "bg-gray-800 text-green-400 border-2 border-green-500"
      } relative overflow-hidden`}
      onClick={handleToggle}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    >
      {/* Efecto de pixelado en las esquinas */}
      <div className="absolute top-0 left-0 w-2 h-2 bg-black opacity-20"></div>
      <div className="absolute top-0 right-0 w-2 h-2 bg-black opacity-20"></div>
      <div className="absolute bottom-0 left-0 w-2 h-2 bg-black opacity-20"></div>
      <div className="absolute bottom-0 right-0 w-2 h-2 bg-black opacity-20"></div>

      {/* Efecto de brillo */}
      <div
        className={`absolute inset-0 opacity-20 ${enabled ? "bg-green-300" : "bg-green-900"}`}
        style={{
          background: `linear-gradient(135deg, 
               ${enabled ? "rgba(74, 222, 128, 0.5)" : "rgba(20, 83, 45, 0.5)"} 0%, 
               transparent 50%, 
               transparent 100%)`,
        }}
      ></div>

      {enabled ? <Volume2 size={20} /> : <VolumeX size={20} />}
    </motion.button>
  )
}
