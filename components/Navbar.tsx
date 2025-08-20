// components/Navbar.tsx
"use client";

import { useEffect, useMemo, useRef, useState } from "react";

type NavLink = { href: string; label: string };

const primary: NavLink[] = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#skills", label: "Skills" },
];

const secondary: NavLink[] = [
  { href: "#certifications", label: "Certifications" },
  { href: "#extracurricular", label: "Leadership" },
  { href: "#contact", label: "Contact" },
];

const ALL_LINKS = [...primary, ...secondary];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [progress, setProgress] = useState(0);
  const [active, setActive] = useState<string>("");
  const [openSheet, setOpenSheet] = useState(false);
  const [openMore, setOpenMore] = useState(false);
  const [theme, setTheme] = useState<string>("cosmic");

  const triggerRef = useRef<HTMLButtonElement | null>(null);
  const moreMenuRef = useRef<HTMLDivElement | null>(null);
  const sheetRef = useRef<HTMLDivElement | null>(null);
  const lastFocusedRef = useRef<HTMLElement | null>(null);

  // Scroll effects: solid header + progress bar
  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 10);
      const doc = document.documentElement;
      const max = (doc.scrollHeight - doc.clientHeight) || 1;
      setProgress(Math.min(1, Math.max(0, window.scrollY / max)));
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Active section with IntersectionObserver
  useEffect(() => {
    const ids = ALL_LINKS.map((l) => l.href.replace("#", ""));
    const els = ids
      .map((id) => document.getElementById(id))
      .filter(Boolean) as Element[];
    if (!els.length) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: 0.01 }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  // Theme persist + apply
  useEffect(() => {
    const saved = localStorage.getItem("theme") || "cosmic";
    setTheme(saved);
    document.documentElement.setAttribute("data-theme", saved);
  }, []);
  const applyTheme = (t: string) => {
    setTheme(t);
    document.documentElement.setAttribute("data-theme", t);
    localStorage.setItem("theme", t);
  };

  // Close “More” on outside click / ESC
  useEffect(() => {
    if (!openMore) return;
    const onDoc = (e: MouseEvent) => {
      const target = e.target as Node;
      if (
        !moreMenuRef.current?.contains(target) &&
        !triggerRef.current?.contains(target)
      ) {
        setOpenMore(false);
      }
    };
    const onEsc = (e: KeyboardEvent) => e.key === "Escape" && setOpenMore(false);
    document.addEventListener("mousedown", onDoc);
    window.addEventListener("keydown", onEsc);
    return () => {
      document.removeEventListener("mousedown", onDoc);
      window.removeEventListener("keydown", onEsc);
    };
  }, [openMore]);

  // Mobile sheet: lock body + focus trap
  useEffect(() => {
    if (openSheet) {
      lastFocusedRef.current =
        (document.activeElement as HTMLElement) || null;
      const original = document.body.style.overflow;
      document.body.style.overflow = "hidden";

      const focusables =
        sheetRef.current?.querySelectorAll<HTMLElement>(
          'a, button, input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );
      focusables?.[0]?.focus();

      const onKey = (e: KeyboardEvent) => {
        if (e.key === "Escape") setOpenSheet(false);
        if (e.key !== "Tab" || !focusables || focusables.length === 0) return;
        const list = Array.from(focusables).filter(
          (el) => !el.hasAttribute("disabled") && el.tabIndex !== -1
        );
        const first = list[0],
          last = list[list.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      };
      window.addEventListener("keydown", onKey);
      return () => {
        document.body.style.overflow = original;
        window.removeEventListener("keydown", onKey);
        lastFocusedRef.current?.focus?.();
      };
    }
  }, [openSheet]);

  const headerCls = useMemo(
    () =>
      [
        "sticky top-0 z-50 w-full",          // positioning
        "bg-[#0b0f1a] text-white",           // SOLID (no transparency)
        "border-b border-gray-800",          // divider
        "transition-shadow",                 // subtle elevate on scroll
        "overflow-x-clip",                   // prevent horizontal overflow bleed
        scrolled ? "shadow-md" : "shadow-none",
      ].join(" "),
    [scrolled]
  );

  return (
    <header className={headerCls} role="banner">
      {/* Scroll progress bar (contained, no overflow) */}
      <div
        className="relative"
        aria-hidden
        style={{ height: 0 }}
      >
        <div
          className="absolute left-0 top-0 h-[3px] w-full"
          style={{
            width: `${progress * 100}%`,
            background:
              "linear-gradient(90deg,var(--color-accent),var(--color-primary))",
          }}
        />
      </div>

      {/* Skip link */}
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-2 focus:z-[60] bg-black text-white px-3 py-1 rounded"
      >
        Skip to content
      </a>

      <nav
        className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between"
        aria-label="Primary"
      >
        {/* Brand (no glow/opacity) */}
        <a
          href="#"
          className="font-black tracking-wide text-lg"
          aria-label="Home"
        >
          <span style={{ color: "var(--color-primary)" }}>Rishabh</span>{" "}
          <span className="text-white">Aggarwal</span>
        </a>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-6">
          {primary.map((l) => {
            const isActive = active === l.href.slice(1);
            return (
              <a
                key={l.href}
                href={l.href}
                data-active={isActive}
                aria-current={isActive ? "page" : undefined}
                className={[
                  "relative font-semibold",
                  "text-gray-300 hover:text-white",
                  "after:absolute after:-bottom-2 after:left-0 after:h-0.5 after:w-0 after:bg-[var(--color-primary)] after:transition-[width]",
                  "hover:after:w-full",
                  isActive ? "text-white after:w-full" : "",
                ].join(" ")}
              >
                {l.label}
              </a>
            );
          })}

          {/* More (dropdown) */}
          <div className="relative">
            <button
              ref={triggerRef}
              aria-haspopup="menu"
              aria-expanded={openMore}
              aria-controls="more-menu"
              onClick={() => setOpenMore((v) => !v)}
              className="inline-flex items-center gap-1 rounded-xl border border-gray-700 bg-gray-800 px-3 py-1.5 text-sm font-semibold hover:bg-gray-700"
            >
              More ▾
            </button>

            <div
              ref={moreMenuRef}
              id="more-menu"
              role="menu"
              className={`absolute right-0 mt-2 w-56 rounded-xl border border-gray-800 bg-[#0b0f1a] shadow-xl overflow-hidden transition
                ${openMore ? "opacity-100 translate-y-0" : "pointer-events-none opacity-0 -translate-y-1"}`}
            >
              <div className="p-1">
                {secondary.map((l) => {
                  const isActive = active === l.href.slice(1);
                  return (
                    <a
                      key={l.href}
                      role="menuitem"
                      href={l.href}
                      onClick={() => setOpenMore(false)}
                      className={`block rounded-lg px-3 py-2 text-sm transition ${
                        isActive
                          ? "bg-gray-800 text-white"
                          : "text-gray-200 hover:bg-gray-800"
                      }`}
                    >
                      {l.label}
                    </a>
                  );
                })}
              </div>
              <div className="border-t border-gray-800 p-2">
                <div className="text-xs text-gray-400 mb-1 px-1">Theme</div>
                <div className="grid grid-cols-4 gap-2 px-1 pb-2">
                  {["cosmic", "aurora", "sunset", "neon"].map((t) => (
                    <button
                      key={t}
                      onClick={() => applyTheme(t)}
                      className={`rounded-lg border px-2 py-1 text-xs capitalize transition
                        ${
                          theme === t
                            ? "border-gray-500 bg-gray-800 text-white"
                            : "border-gray-700 bg-gray-900 text-gray-300 hover:bg-gray-800"
                        }`}
                    >
                      {t}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* CTA (solid) */}
          <a
            href="#contact"
            className="ml-1 inline-flex items-center gap-2 rounded-xl border border-gray-800 bg-[var(--color-primary)] px-3 py-1.5 text-sm font-semibold text-white hover:opacity-95 shadow-sm"
          >
            ✉️ Hire Me
          </a>
        </div>

        {/* Mobile trigger */}
        <button
          className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-xl border border-gray-700 bg-gray-800 text-white hover:bg-gray-700"
          aria-label="Open menu"
          aria-expanded={openSheet}
          aria-controls="mobile-nav-panel"
          onClick={() => setOpenSheet((v) => !v)}
        >
          {openSheet ? "✕" : "☰"}
        </button>
      </nav>

      {/* Mobile sheet */}
      <div
        id="mobile-nav-panel"
        ref={sheetRef}
        className={`md:hidden fixed inset-0 z-[60] ${openSheet ? "" : "pointer-events-none"}`}
        aria-hidden={!openSheet}
        onClick={(e) => {
          if (e.target === e.currentTarget) setOpenSheet(false);
        }}
      >
        {/* Backdrop (can keep slight transparency; panel itself is solid) */}
        <div
          className={`absolute inset-0 bg-black/60 transition-opacity ${
            openSheet ? "opacity-100" : "opacity-0"
          }`}
          aria-hidden
        />

        {/* Panel (SOLID, no bleed) */}
        <div
          className={`absolute right-0 top-0 h-full w-[78%] max-w-xs bg-[#0b0f1a] border-l border-gray-800 p-5 shadow-2xl transition-transform
            ${openSheet ? "translate-x-0" : "translate-x-full"}`}
          role="dialog"
          aria-modal="true"
        >
          <div className="flex items-center justify-between mb-4">
            <span className="font-extrabold text-white">Menu</span>
            <button
              className="inline-flex items-center justify-center w-9 h-9 rounded-lg border border-gray-700 bg-gray-800 hover:bg-gray-700"
              aria-label="Close menu"
              onClick={() => setOpenSheet(false)}
            >
              ✕
            </button>
          </div>

          {/* Theme quick switch */}
          <div className="mb-4">
            <label className="block text-xs text-gray-400 mb-1">Theme</label>
            <div className="grid grid-cols-4 gap-2">
              {["cosmic", "aurora", "sunset", "neon"].map((t) => (
                <button
                  key={t}
                  onClick={() => applyTheme(t)}
                  className={`rounded-lg border px-2 py-1 text-xs capitalize transition
                    ${
                      theme === t
                        ? "border-gray-500 bg-gray-800 text-white"
                        : "border-gray-700 bg-gray-900 text-gray-300 hover:bg-gray-800"
                    }`}
                >
                  {t}
                </button>
              ))}
            </div>
          </div>

          {/* Links */}
          <div className="flex flex-col gap-1">
            {[...primary, ...secondary].map((l) => (
              <a
                key={l.href}
                href={l.href}
                className={`rounded-lg px-3 py-2 transition ${
                  active === l.href.slice(1)
                    ? "bg-gray-800 text-white"
                    : "text-gray-200 hover:text-white hover:bg-gray-800"
                }`}
                onClick={() => setOpenSheet(false)}
              >
                {l.label}
              </a>
            ))}
          </div>

          <a
            href="#contact"
            className="mt-4 inline-flex items-center justify-center rounded-xl border border-gray-800 bg-[var(--color-primary)] px-3 py-2 text-white hover:opacity-95 w-full"
            onClick={() => setOpenSheet(false)}
          >
            ✉️ Hire Me
          </a>
        </div>
      </div>
    </header>
  );
}
