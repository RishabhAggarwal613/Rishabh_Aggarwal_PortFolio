
"use client";
import { useState } from "react"

type Project = { 
  title: string; 
  desc: string; 
  href: string;           // GitHub
  demo?: string;          // optional live link
  img: string;            // /public images
  tech: string[];         // show Java Full Stack pieces
}

const projects: Project[] = [
  { 
    title: "MediVerse",
    desc: "AI health assistant with report scanner & diet planner.",
    href: "https://github.com/RishabhAggarwal613/MediVerse",
    demo: "https://mediverse-demo.vercel.app",
    img: "/images/mediverse.png",
    tech: ["Java", "Spring Boot", "Spring Security", "JWT", "React", "PostgreSQL", "Docker"]
  },
  { 
    title: "CodeRealm",
    desc: "Realtime collaborative IDE with voice chat & AI helper.",
    href: "https://github.com/RishabhAggarwal613/CodeRealm",
    demo: "https://coderealm-demo.vercel.app",
    img: "/images/coderealm.png",
    tech: ["Java", "Spring Boot", "WebSocket", "React", "WebRTC", "Redis", "JWT"]
  },
  { 
    title: "LangSpace",
    desc: "Language learning with speaking coach and progress.",
    href: "https://github.com/RishabhAggarwal613/LangSpace",
    demo: "https://langspace-demo.vercel.app",
    img: "/images/langspace.png",
    tech: ["Java", "Spring Boot", "REST", "Next.js", "PostgreSQL", "LLM"]
  },
  { 
    title: "UrbanKart",
    desc: "E-commerce features & analytics for AppSquadz project.",
    href: "#",
    img: "/images/urbankart.png",
    tech: ["Java", "Spring Boot", "JPA/Hibernate", "React", "MongoDB"]
  },
  { 
    title: "ZapShare",
    desc: "Fast file transfer with live progress and encryption.",
    href: "#",
    img: "/images/zapshare.png",
    tech: ["Java", "Spring Boot", "WebSocket", "React", "MongoDB", "JWT"]
  },
  { 
    title: "EchoVerse",
    desc: "Voice-driven social space with realtime rooms.",
    href: "#",
    img: "/images/echoverse.png",
    tech: ["Java", "Spring Boot", "STT", "React", "WebSockets", "Docker"]
  },
]

export default function Projects(){
  const [showAll, setShowAll] = useState(false);
  const visible = showAll ? projects : projects.slice(0, 3);

  return (
    <section id="projects" className="section">
      <div className="panel p-6 md:p-10">
        <h2 className="title text-2xl md:text-3xl mb-6">Projects</h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {visible.map(p => (
            <div key={p.title} className="rounded-2xl bg-white text-black border-2 border-black shadow-[6px_6px_0_0_black] overflow-hidden">
              {/* Image */}
              <img
                src={p.img}
                alt={p.title}
                className="w-full h-40 object-cover border-b-2 border-black"
                loading="lazy"
              />

              {/* Content */}
              <div className="p-5">
                <div className="font-extrabold text-lg">{p.title}</div>
                <div className="text-sm mt-1 opacity-80">{p.desc}</div>

                {/* Tech tags */}
                <div className="mt-3 flex flex-wrap gap-2">
                  {p.tech.map(t => (
                    <span
                      key={t}
                      className="px-2 py-1 text-xs font-semibold rounded-md border-2 border-black bg-white"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Actions */}
                <div className="mt-4 flex gap-3">
                  <a
                    href={p.href}
                    target="_blank"
                    rel="noreferrer"
                    className="px-3 py-1 bg-black text-white text-sm font-bold rounded-md hover:-translate-y-0.5 transition"
                    aria-label={`${p.title} GitHub`}
                  >
                    GitHub
                  </a>
                  {p.demo && (
                    <a
                      href={p.demo}
                      target="_blank"
                      rel="noreferrer"
                      className="px-3 py-1 bg-purple-600 text-white text-sm font-bold rounded-md hover:-translate-y-0.5 transition"
                      aria-label={`${p.title} Demo`}
                    >
                      Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Show More / Show Less */}
        <div className="mt-6 text-center">
          <button
            onClick={() => setShowAll(v => !v)}
            className="px-5 py-2 bg-black text-white font-bold rounded-lg hover:bg-gray-800"
          >
            {showAll ? "Show Less" : "Show More"}
          </button>
        </div>
      </div>
    </section>
  )
}
