export default function ProjectCard({ project }: { project: any }) {
  return (
    <a
      href={project.link}
      target="_blank"
      className="group block p-8 rounded-3xl bg-zinc-900 border border-zinc-800 hover:bg-zinc-800/50 transition-all duration-500"
    >
      <div className="flex justify-between items-start mb-16">
        <div className="flex gap-2">
          {project.tech.map((t: string) => (
            <span
              key={t}
              className="text-[10px] font-bold uppercase tracking-widest text-zinc-400 bg-zinc-950 border border-zinc-800 px-3 py-1 rounded-full"
            >
              {t}
            </span>
          ))}
        </div>
        <div className="text-zinc-500 group-hover:text-white group-hover:rotate-45 transition-all">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
          >
            <path d="M7 17L17 7M17 7H7M17 7V17" />
          </svg>
        </div>
      </div>

      <h3 className="text-3xl font-bold tracking-tight mb-2 text-zinc-100">
        {project.title}
      </h3>
      <p className="text-zinc-500 leading-relaxed">{project.description}</p>
    </a>
  );
}
