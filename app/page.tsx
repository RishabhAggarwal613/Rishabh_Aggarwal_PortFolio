import Navbar from "@/components/Navbar"
import Starfield from "@/components/Starfield"
import Hero from "@/components/Hero"
import Reveal from "@/components/Reveal"
import About from "@/components/About"
import Projects from "@/components/sections/Projects"
import Experience from "@/components/sections/Experience"
import Skills from "@/components/sections/Skills"
import Certifications from "@/components/sections/Certifications"
import Extracurricular from "@/components/sections/Extracurricular"
import Contact from "@/components/sections/Contact"
import Footer from "@/components/sections/Footer"

export default function Page() {
  return (
    <main className="relative">
      <Starfield />
      <Navbar />
      <Reveal><Hero /></Reveal>
      <Reveal><About /></Reveal>
      <Reveal><Projects /></Reveal>
      <Reveal><Experience /></Reveal>
      <Reveal><Skills /></Reveal>
      <Reveal><Certifications /></Reveal>
      <Reveal><Extracurricular /></Reveal>
      <Reveal><Contact /></Reveal>
      <Footer />
    </main>
  )
}
