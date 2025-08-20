// components/Hero.tsx
"use client";
import { useEffect, useMemo, useState } from "react";
import Image from "next/image";

const ROLES = [
  "Rishabh Aggarwal",
  "Software Developer",
  "Full-Stack Developer",
  "Rishabh Aggarwal",
  "Backend Engineer",
  "Rishabh Aggarwal",
  "React Developer",
  "Rishabh Aggarwal",
  "Java Developer",
  "Rishabh Aggarwal",
  "Spring Boot Developer",
];

function useReduceMotion() {
  const [reduced, setReduced] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const on = () => setReduced(mq.matches);
    on(); mq.addEventListener("change", on);
    return () => mq.removeEventListener("change", on);
  }, []);
  return reduced;
}

function useTypeOnce(text: string, speed = 85) {
  const [out, setOut] = useState("");
  const [done, setDone] = useState(false);
  useEffect(() => {
    if (done) return;
    if (out.length < text.length) {
      const id = setTimeout(() => setOut(text.slice(0, out.length + 1)), speed);
      return () => clearTimeout(id);
    }
    setDone(true);
  }, [out, text, speed, done]);
  return { text: out, done };
}

function useTypeLoop(list: string[], speed = 70, pause = 900) {
  const [out, setOut] = useState("");
  const [i, setI] = useState(0);
  const [phase, setPhase] = useState<"typing" | "pausing" | "deleting">("typing");

  useEffect(() => {
    const current = list[i % list.length];
    if (phase === "typing") {
      if (out.length < current.length) {
        const id = setTimeout(() => setOut(current.slice(0, out.length + 1)), speed);
        return () => clearTimeout(id);
      }
      setPhase("pausing"); return;
    }
    if (phase === "pausing") {
      const id = setTimeout(() => setPhase("deleting"), pause);
      return () => clearTimeout(id);
    }
    if (phase === "deleting") {
      if (out.length > 0) {
        const id = setTimeout(() => setOut(current.slice(0, out.length - 1)), Math.max(30, speed / 1.5));
        return () => clearTimeout(id);
      }
      setI(v => v + 1); setPhase("typing");
    }
  }, [out, phase, i, list, speed, pause]);

  return out;
}

