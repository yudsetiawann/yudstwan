// components/ProjectCard.tsx
import Image from "next/image";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

interface ProjectCardProps {
  title: string;
  description: string;
  imageUrl: string;
  link: string;
  tech: string[]; // Props baru untuk Tech Stack
}

export default function ProjectCard({ title, description, imageUrl, link, tech }: ProjectCardProps) {
  return (
    <div className="group relative flex flex-col overflow-hidden rounded-2xl  bg-zinc-900 border border-zinc-800 hover:border-yellow-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-yellow-500/10">
      {/* Gambar Proyek dengan Zoom Effect */}
      <div className="relative w-full h-56 overflow-hidden bg-zinc-800">
        <Image src={imageUrl} alt={title} fill className="object-cover transition-transform duration-500 group-hover:scale-110" />
        {/* Overlay saat hover (opsional, untuk fokus) */}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
      </div>

      {/* Konten Teks */}
      <div className="flex flex-col p-6 grow">
        <div className="flex justify-between items-start mb-4">
          <h3 className="text-xl font-bold text-white group-hover:text-yellow-500 transition-colors">{title}</h3>
          <a href={link} target="_blank" rel="noopener noreferrer" className="text-zinc-400 hover:text-yellow-500 transition-colors">
            <FaExternalLinkAlt />
          </a>
        </div>

        <p className="mb-6 text-sm leading-relaxed  text-zinc-400 line-clamp-3">{description}</p>

        {/* Tech Stack Badges (Bagian Penting!) */}
        <div className="mt-auto">
          <div className="flex flex-wrap gap-2">
            {tech.map((item, index) => (
              <span key={index} className="px-2.5 py-1 text-xs font-medium rounded-md  bg-zinc-800  text-zinc-300 border  border-zinc-700">
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
