export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-zinc-800 bg-zinc-950">
      <div className="container px-6 py-8 mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="text-center md:text-left">
          <p className="text-sm font-medium text-zinc-400">
            © {currentYear} <span>Created by </span>
            <a href="https://www.instagram.com/yudstwan_" className="text-white font-bold">
              yudstwan_
            </a>
          </p>
          <p className="text-xs text-zinc-500 mt-1">Built with Next.js.</p>
        </div>
      </div>
    </footer>
  );
}
