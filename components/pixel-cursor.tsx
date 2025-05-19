"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"

export default function PixelCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [clicked, setClicked] = useState(false)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY })
    }

    const handleMouseDown = () => setClicked(true)
    const handleMouseUp = () => setClicked(false)

    window.addEventListener("mousemove", handleMouseMove)
    window.addEventListener("mousedown", handleMouseDown)
    window.addEventListener("mouseup", handleMouseUp)

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
      window.removeEventListener("mousedown", handleMouseDown)
      window.removeEventListener("mouseup", handleMouseUp)
    }
  }, [])

  return (
    <>
      <motion.div
        className="fixed w-6 h-6 pointer-events-none z-50 mix-blend-difference"
        style={{
          left: position.x - 12,
          top: position.y - 12,
        }}
        animate={{
          scale: clicked ? 0.8 : 1,
        }}
        transition={{ duration: 0.1 }}
      >
        <div className="w-full h-full border-2 border-green-500 rounded-full"></div>
      </motion.div>
      <motion.div
        className="fixed w-2 h-2 bg-green-400 rounded-full pointer-events-none z-50"
        style={{
          left: position.x - 1,
          top: position.y - 1,
        }}
      ></motion.div>
    </>
  )
}
