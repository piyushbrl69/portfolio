import About from "./components/About";
import Navbar from "./components/Navbar";
import ProjectCard from "./components/ProjectCard";
import { projects } from "./data/projects";
import { skills } from "./data/skills";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#09090b] text-white">
      <Navbar />

      <main className="max-w-5xl mx-auto px-6 pt-32 pb-20">
        <section className="pt-32 pb-20 h-screen flex items-start justify-center">
          <div className="w-full flex flex-col md:flex-row justify-between items-start gap-10">
            <div className="flex-1">
              <h1 className="text-6xl md:text-8xl font-black tracking-tighter mb-8 leading-[0.85] text-white">
                Hi, <br />
                <span className="text-zinc-800">I’m Piyush</span>
              </h1>
              <p className="max-w-xl text-lg md:text-xl text-zinc-400 font-medium leading-relaxed">
                A Frontend Developer building clean and responsive web
                experiences.Currently learning by building real projects.
              </p>
            </div>
            <div className="flex flex-col gap-4 w-full md:w-64">
              <a
                href="#projects"
                className="group w-full flex items-center justify-between px-6 py-5 rounded-2xl bg-white text-black font-bold hover:bg-zinc-200 transition-all text-xs uppercase tracking-[0.2em]"
              >
                <span>Projects</span>
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3"
                  className="group-hover:rotate-45 transition-transform"
                >
                  <path d="M7 17L17 7M17 7H7M17 7V17" />
                </svg>
              </a>

              <a
                href="#skills"
                className="group w-full flex items-center justify-between px-6 py-5 rounded-2xl border border-zinc-800 bg-zinc-950 text-white font-bold hover:bg-zinc-900 transition-all text-xs uppercase tracking-[0.2em]"
              >
                <span>Skills</span>
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3"
                  className="group-hover:translate-y-1 transition-transform"
                >
                  <path d="M19 14l-7 7-7-7M12 21V3" />
                </svg>
              </a>
            </div>
          </div>
        </section>
        <About />

        <section className="mb-32" id="skills">
          <br></br>
          <br />
          <br />
          <br />
          <h2 className="text-[10px] font-mono text-zinc-500 uppercase tracking-[0.3em] mb-10 ">
            Capabilities
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {skills.map((skill) => (
              <div
                key={skill.name}
                className="p-6 rounded-2xl bg-zinc-900/50 border border-zinc-800 hover:border-zinc-500 transition-all cursor-default"
              >
                <h3 className="font-bold text-zinc-100 text-lg">
                  {skill.name}
                </h3>
                <p className="text-[10px] text-zinc-500 mt-1 uppercase tracking-widest">
                  {skill.level}
                </p>
              </div>
            ))}
          </div>
        </section>
        <section id="projects">
          <h2 className="text-[10px] font-mono text-zinc-500 uppercase tracking-[0.3em] mb-10">
            Selected Work
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project) => (
              <ProjectCard key={project.title} project={project} />
            ))}
          </div>
        </section>
      </main>
      <footer className="mt-20 mb-10 pt-8 border-t border-zinc-900 text-center">
        <p className="text-xs font-mono text-zinc-600 uppercase tracking-widest">
          © 2025 Piyush Burnwal · Frontend Developer{" "}
          <a href="/socials" className="text-white underline">
            social handles
          </a>
        </p>
      </footer>
    </div>
  );
}
