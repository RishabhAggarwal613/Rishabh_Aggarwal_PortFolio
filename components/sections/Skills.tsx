// components/Skills.tsx
"use client";

import { useMemo, useState } from "react";

type Skill = { name: string; logo?: string };
type Group = { title: string; items: Skill[] };

const CD = (pkg: string) =>
  `https://raw.githubusercontent.com/devicons/devicon/v2.17.0/icons/${pkg}`;

const groups: Group[] = [
  {
    title: "Languages",
    items: [
      { name: "Java", logo: CD("java/java-original.svg") },
      { name: "Python", logo: CD("python/python-original.svg") },
      { name: "C", logo: CD("c/c-original.svg") },
      { name: "C++", logo: CD("cplusplus/cplusplus-original.svg") },
      { name: "JavaScript", logo: CD("javascript/javascript-original.svg") },
      { name: "TypeScript", logo: CD("typescript/typescript-original.svg") },
    ],
  },
  {
    title: "Backend Tools",
    items: [
      { name: "Spring Framework", logo: CD("spring/spring-original.svg") },
      { name: "Spring Boot", logo: CD("spring/spring-original.svg") },
      { name: "Spring Security", logo: CD("spring/spring-original.svg") },
      { name: "Spring Data JPA", logo: CD("spring/spring-original.svg") },
      { name: "Spring MVC", logo: CD("spring/spring-original.svg") },
      { name: "AI / Machine Learning" }, // no icon
    ],
  },
  {
    title: "Frontend / UI-UX",
    items: [
      { name: "React", logo: CD("react/react-original.svg") },
      { name: "Next.js", logo: CD("nextjs/nextjs-original.svg") },
      { name: "Tailwind CSS", logo: CD("tailwindcss/tailwindcss-original.svg") },
      { name: "Bootstrap", logo: CD("bootstrap/bootstrap-original.svg") },
      { name: "HTML5", logo: CD("html5/html5-original.svg") },
      { name: "CSS3", logo: CD("css3/css3-original.svg") },
    ],
  },
  {
    title: "Database",
    items: [
      { name: "MySQL", logo: CD("mysql/mysql-original.svg") },
      { name: "MongoDB", logo: CD("mongodb/mongodb-original.svg") },
      { name: "Firebase", logo: CD("firebase/firebase-plain.svg") },
    ],
  },
  {
    title: "Cloud",
    items: [
      { name: "Netlify", logo: CD("netlify/netlify-original.svg") },
      { name: "Vercel", logo: CD("vercel/vercel-original.svg") },
      { name: "AWS", logo: CD("amazonwebservices/amazonwebservices-original.svg") },
      { name: "Railway" }, // fallback badge
      { name: "GCP", logo: CD("googlecloud/googlecloud-original.svg") },
    ],
  },
  {
    title: "DevOps & Deployment",
    items: [
      { name: "Kubernetes", logo: CD("kubernetes/kubernetes-plain.svg") },
      { name: "Docker", logo: CD("docker/docker-original.svg") },
      { name: "GitHub", logo: CD("github/github-original.svg") },
      { name: "Git", logo: CD("git/git-original.svg") },
      { name: "Apache Tomcat", logo: CD("tomcat/tomcat-original.svg") },
      { name: "CI/CD Pipelines" }, // fallback badge
    ],
  },
];

