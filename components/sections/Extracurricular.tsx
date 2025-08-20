// components/sections/Extracurricular.tsx
"use client";

type Item = { t: string; d: string };

export default function Extracurricular() {
  const items: Item[] = [
    {
      t: "Team Leader — IBM SkillsBuild AI Internship",
      d: "Led a 6-member team to build JalBot, a multilingual water-conservation assistant aligned with UN SDG-6; coordinated sprints, reviews, and stakeholder demos.",
    },
    {
      t: "Student Facilitator — Nobel Learning PBC",
      d: "Designed and delivered a 6-week program on leadership and web design for 25+ students; improved project completion by 40%.",
    },
    {
      t: "The Discurso Master (Public Speaking Society)",
      d: "Hosted, moderated, and mentored speakers across 10+ college events; focused on clarity, empathy, and presence.",
    },
  ];

  const pickEmoji = (title: string) => {
    const s = title.toLowerCase();
    if (s.includes("leader") || s.includes("team")) return "🧭";
    if (s.includes("facilitator") || s.includes("learning")) return "📚";
    if (s.includes("public") || s.includes("speaking") || s.includes("society")) return "🎤";
    if (s.includes("ibm")) return "💠";
    return "🌟";
  };

  const pickTag = (title: string) => {
    const s = title.toLowerCase();
    if (s.includes("leader")) return "Leadership";
    if (s.includes("facilitator")) return "Teaching";
    if (s.includes("public") || s.includes("speaking")) return "Community";
    return "Impact";
  };

  return (
    <section id="extracurricular" className="section">
      <div className="relative rounded-2xl p-[1px] bg-gradient-to-r from-fuchsia-500/30 via-cyan-400/30 to-amber-400/30">
        <div className="panel rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 p-6 md:p-10">
          <h2 className="title text-2xl md:text-3xl mb-6 bg-clip-text text-transparent bg-[linear-gradient(90deg,var(--color-primary),#22d3ee,#f59e0b)]">
            Leadership & Extracurricular
          </h2>

          {/* Timeline spine */}
          <div
            aria-hidden
            className="relative mb-2 before:absolute before:left-4 md:before:left-6 before:top-0 before:bottom-0 before:w-[2px] before:bg-gradient-to-b before:from-fuchsia-500/50 before:via-cyan-400/50 before:to-amber-400/50"
          />

          <ul role="list" className="relative space-y-5 md:space-y-6">
            {items.map((it) => (
              <li key={it.t} className="relative pl-14 md:pl-20">
                {/* Node */}
                <span
                  aria-hidden
                  className="absolute left-3 md:left-5 top-2 grid h-8 w-8 place-items-center rounded-full bg-white text-black text-base font-bold border border-white/20"
                >
                  {pickEmoji(it.t)}
                </span>

                {/* Card with gradient edge */}
                <div className="group relative rounded-2xl p-[1px] bg-gradient-to-r from-white/20 to-white/10 hover:from-white/30 hover:to-white/20 transition">
                  <article className="rounded-2xl border border-white/10 bg-white/5 p-4 md:p-5 shadow-[0_10px_40px_-12px_rgba(0,0,0,0.6)]">
                    <header className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                      <h3 className="font-extrabold text-white/95 leading-snug">
                        {it.t}
                      </h3>
                      <span className="inline-flex shrink-0 items-center rounded-full border border-white/10 bg-white/5 px-2 py-0.5 text-[11px] text-white/85">
                        {pickTag(it.t)}
                      </span>
                    </header>

                    <p className="mt-2 text-white/85 text-sm leading-relaxed">
                      {it.d}
                    </p>
                  </article>

                  {/* Hover glow */}
                  <div
                    aria-hidden
                    className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition
                               [background:radial-gradient(60%_120%_at_50%_-20%,rgba(124,58,237,0.25),transparent_60%),radial-gradient(60%_120%_at_50%_120%,rgba(6,182,212,0.18),transparent_60%)]"
                  />
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
