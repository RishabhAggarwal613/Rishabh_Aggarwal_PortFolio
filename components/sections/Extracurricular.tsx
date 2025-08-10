export default function Extracurricular() {
  const items = [
    { t: "Team Leader — IBM SkillsBuild AI Internship", d: "Led a 6‑member team to build JalBot, a multilingual water‑conservation assistant aligned with UN SDG‑6; coordinated sprints, reviews, and stakeholder demos." },
    { t: "Student Facilitator — Nobel Learning PBC", d: "Designed and delivered a 6‑week program on leadership and web design for 25+ students; improved project completion by 40%." },
    { t: "The Discurso Master (Public Speaking Society)", d: "Hosted, moderated, and mentored speakers across 10+ college events; focused on clarity, empathy, and presence." },
  ]

  return (
    <section id="extracurricular" className="section">
      <div className="panel p-6 md:p-10">
        <h2 className="title text-2xl md:text-3xl mb-6">Leadership & Extracurricular</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {items.map((it) => (
            <div key={it.t} className="rounded-xl p-4 border-2 border-black bg-white text-black shadow-[6px_6px_0_0_black]">
              <div className="font-semibold">{it.t}</div>
              <div className="text-sm mt-1 opacity-80">{it.d}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}