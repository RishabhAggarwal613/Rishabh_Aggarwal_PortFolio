const certs = [
  "Open Source Contributor – SSOC, GSSOC, OSCI",
  "Hackathon Finalist – Hackazards by Namespace Community",
  "Java Full Stack Developer – CodeSquadz",
  "Google AI Essentials – Google",
  "Postman API Fundamentals – Postman",
  "TCS iON Career Edge – TCS",
  "Liberty Developer Essentials – IBM",
  "AI Agent Architect – IBM SkillsBuild",
]

export default function Certifications() {
  return (
    <section id="certifications" className="section">
      <div className="panel p-6 md:p-10">
        <h2 className="title text-2xl md:text-3xl mb-6 grad-text">Certifications & Achievements</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {certs.map((c) => (
            <div key={c} className="rounded-xl p-4 border-2 border-black bg-white text-black">
              <span className="font-semibold">{c}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
