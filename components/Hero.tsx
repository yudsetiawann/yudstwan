import Link from "next/link";
import Image from "next/image";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { FaArrowRight, FaGithub } from "react-icons/fa";

export default function Hero() {
  return (
    <section id="home" className="relative pt-32 pb-20 md:pt-48 md:pb-32 reveal">
      <div className="grid items-center grid-cols-1 gap-12 md:grid-cols-2">
        {/* === Kolom Teks === */}
        <div className="flex flex-col space-y-6 order-2 md:order-1">
          {/* Badge Status */}
          <div className="flex items-center gap-2 px-3 py-1 w-fit rounded-full bg-green-900/30 border border-green-800">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
            <span className="text-xs font-medium text-green-400">Available for new projects</span>
          </div>

          <div className="space-y-2">
            <h1 className="text-lg font-bold tracking-widest text-yellow-500 uppercase">Hi, I`m</h1>
            <h2 className="text-5xl font-bold leading-tight text-white lg:text-6xl">
              Muhammad Yudi <br />
              <span className="text-transparent bg-clip-text bg-linear-to-r from-yellow-500 to-orange-500">Setiawan</span>
            </h2>
          </div>

          <p className="max-w-lg text-lg leading-relaxed text-zinc-400">A 5th-semester Informatics student passionate about crafting digital experiences. I build accessible, pixel-perfect, and performant web applications.</p>

          {/* Tombol Aksi */}
          <div className="flex flex-col gap-4 pt-4 sm:flex-row">
            <Link href="#projects" className="group flex items-center justify-center gap-2 px-7 py-3.5 font-semibold transition-all rounded-full bg-white text-zinc-900 hover:bg-zinc-200">
              View Work
              <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
            </Link>

            <Link href="#contact" className="flex items-center justify-center gap-2 px-7 py-3.5 font-semibold transition-all border rounded-full  border-zinc-700  hover:border-yellow-500 hover:text-yellow-400  text-zinc-300">
              Contact Me
            </Link>
          </div>
        </div>

        {/* === Kolom Gambar === */}
        <div className="flex justify-center md:justify-end order-1 md:order-2 relative">
          {/* Efek Glow di belakang gambar */}
          <div className="absolute inset-0 bg-yellow-500/20 blur-3xl rounded-full transform translate-x-4 translate-y-4"></div>

          <div className="relative w-64 h-64 md:w-80 md:h-80">
            <Image src="/yud.jpg" alt="Muhammad Yudi Setiawan" fill className="object-cover rounded-3xl rotate-3 hover:rotate-0 transition-all duration-500 border-2 border-zinc-100 border-zinc-800 shadow-2xl" priority />
          </div>
        </div>
      </div>
    </section>
  );
}
