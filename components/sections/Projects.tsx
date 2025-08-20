// components/Projects.tsx
"use client";

import { useEffect, useRef, useState } from "react";

type Project = {
  title: string;
  desc: string;
  href: string;   // GitHub
  demo?: string;  // optional live link
  img: string;    // /public images
  tech: string[]; // stack chips
  details?: string[];
};

const projects: Project[] = [
  {
    title: "MediVerse",
    desc: "AI health assistant with report scanner, wearables sync & diet planner.",
    href: "https://github.com/RishabhAggarwal613/MediVerse",
    demo: "https://medi-verse-dev.vercel.app",
    img: "/images/mediverse.png",
    tech: ["Java", "Spring Boot", "Spring Security", "JWT", "React", "MongoDB", "Docker"],
    details: [
      "AI Health Chat: symptom Q&A with safe prompts & guardrails.",
      "Report Scanner: upload PDF/image → extract metrics, trends, diet suggestions.",
      "Diet Planner: profile form → AI-generated plan; downloadable as PDF.",
      "Wearables: provider connect, sync status, metric tiles & trend board.",
      "Auth: JWT login/signup, protected routes; clean, accessible UI.",
    ],
  },
  {
    title: "CodeRealm",
    desc: "Realtime collaborative IDE with voice chat & AI helper.",
    href: "https://github.com/RishabhAggarwal613/CodeRealm",
    demo: "https://code-realm-dev.vercel.app",
    img: "/images/coderealm.png",
    tech: ["Java", "Spring Boot", "WebSocket", "Next.js", "WebRTC", "MySQL", "JWT"],
    details: [
      "Rooms with live code editing, cursor presence & selections (WebSockets).",
      "Integrated voice rooms via WebRTC; low-latency design.",
      "AI helper for inline hints, refactors & debugging suggestions.",
      "Session auth + room roles; MySQL-backed persistence.",
    ],
  },
  {
    title: "LangSpace",
    desc: "AI-driven language learning with speaking coach and progress tracking.",
    href: "https://github.com/RishabhAggarwal613/LangSpace",
    demo: "https://lang-space.vercel.app",
    img: "/images/langspace.png",
    tech: ["Java", "Spring Boot", "REST", "React", "MongoDB", "LLM"],
    details: [
      "Speaking coach: prompt → speech → feedback (pronunciation & fluency).",
      "Streaks, levels, topic-wise practice; progress dashboard.",
      "React SPA with secure auth; mobile-first accessibility.",
      "REST API backend with Spring Boot; MongoDB for storage.",
    ],
  },
  {
    title: "UrbanKart",
    desc: "E-commerce features & analytics built during AppSquadz internship.",
    href: "#",
    img: "/images/urbankart.png",
    tech: ["Java", "Spring Boot", "JPA/Hibernate", "React", "MongoDB"],
    details: [
      "Catalog, cart, orders, secure checkout; admin dashboard.",
      "Search, filters, wishlists; optimized queries & indexes.",
      "Cohort & funnel analytics for engagement insights.",
      "Agile delivery of 20+ features; production-ready code.",
    ],
  },
];

