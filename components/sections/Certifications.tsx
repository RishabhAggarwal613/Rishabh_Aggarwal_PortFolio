// components/Certifications.tsx
"use client";

import { useMemo, useState } from "react";

const certs = [
  "Open Source Contributor – SSOC, GSSOC, OSCI",
  "Hackathon Finalist – Hackazards by Namespace Community",
  "Java Full Stack Developer – CodeSquadz",
  "Google AI Essentials – Google",
  "Postman API Fundamentals – Postman",
  "TCS iON Career Edge – TCS",
  "Liberty Developer Essentials – IBM",
  "AI Agent Architect – IBM SkillsBuild",
];

/* --- helpers: type + issuer + icon inference --- */
type Meta = { type: "Certification" | "Open Source" | "Hackathon"; issuer: string };
const inferMeta = (s: string): Meta => {
  const lower = s.toLowerCase();
  if (lower.includes("open source")) return { type: "Open Source", issuer: pickIssuer(s) };
  if (lower.includes("hackathon")) return { type: "Hackathon", issuer: pickIssuer(s) };
  return { type: "Certification", issuer: pickIssuer(s) };
};

const pickIssuer = (s: string) => {
  // after last "–" or "-" assume issuer, else known keywords fallback
  const parts = s.split(/–|-/);
  const tail = parts[parts.length - 1]?.trim();
  if (tail && tail.length <= 30 && /\b[A-Za-z]/.test(tail)) return tail;
  if (/google/i.test(s)) return "Google";
  if (/postman/i.test(s)) return "Postman";
  if (/\bIBM\b/i.test(s)) return "IBM";
  if (/ibm skillsbuild/i.test(s)) return "IBM SkillsBuild";
  if (/tcs/i.test(s)) return "TCS";
  if (/codesquadz/i.test(s)) return "CodeSquadz";
  if (/gssoc|ssoc|osci/i.test(s)) return "Community";
  return "Issuer";
};

const CD = (pkg: string) =>
  `https://raw.githubusercontent.com/devicons/devicon/v2.17.0/icons/${pkg}`;

const issuerIcon = (issuer: string): { src?: string; text?: string; emoji?: string } => {
  const l = issuer.toLowerCase();
  if (l.includes("google")) return { src: CD("google/google-original.svg") };
  if (l.includes("ibm")) return { src: CD("ibm/ibm-original.svg") };
  if (l.includes("postman")) return { src: CD("postman/postman-original.svg") };
  if (l.includes("tcs")) return { text: "TCS" };
  if (l.includes("codesquadz")) return { text: "</>" };
  if (l.includes("community")) return { emoji: "🌐" };
  return { text: issuer.slice(0, 3).toUpperCase() };
};

const TAGS = ["All", "Certification", "Open Source", "Hackathon"] as const;
type Tag = typeof TAGS[number];

