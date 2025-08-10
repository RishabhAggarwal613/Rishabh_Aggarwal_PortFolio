export default function Experience() {
  const roles = [
    {
      company: "Celebal Technologies",
      title: "Frontend Developer Intern (React.js)",
      time: "June 2025 – Present • Remote",
      bullets: [
        "Built scalable UI for a file‑sharing app; improved transfer reliability to 99.9%.",
        "Implemented authentication and an admin dashboard to streamline ops.",
        "Automated build & deployment pipeline to speed releases.",
      ],
      tech: ["React","TypeScript","Socket.IO","Node.js","CI/CD"],
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
      tech: ["Java","Spring Boot","MongoDB","React","JWT"],
    },
  ] as const

  return (
    <section id="experience" className="section">
      <div className="panel p-6 md:p-10">
        <h2 className="title text-2xl md:text-3xl mb-6">Experience</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {roles.map((r) => (
            <div key={r.company} className="rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 p-5">
              <h3 className="font-extrabold text-lg">{r.company} — {r.title}</h3>
              <p className="text-white/70 text-sm">{r.time}</p>
              <ul className="list-disc pl-5 mt-3 space-y-1 text-white/90">
                {r.bullets.map((b, i) => (<li key={i}>{b}</li>))}
              </ul>
              <p className="text-xs mt-3 text-white/70"><span className="opacity-80">Technologies:</span> {r.tech.join(", ")}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}