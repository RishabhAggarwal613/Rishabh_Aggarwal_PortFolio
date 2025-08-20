// components/About.tsx
export default function About() {
  return (
    <section id="about" className="section relative">
      {/* Ambient glows */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-16 -left-10 h-56 w-56 rounded-full blur-3xl opacity-30"
        style={{ background: "radial-gradient(ellipse at center, var(--color-primary), transparent 60%)" }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-10 -right-10 h-64 w-64 rounded-full blur-3xl opacity-25"
        style={{ background: "radial-gradient(ellipse at center, var(--color-accent), transparent 60%)" }}
      />

      {/* Gradient border + glass card */}
      <div className="relative rounded-2xl p-[1px] bg-gradient-to-r from-fuchsia-500/30 via-cyan-400/30 to-amber-400/30">
        <div className="rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 p-6 md:p-10">
          <h2 className="title text-2xl md:text-3xl font-bold mb-5 bg-clip-text text-transparent bg-[linear-gradient(90deg,var(--color-primary),#22d3ee,#f59e0b)]">
            About Me
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Left: intro + focus + coursework */}
            <div>
              <p className="text-white/85 leading-relaxed">
                I’m a final-year <strong>B.Tech (CSE)</strong> student at <strong>GGSIPU, Delhi</strong>, specializing in
                building full-stack products with <strong>Spring Boot</strong> and <strong>React/Next.js</strong>. I focus on{" "}
                <strong>real-time collaboration</strong>, <strong>scalable APIs</strong>, and{" "}
                <strong>clean, accessible UI</strong> with a cosmic flair ✨. I’ve worked on{" "}
                <strong>AI integration</strong>, <strong>secure authentication</strong>, and{" "}
                <strong>data-driven analytics</strong>, blending creativity with engineering rigor.
              </p>

              {/* What I'm focusing on */}
              <div className="mt-6">
                <h3 className="font-semibold mb-3 text-lg" style={{ color: "var(--color-glow)" }}>
                  Currently Focusing On
                </h3>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-2 gap-x-6 text-white/90">
                  <li className="flex items-start gap-2">
                    <span aria-hidden>🚀</span> Real-time collab (WebSockets/Socket.IO)
                  </li>
                  <li className="flex items-start gap-2">
                    <span aria-hidden>🧠</span> AI-assisted user flows
                  </li>
                  <li className="flex items-start gap-2">
                    <span aria-hidden>⚙️</span> Scalable REST APIs (Spring Boot)
                  </li>
                  <li className="flex items-start gap-2">
                    <span aria-hidden>🎨</span> Polished, accessible UI
                  </li>
                </ul>
              </div>

              {/* Coursework as chips */}
              <div className="mt-6">
                <h3 className="font-semibold mb-3 text-lg" style={{ color: "var(--color-glow)" }}>
                  Relevant Coursework
                </h3>
                <ul className="flex flex-wrap gap-2">
                  {[
                    "Data Structures & Algorithms",
                    "Database Management Systems",
                    "Operating Systems",
                    "Computer Networks",
                    "Software Engineering",
                    "Cloud Computing",
                  ].map((c) => (
                    <li key={c}>
                      <span className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/90 hover:bg-white/10 transition">
                        {c}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Right: Education timeline card */}
            <div className="rounded-xl p-4 border border-white/10 bg-white/5">
              <h3 className="font-semibold mb-4" style={{ color: "var(--color-glow)" }}>
                Education
              </h3>

              <ol className="relative space-y-5">
                {/* Marker spine */}
                <div
                  aria-hidden
                  className="absolute left-3 top-1 bottom-1 w-[2px] bg-gradient-to-b from-fuchsia-500/40 via-cyan-400/40 to-amber-400/40"
                />

                <li className="relative pl-9">
                  <span
                    aria-hidden
                    className="absolute left-2 top-1.5 h-3 w-3 rounded-full bg-[var(--color-primary)] ring-4 ring-[color-mix(in_oklab,var(--color-primary)_25%,transparent)]"
                  />
                  <div className="font-semibold">B.Tech in Computer Science & Engineering</div>
                  <div className="text-sm text-white/70">
                    Guru Gobind Singh Indraprastha University, Delhi — 2022–2026 (Expected)
                  </div>
                </li>

                <li className="relative pl-9">
                  <span
                    aria-hidden
                    className="absolute left-2 top-1.5 h-3 w-3 rounded-full bg-[var(--color-accent)] ring-4 ring-[color-mix(in_oklab,var(--color-accent)_25%,transparent)]"
                  />
                  <div className="font-semibold">Senior Secondary (XII)</div>
                  <div className="text-sm text-white/70">Commercial Senior Secondary School, Delhi</div>
                </li>

                <li className="relative pl-9">
                  <span
                    aria-hidden
                    className="absolute left-2 top-1.5 h-3 w-3 rounded-full bg-[var(--color-accent-2)] ring-4 ring-[color-mix(in_oklab,var(--color-accent-2)_25%,transparent)]"
                  />
                  <div className="font-semibold">Secondary (X)</div>
                  <div className="text-sm text-white/70">Commercial Senior Secondary School, Delhi</div>
                </li>
              </ol>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