export default function Projects() {
  const [openKey, setOpenKey] = useState<string | null>(null);
  const cardRefs = useRef<Record<string, HTMLDivElement | null>>({});

  useEffect(() => {
    if (openKey && cardRefs.current[openKey]) {
      cardRefs.current[openKey]?.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, [openKey]);

  return (
    <section id="projects" className="section">
      <div className="relative rounded-2xl p-[1px] bg-gradient-to-r from-fuchsia-500/30 via-cyan-400/30 to-amber-400/30">
        <div className="panel rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 p-6 md:p-10">
          <h2 className="title text-2xl md:text-3xl mb-6 bg-clip-text text-transparent bg-[linear-gradient(90deg,var(--color-primary),#22d3ee,#f59e0b)]">
            Projects
          </h2>

          {/* 2-up grid; expanded card goes full width and moves to top */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((p) => {
              const isOpen = openKey === p.title;

              return (
                <article
                  key={p.title}
                  aria-expanded={isOpen}
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      e.preventDefault();
                      setOpenKey(isOpen ? null : p.title);
                    }
                    if (e.key === "Escape" && isOpen) setOpenKey(null);
                  }}
                  className={[
                    "group relative rounded-2xl p-[1px] bg-gradient-to-b from-white/15 to-white/5 transition",
                    isOpen ? "order-first col-span-1 md:col-span-2" : "",
                  ].join(" ")}
                >
                  <div
                    ref={(el) => (cardRefs.current[p.title] = el)}
                    className="rounded-2xl overflow-hidden border border-white/10 bg-[#0c0f1a]/80 backdrop-blur shadow-[0_10px_40px_-12px_rgba(0,0,0,0.6)]"
                  >
                    {/* Media (hidden when expanded) */}
                    {!isOpen && (
                      <div className="relative aspect-[16/9] overflow-hidden">
                        <img
                          src={p.img}
                          alt={p.title}
                          className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                          loading="lazy"
                        />
                        <div
                          aria-hidden
                          className="pointer-events-none absolute inset-x-0 bottom-0 h-20 [mask-image:linear-gradient(to_top,black,transparent)] bg-gradient-to-t from-[#0c0f1a] to-transparent"
                        />
                      </div>
                    )}

                    {/* Content */}
                    <div className="p-5">
                      <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                        <div>
                          <h3 className="text-lg md:text-xl font-extrabold leading-tight">
                            <span className="bg-clip-text text-transparent bg-[linear-gradient(90deg,var(--color-primary),#22d3ee,#f59e0b)]">
                              {p.title}
                            </span>
                          </h3>
                          <p className="mt-1 text-white/80 text-sm">{p.desc}</p>
                        </div>

                        <div className="flex shrink-0 gap-2">
                          <a
                            href={p.href}
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center rounded-lg border border-white/15 bg-white/10 px-3 py-1.5 text-xs font-semibold text-white hover:bg-white/15 transition"
                            aria-label={`${p.title} GitHub`}
                          >
                            GitHub
                          </a>
                          {p.demo && (
                            <a
                              href={p.demo}
                              target="_blank"
                              rel="noreferrer"
                              className="inline-flex items-center rounded-lg border border-white/15 bg-[var(--color-primary)]/90 px-3 py-1.5 text-xs font-semibold text-white hover:bg-[var(--color-primary)] transition"
                              aria-label={`${p.title} Demo`}
                            >
                              Demo
                            </a>
                          )}
                        </div>
                      </div>

                      {/* Tech chips */}
                      <div className="mt-3 flex flex-wrap gap-2">
                        {p.tech.map((t) => (
                          <span
                            key={t}
                            className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-[11px] text-white/90"
                          >
                            {t}
                          </span>
                        ))}
                      </div>

                      {/* Expandable details */}
                      <div
                        id={`${p.title}-details`}
                        className={[
                          "grid transition-[grid-template-rows,opacity] duration-300 ease-out",
                          isOpen ? "opacity-100 grid-rows-[1fr]" : "opacity-0 grid-rows-[0fr]",
                        ].join(" ")}
                      >
                        <div className="overflow-hidden">
                          <div className="mt-4 rounded-xl border border-white/15 bg-white/5 p-4">
                            <h4 className="font-black text-base">Key Highlights</h4>
                            <ul className="mt-2 list-disc pl-5 space-y-1 text-sm text-white/90">
                              {(p.details?.length
                                ? p.details
                                : ["Clean UI & accessibility", "Secure auth & robust APIs", "CI/CD + env configs"]
                              ).map((d, i) => (
                                <li key={i}>{d}</li>
                              ))}
                            </ul>

                            <div className="mt-4 flex flex-wrap gap-2">
                              <a
                                href={p.href}
                                target="_blank"
                                rel="noreferrer"
                                className="px-3 py-1.5 rounded-lg border border-white/15 bg-white/10 text-xs font-bold hover:bg-white/15 transition"
                              >
                                View Repository
                              </a>
                              {p.demo && (
                                <a
                                  href={p.demo}
                                  target="_blank"
                                  rel="noreferrer"
                                  className="px-3 py-1.5 rounded-lg border border-white/15 bg-[var(--color-accent)]/90 text-xs font-bold hover:bg-[var(--color-accent)] transition"
                                >
                                  Open Live Demo
                                </a>
                              )}
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Toggle */}
                      <div className="mt-4 flex gap-3">
                        {!isOpen ? (
                          <button
                            onClick={() => setOpenKey(p.title)}
                            className="px-3 py-1.5 rounded-lg border border-white/15 bg-white/10 text-sm font-bold text-white hover:bg-white/15 transition"
                            aria-expanded="false"
                            aria-controls={`${p.title}-details`}
                          >
                            Details
                          </button>
                        ) : (
                          <button
                            onClick={() => setOpenKey(null)}
                            className="px-3 py-1.5 rounded-lg border border-white/15 bg-white/10 text-sm font-bold text-white hover:bg-white/15 transition"
                            aria-expanded="true"
                            aria-controls={`${p.title}-details`}
                          >
                            Close
                          </button>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Hover glow */}
                  <div
                    aria-hidden
                    className="pointer-events-none absolute -z-10 -inset-1 rounded-2xl opacity-0 group-hover:opacity-100 transition
                               [background:radial-gradient(60%_120%_at_50%_-20%,rgba(124,58,237,0.25),transparent_60%),radial-gradient(60%_120%_at_50%_120%,rgba(6,182,212,0.18),transparent_60%)]"
                  />
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