export default function Certifications() {
  const [q, setQ] = useState("");
  const [tag, setTag] = useState<Tag>("All");
  const [copied, setCopied] = useState<string | null>(null);

  const list = useMemo(
    () =>
      certs.map((c) => {
        const meta = inferMeta(c);
        return { text: c, ...meta, icon: issuerIcon(meta.issuer) };
      }),
    []
  );

  const filtered = useMemo(() => {
    const query = q.trim().toLowerCase();
    return list.filter((item) => {
      const tagOk = tag === "All" ? true : item.type === tag;
      const qOk =
        !query ||
        item.text.toLowerCase().includes(query) ||
        item.issuer.toLowerCase().includes(query);
      return tagOk && qOk;
    });
  }, [list, q, tag]);

  return (
    <section id="certifications" className="section">
      <div className="relative rounded-2xl p-[1px] bg-gradient-to-r from-fuchsia-500/30 via-cyan-400/30 to-amber-400/30">
        <div className="panel rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 p-6 md:p-10">
          {/* header */}
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <h2 className="title text-2xl md:text-3xl mb-1 bg-clip-text text-transparent bg-[linear-gradient(90deg,var(--color-primary),#22d3ee,#f59e0b)]">
                Certifications & Achievements
              </h2>
              <p className="text-white/70 text-sm">
                Showing <span className="text-white">{filtered.length}</span> of{" "}
                <span className="text-white">{list.length}</span>
              </p>
            </div>

            <div className="flex items-center gap-3">
              {/* filters */}
              <div className="flex flex-wrap gap-2">
                {TAGS.map((t) => (
                  <button
                    key={t}
                    onClick={() => setTag(t)}
                    className={`rounded-xl border border-white/15 px-3 py-1.5 text-sm transition ${
                      tag === t
                        ? "bg-[var(--color-primary)]/90 text-white"
                        : "bg-white/10 text-white hover:bg-white/15"
                    }`}
                    aria-pressed={tag === t}
                  >
                    {t}
                  </button>
                ))}
              </div>

              {/* search */}
              <label className="relative">
                <input
                  value={q}
                  onChange={(e) => setQ(e.target.value)}
                  placeholder="Search…"
                  className="w-44 md:w-60 rounded-xl border border-white/15 bg-white/10 px-3 py-2 pr-9 text-sm text-white placeholder:text-white/60 outline-none focus:ring-2 focus:ring-[var(--color-primary)]/60"
                />
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
            </div>
          </div>

          {/* grid */}
          <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {filtered.map((c) => (
              <article
                key={c.text}
                className="group relative rounded-2xl p-[1px] bg-gradient-to-b from-white/15 to-white/5 hover:from-white/25 hover:to-white/10 transition"
              >
                <div className="rounded-2xl p-4 border border-white/10 bg-white/5 h-full flex items-start gap-3">
                  {/* badge */}
                  <div
                    className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/15 bg-white/90 text-black overflow-hidden shrink-0"
                    aria-hidden
                  >
                    {"src" in c.icon && c.icon.src ? (
                      <img src={c.icon.src} alt="" className="h-6 w-6 object-contain" loading="lazy" />
                    ) : "emoji" in c.icon && c.icon.emoji ? (
                      <span className="text-lg">{c.icon.emoji}</span>
                    ) : (
                      <span className="font-black text-xs">{("text" in c.icon && c.icon.text) || "CERT"}</span>
                    )}
                  </div>

                  {/* content */}
                  <div className="min-w-0">
                    <h3 className="font-semibold text-white/95 leading-snug">
                      {c.text}
                    </h3>
                    <div className="mt-1 flex flex-wrap items-center gap-2">
                      <span className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-2 py-0.5 text-[11px] text-white/85">
                        {c.type}
                      </span>
                      <span className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-2 py-0.5 text-[11px] text-white/85">
                        {c.issuer}
                      </span>
                    </div>
                  </div>

                  {/* copy */}
                  <button
                    onClick={async () => {
                      try {
                        await navigator.clipboard.writeText(c.text);
                        setCopied(c.text);
                        setTimeout(() => setCopied((v) => (v === c.text ? null : v)), 1200);
                      } catch {}
                    }}
                    className="ml-auto rounded-lg border border-white/15 bg-white/10 px-2 py-1 text-xs text-white hover:bg-white/15 transition"
                    aria-label="Copy certification"
                    title="Copy"
                  >
                    {copied === c.text ? "Copied" : "Copy"}
                  </button>
                </div>

                {/* glow */}
                <div
                  aria-hidden
                  className="pointer-events-none absolute -z-10 -inset-1 rounded-2xl opacity-0 group-hover:opacity-100 transition
                             [background:radial-gradient(60%_120%_at_50%_-20%,rgba(124,58,237,0.25),transparent_60%),radial-gradient(60%_120%_at_50%_120%,rgba(6,182,212,0.18),transparent_60%)]"
                />
              </article>
            ))}
          </div>

          {/* empty state */}
          {filtered.length === 0 && (
            <div className="mt-8 rounded-xl border border-white/10 bg-white/5 p-6 text-center text-white/80">
              No matches for “{q}”.
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
