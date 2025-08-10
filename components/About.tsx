export default function About() {
  return (
    <section id="about" className="section">
      <div className="rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 p-6 md:p-10">
        <h2 className="title text-2xl md:text-3xl font-bold mb-5">About Me</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {/* Left: intro + coursework */}
          <div>
  <p className="text-white/85 leading-relaxed">
    I’m a final-year <strong>B.Tech (CSE)</strong> student at <strong>GGSIPU, Delhi</strong>, 
    specializing in building full-stack products with <strong>Spring Boot</strong> and <strong>React/Next.js</strong>.  
    My focus is on designing <strong>real-time collaborative tools</strong>, <strong>scalable APIs</strong>, 
    and <strong>clean, accessible UI</strong> with a touch of cosmic flair ✨.  
    Over the years, I’ve worked on projects involving <strong>AI integration</strong>, 
    <strong>secure authentication</strong>, and <strong>data-driven analytics</strong>, 
    blending creativity with technical precision.
  </p>

  <div className="mt-6">
    <h3
      className="font-semibold mb-3 text-lg"
      style={{ color: "var(--color-glow)" }}
    >
      Relevant Coursework
    </h3>
    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-1 text-white/90">
      <li>Data Structures & Algorithms</li>
      <li>Database Management Systems</li>
      <li>Operating Systems</li>
      <li>Computer Networks</li>
      <li>Software Engineering</li>
      <li>Cloud Computing</li>
    </ul>
  </div>
</div>


          {/* Right: Education (school + college) */}
          <div className="rounded-xl p-4 border border-white/10 bg-white/5">
            <h3 className="font-semibold mb-3" style={{ color: "var(--color-glow)" }}>Education</h3>
            <ul className="space-y-4 text-white/90">
              <li>
                <div className="font-semibold">B.Tech in Computer Science & Engineering</div>
                <div className="text-sm text-white/70">Guru Gobind Singh Indraprastha University, Delhi — 2022–2026 (Expected)</div>
              </li>
              <li>
                <div className="font-semibold">Senior Secondary (XII)</div>
                <div className="text-sm text-white/70">Commercial Senior Secondary School, Delhi</div>
              </li>
              <li>
                <div className="font-semibold">Secondary (X)</div>
                <div className="text-sm text-white/70">Commercial Senior Secondary School, Delhi</div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}