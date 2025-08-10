"use client"
import { useEffect, useMemo, useState } from "react"
import Image from "next/image"

const ROLES = ["Rishabh Aggarwal", "Full-Stack Developer", "Rishabh Aggarwal", "Backend Engineer","Rishabh Aggarwal", "React Developer", "Rishabh Aggarwal", "Java Developer", "Rishabh Aggarwal", "Spring Boot Developer"]

function useTypeOnce(text: string, speed = 85) {
  const [out, setOut] = useState("")
  const [done, setDone] = useState(false)
  useEffect(() => {
    if (done) return
    if (out.length < text.length) {
      const id = setTimeout(() => setOut(text.slice(0, out.length + 1)), speed)
      return () => clearTimeout(id)
    }
    setDone(true)
  }, [out, text, speed, done])
  return { text: out, done }
}

function useTypeLoop(list: string[], speed = 70, pause = 900) {
  const [out, setOut] = useState("")
  const [i, setI] = useState(0)
  const [phase, setPhase] = useState<"typing"|"pausing"|"deleting">("typing")

  useEffect(() => {
    const current = list[i % list.length]
    if (phase === "typing") {
      if (out.length < current.length) {
        const id = setTimeout(() => setOut(current.slice(0, out.length + 1)), speed)
        return () => clearTimeout(id)
      }
      setPhase("pausing"); return
    }
    if (phase === "pausing") {
      const id = setTimeout(() => setPhase("deleting"), pause)
      return () => clearTimeout(id)
    }
    if (phase === "deleting") {
      if (out.length > 0) {
        const id = setTimeout(() => setOut(current.slice(0, out.length - 1)), Math.max(30, speed / 1.5))
        return () => clearTimeout(id)
      }
      setI(v => v + 1); setPhase("typing")
    }
  }, [out, phase, i, list, speed, pause])

  return out
}

export default function Hero(){
  const NAME = "Rishabh Aggarwal"
  const { text: nameTyped, done: nameDone } = useTypeOnce(NAME, 85)

  const [rolePhase, setRolePhase] = useState(false)
  useEffect(() => {
    if (nameDone) {
      const t = setTimeout(() => setRolePhase(true), 250)
      return () => clearTimeout(t)
    }
  }, [nameDone])

  const roleTyped = useTypeLoop(ROLES, 70, 900)
  const display = rolePhase ? roleTyped : nameTyped

  // Reserve max width so the line never shifts
  const maxLine = useMemo(
    () => [NAME, ...ROLES].reduce((a, b) => (b.length > a.length ? b : a)),
    []
  )

  return (
    <section className="section pt-24 md:pt-28" id="home" aria-label="Hero">
      <div className="grid md:grid-cols-2 items-center gap-10">
        <div className="text-center md:text-left mx-auto md:mx-0 max-w-[42rem]">
          {/* Greeting scales from the LEFT to avoid looking off-center */}
          <h2
  className={`block text-center sm:text-left text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight text-white/90 transition-transform duration-500 ${
    rolePhase ? "scale-125" : "scale-110"
  }`}
>
  👋 Hi, I’m
</h2>


          {/* Shared slot: name first, then title — no reflow */}
          <div className="relative mt-2 md:mt-3 inline-block">
            {/* Invisible placeholder to lock width/height */}
            <h1
              aria-hidden
              className="opacity-0 pointer-events-none select-none text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight whitespace-nowrap"
            >
              {maxLine}
            </h1>

            {/* Absolute overlay with typing text */}
            <h1 className="absolute inset-0 text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight whitespace-nowrap headline">
              {display}
              <span className="caret-bar" aria-hidden />
            </h1>
          </div>

          <div className="mt-6 flex flex-wrap justify-center md:justify-start items-center gap-3">
            <a className="btn" href="/Rishabh_Aggarwal_Resume.pdf" download>⬇️ Download Resume</a>
          </div>

          <div className="mt-4 flex flex-wrap justify-center md:justify-start items-center gap-3">
            <a className="btn" href="https://github.com/RishabhAggarwal613" target="_blank" rel="noreferrer">GitHub</a>
            <a className="btn" href="https://www.linkedin.com/in/rishabhaggarwal999/" target="_blank" rel="noreferrer">LinkedIn</a>
            <a className="btn" href="mailto:ra613rishabh@gmail.com">Email</a>
            <a className="btn" href="https://leetcode.com/your-handle" target="_blank" rel="noreferrer">LeetCode</a>
          </div>
        </div>

        {/* Avatar with outer rotating squares */}
        <div className="relative w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 mx-auto">
          <div className="squares-ring" aria-hidden>
            {Array.from({ length: 32 }).map((_, idx) => (
              <span key={idx} style={{ ['--i' as any]: idx }} />
            ))}
          </div>
          <div className="relative w-full h-full rounded-full overflow-hidden border-2 border-white/20" style={{ animation: "pulseGlow 3s ease-in-out infinite" }}>
            <Image src="/me.png" alt="Portrait" fill className="object-cover" priority />
          </div>
        </div>
      </div>
    </section>
  )
}
