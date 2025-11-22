// components/About.tsx
import { FaInstagram, FaLinkedinIn, FaFacebookF, FaTiktok, FaArrowRight } from "react-icons/fa";

export default function About() {
  // Data hobi dipisah agar bisa di-looping menjadi badges
  const interests = ["Technology", "Graphic Design", "Photography", "Pencak Silat", "Music", "Self Development"];

  return (
    <section id="about" className="py-20 md:py-32 reveal">
      {/* Header Section */}
      <div className="mb-12 md:mb-16">
        <h4 className="mb-3 text-sm font-bold tracking-widest text-yellow-500 uppercase">About Me</h4>
        <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
          A Glimpse into <br className="hidden md:block" />
          <span className="text-transparent bg-clip-text bg-linear-to-r from-yellow-500 to-orange-500">My Journey 🌍</span>
        </h2>
      </div>

      <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-20">
        {/* Kolom Kiri: Story */}
        <div className="space-y-6 text-lg leading-relaxed text-zinc-400">
          <p>
            Life is a journey of learning and growth. Born and raised in <strong className="text-zinc-200">Tasikmalaya</strong> as the youngest of six siblings, I’ve always been driven by curiosity about how the world works.
          </p>
          <p>
            I thrive on exploring new things. Beyond lines of code, I have a deep passion for sports—specifically <strong className="text-zinc-200">Pencak Silat</strong>—which keeps me disciplined and focused. I also express my creativity
            through graphic design and photography.
          </p>
          <p>For me, life is about continuous improvement (Kaizen). Through this portfolio, I hope to share my projects and personal growth with you.</p>

          {/* Interest Tags (Modern Touch) */}
          <div className="pt-4">
            <h5 className="mb-4 text-sm font-semibold  text-white">THINGS I LOVE</h5>
            <div className="flex flex-wrap gap-3">
              {interests.map((item, index) => (
                <span key={index} className="px-4 py-2 text-sm font-medium border rounded-full border-zinc-800 bg-zinc-900 text-zinc-300 hover:border-yellow-500 hover:text-yellow-600 transition-colors duration-300 cursor-default">
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Kolom Kanan: Connect / Social Card */}
        <div className="relative">
          {/* Card Container */}
          <div className="p-8 border rounded-3xl  bg-zinc-900/50  border-zinc-800">
            <h3 className="mb-2 text-2xl font-bold  text-white">Let`s be Friends! 👋</h3>
            <p className="mb-8  text-zinc-400">Don`t hesitate to connect. I`m always open to discussing new projects, creative ideas, or opportunities to be part of your visions.</p>

            {/* Social Links List */}
            <div className="flex flex-col gap-4">
              <SocialLink href="https://www.linkedin.com/in/yudisetiawann/" icon={<FaLinkedinIn />} label="Connect on LinkedIn" />
              <SocialLink href="https://www.instagram.com/yudstwan_/" icon={<FaInstagram />} label="Follow on Instagram" />
              <SocialLink href="https://www.facebook.com/yudsetiawann/" icon={<FaFacebookF />} label="Add on Facebook" />
              <SocialLink href="https://www.tiktok.com/@4.54vencuave" icon={<FaTiktok />} label="Watch on TikTok" />
            </div>
          </div>

          {/* Decorative Background Element (Optional) */}
          <div className="absolute -top-10 -right-10 w-32 h-32 bg-yellow-500/10 rounded-full blur-3xl -z-10"></div>
          <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-orange-500/10 rounded-full blur-3xl -z-10"></div>
        </div>
      </div>
    </section>
  );
}

// Komponen kecil untuk Link agar kode lebih rapi (DRY Principle)
function SocialLink({ href, icon, label }: { href: string; icon: React.ReactNode; label: string }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className="group flex items-center justify-between w-full p-4 bg-zinc-950 border border-zinc-800 rounded-xl hover:border-yellow-500 transition-all duration-300 hover:shadow-md">
      <div className="flex items-center gap-3 text-zinc-400 group-hover:text-yellow-400">
        <span className="text-xl">{icon}</span>
        <span className="font-medium">{label}</span>
      </div>
      <FaArrowRight className="text-sm opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 text-yellow-500" />
    </a>
  );
}
