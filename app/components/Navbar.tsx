import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="fixed top-0 z-50 w-full backdrop-blur-md bg-[#09090b]/80 border-b border-zinc-900">
      <div className="max-w-5xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link
          href="/"
          className="font-black text-xl tracking-tighter text-white hover:text-zinc-400 transition-colors"
        >
          PIYUSH.
        </Link>

        <div className="flex items-center gap-4 md:gap-8">
          <Link
            href="/#projects"
            className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-zinc-400 hover:text-white transition-colors"
          >
            Projects
          </Link>
          <Link
            href="/socials"
            className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-zinc-400 hover:text-white transition-colors"
          >
            Socials
          </Link>
          <a
            href="/resume_PiyushBurnwal.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-zinc-400 hover:text-white transition-colors border border-zinc-800 px-3 py-1 rounded-full hover:bg-zinc-900"
          >
            Resume
          </a>
        </div>
      </div>
    </nav>
  );
}
