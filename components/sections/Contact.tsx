// components/sections/Contact.tsx
"use client";

import { useMemo, useState } from "react";

type Action = {
  label: string;
  onClick: () => Promise<void>;
};

type ContactCard = {
  key: "email" | "phone" | "whatsapp" | "telegram" | "linkedin" | "github";
  label: string;
  sub: string;
  href: string;
  icon: string;
  actions?: Action[];
};

export default function Contact() {
  const NAME = "Rishabh Aggarwal";
  const EMAIL = "ra613rishabh@gmail.com";
  const PHONE = "+919354429093";
  const LINKS = {
    github: "https://github.com/RishabhAggarwal613",
    linkedin: "https://www.linkedin.com/in/rishabhaggarwal999/",
    whatsapp: "https://wa.me/919354429093",
    telegram: "https://t.me/your_username", // TODO: replace your_username
  } as const;

  // vCard download (works offline)
  const vcardHref = useMemo(() => {
    const v = [
      "BEGIN:VCARD",
      "VERSION:3.0",
      `N:${NAME.split(" ").slice(-1)[0]};${NAME.split(" ").slice(0, -1).join(" ")};;;`,
      `FN:${NAME}`,
      `EMAIL:${EMAIL}`,
      `TEL:${PHONE}`,
      `URL:${LINKS.github}`,
      `URL:${LINKS.linkedin}`,
      "END:VCARD",
    ].join("\n");
    return `data:text/vcard;charset=utf-8,${encodeURIComponent(v)}`;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const [copied, setCopied] = useState<string | null>(null);
  const copy = async (text: string, key: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(key);
      setTimeout(() => setCopied((v) => (v === key ? null : v)), 1200);
    } catch {
      // no-op
    }
  };

  const cards: ContactCard[] = [
    {
      key: "email",
      label: "Email",
      sub: EMAIL,
      href: `mailto:${EMAIL}`,
      icon: "✉️",
      actions: [{ label: copied === "email" ? "Copied" : "Copy", onClick: () => copy(EMAIL, "email") }],
    },
    {
      key: "phone",
      label: "Phone",
      sub: PHONE,
      href: `tel:${PHONE}`,
      icon: "📞",
      actions: [{ label: copied === "phone" ? "Copied" : "Copy", onClick: () => copy(PHONE, "phone") }],
    },
    { key: "whatsapp", label: "WhatsApp", sub: "Chat on WhatsApp", href: LINKS.whatsapp, icon: "💬" },
    { key: "telegram", label: "Telegram", sub: "DM on Telegram", href: LINKS.telegram, icon: "📨" },
    { key: "linkedin", label: "LinkedIn", sub: "Professional profile", href: LINKS.linkedin, icon: "🔗" },
    { key: "github", label: "GitHub", sub: "Open-source work", href: LINKS.github, icon: "🧑‍💻" },
  ];

  return (
    <section id="contact" className="section">
      {/* SEO: structured data */}
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            name: NAME,
            email: `mailto:${EMAIL}`,
            telephone: PHONE,
            sameAs: [LINKS.github, LINKS.linkedin],
          }),
        }}
      />

      <div className="relative rounded-2xl p-[1px] bg-gradient-to-r from-fuchsia-500/30 via-cyan-400/30 to-amber-400/30">
        <div className="panel rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 p-6 md:p-10">
          <h2 className="title text-2xl md:text-3xl mb-2">Contact</h2>
          <p className="text-white/85">Open to internships and full-time roles. Let’s build something great.</p>

          {/* Quick actions */}
          <div className="mt-4 flex flex-wrap items-center gap-2">
            <a
              href={`mailto:${EMAIL}?subject=Opportunity%20for%20${encodeURIComponent(NAME)}`}
              className="inline-flex items-center rounded-xl border border-white/15 bg-white/10 px-3 py-2 text-sm text-white hover:bg-white/15 transition"
            >
              ✉️ Email me
            </a>
            <a
              href={vcardHref}
              download={`${NAME.replace(/\s+/g, "_")}.vcf`}
              className="inline-flex items-center rounded-xl border border-white/15 bg-[var(--color-primary)]/90 px-3 py-2 text-sm text-white hover:bg-[var(--color-primary)] transition"
            >
              📇 Download vCard
            </a>
          </div>

          {/* Cards */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 mt-6">
            {cards.map((c) => (
              <article
                key={c.key}
                className="group relative rounded-2xl p-[1px] bg-gradient-to-b from-white/15 to-white/5 hover:from-white/25 hover:to-white/10 transition"
              >
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4 h-full flex items-start gap-3">
                  {/* Icon bubble */}
                  <div
                    className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/15 bg-white/90 text-black shrink-0"
                    aria-hidden
                  >
                    <span className="text-lg leading-none">{c.icon}</span>
                  </div>

                  {/* Content */}
                  <div className="min-w-0">
                    <h3 className="font-semibold text-white/95 leading-tight">{c.label}</h3>
                    <p className="text-sm text-white/80 truncate">{c.sub}</p>

                    <div className="mt-3 flex flex-wrap gap-2">
                      <a
                        href={c.href}
                        target={c.key === "email" || c.key === "phone" ? undefined : "_blank"}
                        rel={c.key === "email" || c.key === "phone" ? undefined : "noreferrer"}
                        className="rounded-lg border border-white/15 bg-white/10 px-3 py-1.5 text-xs text-white hover:bg-white/15 transition"
                        aria-label={`Open ${c.label}`}
                        title={`Open ${c.label}`}
                      >
                        Open
                      </a>

                      {c.actions?.map((a) => (
                        <button
                          key={a.label}
                          onClick={a.onClick}
                          className="rounded-lg border border-white/15 bg-white/10 px-3 py-1.5 text-xs text-white hover:bg-white/15 transition"
                          type="button"
                        >
                          {a.label}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                {/* hover glow */}
                <div
                  aria-hidden
                  className="pointer-events-none absolute -z-10 -inset-1 rounded-2xl opacity-0 group-hover:opacity-100 transition [background:radial-gradient(60%_120%_at_50%_-20%,rgba(124,58,237,0.25),transparent_60%),radial-gradient(60%_120%_at_50%_120%,rgba(6,182,212,0.18),transparent_60%)]"
                />
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
