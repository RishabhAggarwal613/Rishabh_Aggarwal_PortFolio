"use client"
import { useState, useEffect } from "react"

const links = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#skills", label: "Skills" },
  { href: "#certifications", label: "Certifications" },
  { href: "#extracurricular", label: "Leadership" },
  { href: "#contact", label: "Contact" },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    onScroll()
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <header className={`sticky top-0 z-40 transition-all ${scrolled ? "bg-black/35 backdrop-blur border-b border-white/10" : "bg-transparent"}`}>
      <nav className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="#" className="font-black tracking-wide text-lg" style={{textShadow:"2px 2px 0 black"}}>
          <span style={{color:"var(--color-primary)"}}>Rishabh</span> Aggarwal
        </a>
        <div className="hidden md:flex items-center gap-6">
          {links.map(l => (
            <a key={l.href} href={l.href} className="text-white/80 hover:text-white transition relative font-semibold">
              <span className="after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[3px] after:w-0 after:bg-[var(--color-primary)] hover:after:w-full after:transition-all">{l.label}</span>
            </a>
          ))}
        </div>
        <button className="md:hidden inline-flex items-center justify-center w-9 h-9 rounded-xl border-2 border-black bg-white text-black" aria-label="Open menu"
          onClick={() => document.getElementById("mobile-nav")?.classList.toggle("hidden")}>
          ☰
        </button>
        
        </nav>

      <div id="mobile-nav" className="md:hidden hidden border-t border-white/10 bg-black/40 backdrop-blur">
        <div className="mx-auto max-w-6xl px-4 py-3 flex flex-col gap-3">
          {links.map(l => (
            <a key={l.href} href={l.href} className="text-white/90">{l.label}</a>
          ))}
        </div>
      </div>
    </header>
  )
}
