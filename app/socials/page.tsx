import Navbar from "../components/Navbar";

export default function Socials() {
  const socialLinks = [
    {
      name: "GitHub",
      username: "@piyushbrl69",
      url: "https://github.com/piyushbrl69",
      color: "hover:text-white",
      description: "View my repositories and project here.",
    },
    {
      name: "LinkedIn",
      username: "piyushbrl",
      url: "https://linkedin.com/in/piyushbrl",
      color: "hover:text-blue-400",
      description: "Let’s connect professionally and discuss opportunities.",
    },
    {
      name: "Twitter / X",
      username: "@piyush_on_x",
      url: "https://twitter.com/piyush_on_X",
      color: "hover:text-sky-400",
      description: "I sometimes post about web development and tech trends.",
    },
    {
      name: "Email",
      username: "Piyush Burnwal",
      url: "piyushbrl100@gmail.com",
      color: "hover:text-emerald-400",
      description: "The best way to reach me for direct inquiries.",
    },
    {
      name: "Instagram",
      username: "piyushbrl",
      url: "https://www.instagram.com/piyushbrl",
      color: "hover:text-emerald-400",
      description: "If you like you can follow me on Instagram",
    },
  ];

  return (
    <div className="min-h-screen bg-[#09090b] text-white">
      <Navbar />

      <main className="max-w-2xl mx-auto px-6 pt-32 pb-20">
        <header className="mb-12">
          <h1 className="text-4xl font-bold tracking-tighter mb-4">Connect.</h1>
          <p className="text-zinc-500">
            Feel free to reach out on any of these platforms. I'm always open to
            discussing new projects or tech.
          </p>
        </header>

        <div className="space-y-4">
          {socialLinks.map((link) => (
            <a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group block p-6 rounded-2xl bg-zinc-900 border border-zinc-800 hover:border-zinc-600 transition-all duration-300"
            >
              <div className="flex justify-between items-center">
                <div>
                  <h2
                    className={`text-xl font-bold transition-colors ${link.color}`}
                  >
                    {link.name}
                  </h2>
                  <p className="text-sm text-zinc-500 font-mono mt-1">
                    {link.username}
                  </p>
                </div>
                <div className="text-zinc-600 group-hover:text-white transition-transform group-hover:translate-x-1">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                  >
                    <path d="M5 12h14m-7-7l7 7-7 7" />
                  </svg>
                </div>
              </div>
              <p className="text-sm text-zinc-500 mt-4 leading-relaxed group-hover:text-zinc-400">
                {link.description}
              </p>
            </a>
          ))}
        </div>

        <footer className="mt-20 pt-8 border-t border-zinc-900 text-center">
          <p className="text-xs font-mono text-zinc-600 uppercase tracking-widest">
            Thanks for stopping by! I'd love to connect with you
          </p>
        </footer>
      </main>
    </div>
  );
}