export default function Skills() {
  const [q, setQ] = useState("");
  const [dense, setDense] = useState(false);

  const total = useMemo(
    () => groups.reduce((acc, g) => acc + g.items.length, 0),
    []
  );

  // Filtered groups based on search query
  const filtered = useMemo(() => {
    const query = q.trim().toLowerCase();
    if (!query) return groups;
    return groups
      .map((g) => ({
        ...g,
        items: g.items.filter((s) =>
          s.name.toLowerCase().includes(query)
        ),
      }))
      .filter((g) => g.items.length > 0);
  }, [q]);

  const visibleCount = useMemo(
    () => filtered.reduce((acc, g) => acc + g.items.length, 0),
    [filtered]
  );

  return (
    <section id="skills" className="section">
      <div className="relative rounded-2xl p-[1px] bg-gradient-to-r from-fuchsia-500/30 via-cyan-400/30 to-amber-400/30">
        <div className="rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 p-6 md:p-10">
          {/* Header */}
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <h2 className="title text-2xl md:text-3xl mb-1 bg-clip-text text-transparent bg-[linear-gradient(90deg,var(--color-primary),#22d3ee,#f59e0b)]">
                Skills
              </h2>
              <p className="text-white/70 text-sm">
                Showing <span className="text-white">{visibleCount}</span> of{" "}
                <span className="text-white">{total}</span>
              </p>
            </div>

            {/* Controls */}
            <div className="flex items-center gap-3">
              <label className="relative">
                <input
                  value={q}
                  onChange={(e) => setQ(e.target.value)}
                  placeholder="Search skills…"
                  className="w-64 rounded-xl border border-white/15 bg-white/10 px-3 py-2 pr-9 text-sm text-white placeholder:text-white/60 outline-none focus:ring-2 focus:ring-[var(--color-primary)]/60"
                />
                {/* Clear */}
                {q && (
                  <button
                    onClick={() => setQ("")}
                    className="absolute right-2 top-1/2 -translate-y-1/2 rounded-md px-2 py-1 text-xs bg-white/10 hover:bg-white/15 text-white/90"
                    aria-label="Clear search"
                  >
                    ✕
                  </button>
                )}
              </label>

              <button
                onClick={() => setDense((v) => !v)}
                className="rounded-xl border border-white/15 bg-white/10 px-3 py-2 text-sm text-white hover:bg-white/15 transition"
                aria-pressed={dense}
                title="Toggle compact view"
              >
                {dense ? "Comfortable" : "Compact"}
              </button>
            </div>
          </div>

          {/* Groups */}
          <div className="mt-6 grid md:grid-cols-3 gap-6">
            {filtered.map((g) => (
              <section key={g.title} className="rounded-2xl p-[1px] bg-gradient-to-b from-white/10 to-white/5">
                <div className="rounded-2xl p-4 border border-white/10 bg-white/5">
                  <h3
                    className="font-semibold mb-4 flex items-center justify-between"
                    style={{ color: "var(--color-glow)" }}
                  >
                    <span>{g.title}</span>
                    <span className="text-white/60 text-xs">{g.items.length}</span>
                  </h3>

                  <div
                    className={`grid gap-3 ${
                      dense ? "grid-cols-3" : "grid-cols-2 sm:grid-cols-3"
                    }`}
                  >
                    {g.items.map((s) => (
                      <div
                        key={s.name}
                        className="
                          group rounded-xl border border-white/10 bg-white/5 p-3
                          flex flex-col items-center text-center min-h-[88px]
                          hover:bg-white/8 hover:translate-y-[-2px] transition
                          shadow-[0_8px_30px_-12px_rgba(0,0,0,0.45)]
                        "
                        title={s.name}
                      >
                        <div
                          className="
                            mb-2 flex h-10 w-10 items-center justify-center rounded-lg
                            border border-white/15 bg-white/90 text-black
                            overflow-hidden
                          "
                          aria-hidden
                        >
                          {s.logo ? (
                            <img
                              src={s.logo}
                              alt=""
                              className="h-6 w-6 object-contain"
                              loading="lazy"
                            />
                          ) : (
                            <span className="font-bold text-sm">
                              {s.name.slice(0, 2).toUpperCase()}
                            </span>
                          )}
                        </div>
                        <span className="font-semibold text-xs sm:text-sm leading-tight text-white/90">
                          {s.name}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </section>
            ))}
          </div>

          {/* Empty state */}
          {filtered.length === 0 && (
            <div className="mt-10 rounded-xl border border-white/10 bg-white/5 p-6 text-center text-white/80">
              No skills found for “{q}”.
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
