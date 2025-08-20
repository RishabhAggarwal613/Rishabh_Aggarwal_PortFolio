// components/Experience.tsx
"use client"

export default function Experience() {
  const roles = [
    {
      company: "Celebal Technologies",
      title: "Frontend Developer Intern (React.js)",
      time: "June 2025 – Present • Remote",
      bullets: [
        "Built scalable UI for a file-sharing app; improved transfer reliability to 99.9%.",
        "Implemented authentication and an admin dashboard to streamline ops.",
        "Automated build & deployment pipeline to speed releases.",
      ],
      tech: ["React", "TypeScript", "Socket.IO", "Node.js", "CI/CD"],
    },
    {
      company: "AppSquadz",
      title: "Software Developer Intern (Java Full Stack)",
      time: "Nov 2023 – Oct 2024 • Noida, India",
      bullets: [
        "Led UrbanKart features driving engagement uplift.",
        "Designed REST APIs and optimized queries to cut latency.",
        "Shipped 20+ production features in Agile teams.",
      ],
      tech: ["Java", "Spring Boot", "MongoDB", "React", "JWT"],
    },
  ] as const

  return (
    <section id="experience" className="section">
      <div className="panel p-6 md:p-10">
        <h2 className="title text-2xl md:text-3xl mb-6">Experience</h2>

        {/* Timeline container */}
        <div
          className="
            relative
            before:absolute before:left-[10px] before:top-0 before:bottom-0 before:w-[2px]
            before:bg-gradient-to-b before:from-fuchsia-500/50 before:via-cyan-400/50 before:to-amber-400/50
            md:before:left-[14px]
          "
          aria-hidden
        />

        <ul role="list" className="relative space-y-6 md:space-y-8">
          {roles.map((r, idx) => (
            <li key={r.company} className="relative pl-10 md:pl-14">
              {/* Node dot */}
              <span
                className="
                  absolute left-2 top-2 size-3 rounded-full
                  bg-[var(--color-primary)] ring-4 ring-[color-mix(in_oklab,var(--color-primary)_20%,transparent)]
                  md:left-3
                "
                aria-hidden
              />

              {/* Gradient border -> glass card */}
              <div className="group relative rounded-2xl p-[1px] bg-gradient-to-r from-fuchsia-500/30 via-cyan-400/30 to-amber-400/30">
                <div
                  className="
                    rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 p-5 md:p-6
                    transition-transform duration-300 group-hover:-translate-y-0.5
                    shadow-[0_6px_30px_-10px_rgba(0,0,0,0.6)]
                  "
                >
                  <header className="flex flex-col gap-1">
                    <h3 className="text-lg md:text-xl font-extrabold leading-snug">
                      <span className="text-white">
                        <span className="bg-clip-text text-transparent bg-[linear-gradient(90deg,var(--color-primary),#22d3ee,#f59e0b)]">
                          {r.company}
                        </span>
                      </span>{" "}
                      <span className="text-white/90">— {r.title}</span>
                    </h3>
                    <p className="text-white/70 text-sm">{r.time}</p>
                  </header>

                  <ul className="mt-3 list-disc pl-5 space-y-1.5 text-white/90">
                    {r.bullets.map((b, i) => (
                      <li key={i}>{b}</li>
                    ))}
                  </ul>

                  {/* Tech chips */}
                  <div className="mt-4 flex flex-wrap gap-2">
                    {r.tech.map((t) => (
                      <span
                        key={t}
                        className="
                          inline-flex items-center rounded-full border border-white/10
                          bg-white/5 px-2.5 py-1 text-xs text-white/90
                          hover:bg-white/10 transition
                        "
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Glow on hover */}
                <div
                  className="
                    pointer-events-none absolute inset-0 rounded-2xl opacity-0
                    group-hover:opacity-100 transition
                    [background:radial-gradient(60%_120%_at_50%_-20%,rgba(99,102,241,0.25),transparent_60%),radial-gradient(60%_120%_at_50%_120%,rgba(6,182,212,0.18),transparent_60%)]
                  "
                  aria-hidden
                />
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
