// components/Projects.tsx
import ProjectCard from "./ProjectCard";

const projectsData = [
  {
    title: "geTix-PD",
    description: "A comprehensive ticketing management system for Perisai Diri organization. Features include event registration, payment gateway integration (Midtrans), and athlete attendance tracking.",
    imageUrl: "/getix.png", // Pastikan file ini ada di folder public
    link: "https://github.com/yudsetiawann/geTix-PD",
    tech: ["Laravel", "Filament", "Livewire", "Tailwind CSS", "MySQL", "CPanel", "Midtrans"],
  },
  {
    title: "Blog System",
    description: "An interactive platform for content creation. Users can publish articles, manage profiles, and engage in real-time discussions via a built-in chat feature.",
    imageUrl: "/prs.png",
    link: "https://github.com/yudsetiawann/Blog-System",
    tech: ["Laravel", "Tailwind CSS", "Alpine.js", "MySQL", "CPanel"],
  },
  {
    title: "Webstore",
    description: "A full-featured e-commerce solution supporting product browsing, cart management, and secure checkout processes for a seamless shopping experience.",
    imageUrl: "/webstore.png",
    link: "https://github.com/yudsetiawann/webstoree",
    tech: ["Laravel", "Tailwind CSS", "Alpine.js", "Payment Gateway"],
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 md:py-32 reveal">
      {/* Header Section */}
      <div className="text-center mb-16">
        <h4 className="mb-3 text-sm font-bold tracking-widest text-yellow-500 uppercase">Portfolio</h4>
        <h2 className="mb-6 text-4xl md:text-5xl font-bold text-white">Featured Projects</h2>
        <p className="max-w-2xl mx-auto text-lg text-zinc-400 leading-relaxed">A collection of projects where I`ve applied my skills in full-stack development. From complex management systems to interactive web applications.</p>
      </div>

      {/* Grid Section */}
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {projectsData.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            description={project.description}
            imageUrl={project.imageUrl}
            link={project.link}
            tech={project.tech} // Passing data tech stack
          />
        ))}
      </div>
    </section>
  );
}
