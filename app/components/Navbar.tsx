"use client";

import { AiOutlineMenu } from "react-icons/ai";
import { RiMenu2Line } from "react-icons/ri";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 z-50 w-full backdrop-blur-md bg-[#09090b]/80 border-b border-zinc-900">
      <div className="max-w-5xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link
          href="/"
          className="font-black text-xl tracking-tighter text-white hover:text-zinc-400 transition-colors "
        >
          PIYUSH.
        </Link>

        <div className="flex items-center gap-4 md:gap-8">
          <Link
            href="/#projects"
            className="hidden md:block text-[10px] md:text-xs font-bold uppercase tracking-widest text-zinc-400 hover:text-white transition-colors"
          >
            Projects
          </Link>
          <Link
            href="/#about"
            className="hidden md:block text-[10px] md:text-xs font-bold uppercase tracking-widest text-zinc-400 hover:text-white transition-colors"
          >
            About
          </Link>
          <Link
            href="/socials"
            className="hidden md:block text-[10px] md:text-xs font-bold uppercase tracking-widest text-zinc-400 hover:text-white transition-colors"
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

          <div
            className="relative md:hidden"
            onMouseEnter={() => setIsOpen(true)}
            onMouseLeave={() => setIsOpen(false)}
            onClick={()=>{setIsOpen(!isOpen)}}
          >
            <button className="relative p-2 w-10 h-10 text-white hover:text-emerald-400 transition-colors">
              <AiOutlineMenu
                size={28}
                className={`absolute inset-0 m-auto transition-all duration-300 ease-in-out
      ${isOpen ? "opacity-0 rotate-90 scale-75" : "opacity-100 rotate-0 scale-100"}
    `}
              />
              <RiMenu2Line
                size={28}
                className={`absolute inset-0 m-auto transition-all duration-300 ease-in-out
      ${isOpen ? "opacity-100 rotate-0 scale-100" : "opacity-0 -rotate-90 scale-75"}
    `}
              />
            </button>

            {isOpen && (
              <div className="absolute right-0 top-12 w-40 bg-zinc-900 border border-zinc-800 rounded-lg shadow-xl">
                <div className="flex flex-col p-4 gap-3 text-zinc-400 text-xs font-bold uppercase tracking-widest">
                  <Link href="/#projects" className="hover:text-white">
                    Projects
                  </Link>
                  <Link href="/socials" className="hover:text-white">
                    Socials
                  </Link>
                  <Link href="/#about" className="hover:text-white">
                    About
                  </Link>
                  <a
                    href="/resume_PiyushBurnwal.pdf"
                    className="hover:text-white"
                  >
                    Resume
                  </a>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
