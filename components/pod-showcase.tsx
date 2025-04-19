"use client"

import type React from "react"

import { useRef, useState, useEffect } from "react"
import { motion, useAnimation, AnimatePresence } from "framer-motion"
import Image from "next/image"

export default function PodShowcase() {
  const controls = useAnimation()
  const [activeLight, setActiveLight] = useState(-1)
  const [isHovering, setIsHovering] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  // Simulate pod lights activating in sequence
  useEffect(() => {
    let interval: NodeJS.Timeout

    if (isHovering) {
      let count = 0
      interval = setInterval(() => {
        setActiveLight(count % 12)
        count++
      }, 300)
    } else {
      setActiveLight(-1)
    }

    return () => {
      if (interval) clearInterval(interval)
    }
  }, [isHovering])

  // Handle 3D rotation effect
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return

    const { left, top, width, height } = containerRef.current.getBoundingClientRect()
    const x = (e.clientX - left) / width
    const y = (e.clientY - top) / height

    const rotateX = 10 - y * 20
    const rotateY = x * 20 - 10

    controls.start({
      rotateX,
      rotateY,
      transition: { type: "spring", stiffness: 300, damping: 30 },
    })
  }

  const resetRotation = () => {
    controls.start({
      rotateX: 0,
      rotateY: 0,
      transition: { type: "spring", stiffness: 300, damping: 30 },
    })
  }

  return (
    <div
      className="relative w-full h-full flex items-center justify-center"
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => {
        resetRotation()
        setIsHovering(false)
      }}
      onMouseEnter={() => setIsHovering(true)}
    >
      <div className="relative w-4/5 h-4/5 perspective-1000">
        <motion.div
          className="relative w-full h-full"
          animate={controls}
          initial={{ rotateX: 0, rotateY: 0 }}
          style={{ transformStyle: "preserve-3d" }}
        >
          {/* Main pod image */}
          <div className="relative w-full h-full flex items-center justify-center">
            <div className="relative w-full max-w-md aspect-square">
              <Image
                src="/images/pod.png"
                alt="Athletech Pod"
                width={500}
                height={500}
                className="w-full h-auto object-contain drop-shadow-2xl"
                priority
              />

              {/* Overlay for the LED lights */}
              <div className="absolute inset-0 pointer-events-none">
                {Array.from({ length: 12 }).map((_, index) => {
                  // Calculate position around the circle
                  const angle = index * 30 * (Math.PI / 180)
                  const radius = 42 // % from center
                  const top = 50 + radius * Math.sin(angle)
                  const left = 50 + radius * Math.cos(angle)

                  return (
                    <div
                      key={index}
                      className={`absolute w-3 h-3 rounded-full transform -translate-x-1/2 -translate-y-1/2 transition-all duration-300 ${
                        activeLight === index ? "bg-blue-400 shadow-[0_0_15px_5px_rgba(59,130,246,0.7)]" : "bg-white/20"
                      }`}
                      style={{
                        top: `${top}%`,
                        left: `${left}%`,
                      }}
                    />
                  )
                })}
              </div>
            </div>
          </div>

          {/* Reflection effect */}
          <div
            className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4/5 h-1/5 bg-gradient-to-t from-blue-500/10 to-transparent blur-md rounded-full"
            style={{ transform: "rotateX(90deg) translateZ(-60px)" }}
          />
        </motion.div>
      </div>

      {/* Floating particles */}
      <AnimatePresence>
        {isHovering && (
          <>
            {Array.from({ length: 8 }).map((_, index) => (
              <motion.div
                key={index}
                className="absolute w-2 h-2 rounded-full bg-blue-400"
                initial={{
                  opacity: 0,
                  x: 0,
                  y: 0,
                  scale: 0,
                }}
                animate={{
                  opacity: [0, 0.8, 0],
                  x: Math.random() * 200 - 100,
                  y: Math.random() * -200,
                  scale: [0, 1, 0],
                }}
                transition={{
                  duration: 2,
                  delay: index * 0.2,
                  repeat: Number.POSITIVE_INFINITY,
                  repeatDelay: Math.random() * 2,
                }}
                style={{
                  top: "60%",
                  left: "50%",
                }}
              />
            ))}
          </>
        )}
      </AnimatePresence>

      {/* Pulse effect */}
      <AnimatePresence>
        {isHovering && (
          <motion.div
            className="absolute w-full h-full rounded-full bg-blue-500/5"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{
              scale: [0.8, 1.2, 0.8],
              opacity: [0, 0.5, 0],
            }}
            transition={{
              duration: 3,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
          />
        )}
      </AnimatePresence>
    </div>
  )
}
