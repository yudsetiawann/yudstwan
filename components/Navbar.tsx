"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 z-50 w-full transition-all duration-300 ${scrolled ? "bg-zinc-950/80 backdrop-blur-md border-b border-zinc-800" : "bg-transparent"}`}>
      <div className="flex items-center justify-between h-20 px-6 mx-auto max-w-7xl">
        <Link href="/" className="text-xl font-bold tracking-tighter text-white">
          yudstwn<span className="text-yellow-500">.</span>
        </Link>

        <div className="flex items-center gap-4">
          {/* Navigasi Desktop */}
          <nav className="hidden md:flex gap-8">
            {["About", "Projects", "Contact"].map((item) => (
              <Link key={item} href={`#${item.toLowerCase()}`} className="text-sm font-medium text-zinc-400 hover:text-yellow-500 transition-colors">
                {item}
              </Link>
            ))}
          </nav>

          {/* Tombol Hamburger (Mobile) */}
          <button className="md:hidden p-2 text-white" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </div>

      {/* Menu Mobile */}
      {isOpen && (
        <div className="md:hidden absolute top-20 w-full bg-zinc-950 border-b border-zinc-800 p-6 flex flex-col gap-4 shadow-2xl">
          {["About", "Projects", "Contact"].map((item) => (
            <Link key={item} href={`#${item.toLowerCase()}`} onClick={() => setIsOpen(false)} className="text-lg font-medium text-zinc-300 hover:text-yellow-500">
              {item}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}
