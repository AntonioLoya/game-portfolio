"use client"

import { Volume2, VolumeX } from "lucide-react"
import { motion } from "framer-motion"

interface SoundToggleProps {
  enabled: boolean
  setEnabled: (enabled: boolean) => void
}

export default function SoundToggle({ enabled, setEnabled }: SoundToggleProps) {
  return (
    <motion.button
      className={`p-2 rounded-full ${
        enabled ? "bg-green-600 text-black" : "bg-gray-800 text-green-400"
      } border border-green-500`}
      onClick={() => setEnabled(!enabled)}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    >
      {enabled ? <Volume2 size={20} /> : <VolumeX size={20} />}
    </motion.button>
  )
}
