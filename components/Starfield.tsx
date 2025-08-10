"use client"
import { useEffect, useRef } from "react"

export default function Starfield() {
  const ref = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = ref.current!
    const ctx = canvas.getContext("2d")!
    let raf = 0
    const DPR = Math.min(window.devicePixelRatio || 1, 2)

    const getPrimary = () => {
      const cs = getComputedStyle(document.documentElement)
      return cs.getPropertyValue("--color-primary").trim() || "#a855f7"
    }

    const stars = Array.from({ length: 180 }).map(() => ({
      x: Math.random(),
      y: Math.random(),
      z: Math.random() * 0.7 + 0.3,
      r: Math.random() * 0.7 + 0.3,
      c: Math.random() < 0.18 ? "themed" : "white"
    }))

    const resize = () => {
      canvas.width = Math.floor(window.innerWidth * DPR)
      canvas.height = Math.floor(window.innerHeight * DPR)
    }
    const draw = (t: number) => {
      const W = canvas.width, H = canvas.height
      ctx.clearRect(0, 0, W, H)

      const grd = ctx.createRadialGradient(W*0.2, H*0.15, 0, W*0.2, H*0.15, Math.max(W,H)*0.9)
      grd.addColorStop(0, "rgba(255,255,255,0.06)")
      grd.addColorStop(1, "rgba(0,0,0,0)")
      ctx.fillStyle = grd
      ctx.fillRect(0,0,W,H)

      const primary = getPrimary()

      for (const s of stars) {
        const speed = (0.02 + s.z * 0.05)
        const ny = (s.y + speed * 0.0008 * t) % 1
        const x = s.x * W
        const y = ny * H

        const radius = s.r * s.z * DPR
        ctx.globalAlpha = 0.6 + 0.4 * Math.sin((t*0.003 + s.x)*3.14)
        ctx.beginPath()
        ctx.arc(x, y, radius, 0, Math.PI*2)
        ctx.fillStyle = s.c === "themed" ? primary : "white"
        ctx.fill()
      }
      ctx.globalAlpha = 1
      raf = requestAnimationFrame(draw)
    }

    resize()
    window.addEventListener("resize", resize)
    raf = requestAnimationFrame(draw)
    return () => { cancelAnimationFrame(raf); window.removeEventListener("resize", resize) }
  }, [])

  return <canvas ref={ref} className="pointer-events-none fixed inset-0 -z-10" aria-hidden />
}
