"use client";

type Skill = { name: string; logo?: string; };

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
      { name: "AI / Machine Learning" }, // no icon available
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
    { name: "Railway" }, 
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
      { name: "CI/CD Pipelines" }, 
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="section">
      <div className="panel p-6 md:p-10">
        <h2 className="title text-2xl md:text-3xl mb-6">Skills</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {groups.map((g) => (
            <div key={g.title} className="rounded-xl p-4 border border-white/10 bg-white/5">
              <h3 className="font-semibold mb-4" style={{ color: "var(--color-glow)" }}>
                {g.title}
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {g.items.map((s) => (
                  <div
                    key={s.name}
                    className="group rounded-xl border-2 border-black bg-white text-black p-3 flex flex-col items-center text-center shadow-[4px_4px_0_0_black] min-h-[80px] justify-center"
                  >
                    {s.logo && (
                      <img src={s.logo} alt={s.name} className="w-6 h-6 object-contain mb-1" />
                    )}
                    <span className="font-semibold text-xs sm:text-sm break-words leading-tight">
                      {s.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