export default function Hero() {
  const NAME = "Rishabh Aggarwal";
  const reduceMotion = useReduceMotion();

  const { text: nameTyped, done: nameDone } = useTypeOnce(NAME, 85);
  const [rolePhase, setRolePhase] = useState(false);

  useEffect(() => {
    if (reduceMotion) return;
    if (nameDone) {
      const t = setTimeout(() => setRolePhase(true), 250);
      return () => clearTimeout(t);
    }
  }, [nameDone, reduceMotion]);

  const roleTyped = useTypeLoop(ROLES, 70, 900);
  const display = reduceMotion ? NAME : rolePhase ? roleTyped : nameTyped;

  // Reserve widest string to avoid layout shift; allow wrap on tiny screens
  const maxLine = useMemo(
    () => [NAME, ...ROLES].reduce((a, b) => (b.length > a.length ? b : a)),
    []
  );

  return (
    <section className="section pt-16 min-[400px]:pt-20 sm:pt-24 md:pt-28" id="home" aria-label="Hero">
      <div className="grid gap-10 md:grid-cols-2 items-center">
        {/* Left: text */}
        <div
          className="text-center md:text-left mx-auto md:mx-0 max-w-[42rem]"
          style={reduceMotion ? undefined : { animation: "floatY 6s ease-in-out infinite" }}
        >
          {/* Tiny badge */}
          <div className="inline-flex items-center gap-2 chip">
            <span aria-hidden>🚀</span> Open to SDE / Full-Stack roles
          </div>

          {/* Greeting */}
          <h2
            className={[
              "block text-center sm:text-left font-extrabold tracking-tight text-white/90 transition-transform duration-500",
              "text-2xl min-[380px]:text-3xl sm:text-4xl md:text-5xl",
              rolePhase && !reduceMotion ? "sm:scale-110 md:scale-125" : "scale-105",
            ].join(" ")}
          >
            👋 Hi, I’m
          </h2>

          {/* Shared slot: name first, then titles */}
          <div className="relative mt-2 md:mt-3 inline-block max-w-full">
            {/* Placeholder to lock dimensions */}
            <h1
              aria-hidden
              className="opacity-0 pointer-events-none select-none text-balance text-4xl min-[380px]:text-5xl md:text-6xl font-extrabold leading-tight max-w-full
                         whitespace-normal sm:whitespace-nowrap"
            >
              {maxLine}
            </h1>

            {/* Overlay typed text */}
            <h1
              className="absolute inset-0 text-balance text-4xl min-[380px]:text-5xl md:text-6xl font-extrabold leading-tight max-w-full
                         whitespace-normal sm:whitespace-nowrap headline grad-text"
              aria-live="polite"
            >
              {display}
              {!reduceMotion && <span className="caret-bar" aria-hidden />}
            </h1>
          </div>

          {/* Subline */}
          <p className="mt-3 sm:mt-4 text-white/85 max-w-prose mx-auto md:mx-0 text-base min-[380px]:text-lg">
            Java-centric Full-Stack (Spring Boot + React/Next.js). I build clean, performant UIs, real-time collab, and AI-assisted flows.
          </p>

          {/* Tech chips */}
          <div className="mt-4 flex flex-wrap justify-center md:justify-start gap-2">
            {["Spring Boot", "Java", "React", "Next.js", "Tailwind", "MongoDB"].map((t) => (
              <span key={t} className="chip">{t}</span>
            ))}
          </div>

          {/* CTAs */}
          <div className="mt-6 flex flex-col sm:flex-row sm:flex-wrap justify-center md:justify-start items-stretch sm:items-center gap-3">
            <a className="btn w-full sm:w-auto justify-center" href="/Rishabh_Aggarwal_Resume.pdf" download>
              ⬇️ <span className="sr-only">Download</span> Resume
            </a>
            <a className="btn w-full sm:w-auto justify-center" href="#projects">✨ View Projects</a>
            <a className="btn w-full sm:w-auto justify-center" href="#contact">📬 Contact</a>
          </div>

          {/* Socials */}
          <div className="mt-4 grid grid-cols-2 sm:flex sm:flex-wrap gap-3 justify-center md:justify-start">
            <a className="btn justify-center" href="https://github.com/RishabhAggarwal613" target="_blank" rel="noopener noreferrer">GitHub</a>
            <a className="btn justify-center" href="https://www.linkedin.com/in/rishabhaggarwal999/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <a className="btn justify-center" href="mailto:ra613rishabh@gmail.com">Email</a>
            <a className="btn justify-center" href="https://leetcode.com/your-handle" target="_blank" rel="noopener noreferrer">LeetCode</a>
          </div>
        </div>

        {/* Right: avatar */}
        <div
          className="group relative mx-auto isolation-isolate rounded-[2rem] overflow-clip
                     size-[min(75vw,18rem)] sm:size-[min(60vw,20rem)] md:size-[20rem]"
        >
          {/* Hide heavy decor on small screens */}
          <div className="hidden sm:block squares-ring" aria-hidden>
            {Array.from({ length: 32 }).map((_, idx) => (
              <span key={idx} style={{ ["--i" as any]: idx }} />
            ))}
          </div>

          <div className="hidden sm:block portal" aria-hidden />

          {!reduceMotion && (
            <>
              <div className="hidden sm:block orbital" aria-hidden>
                <span className="csphere" />
              </div>
              <div className="hidden sm:block orbital tilt" aria-hidden>
                <span className="csphere small" />
              </div>
            </>
          )}

          {/* Avatar */}
          <div
            className="relative w-full h-full rounded-full overflow-hidden border-2 border-white/20 transition-transform duration-300 will-change-transform"
            style={reduceMotion ? undefined : { animation: "pulseGlow 3s ease-in-out infinite" }}
          >
            <Image
              src="/me.png"
              alt="Portrait of Rishabh Aggarwal"
              fill
              className="object-cover group-hover:scale-[1.03] transition-transform duration-300 select-none"
              priority
              sizes="(min-width: 768px) 20rem, (min-width: 640px) 18rem, 72vw"
              draggable={false}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
