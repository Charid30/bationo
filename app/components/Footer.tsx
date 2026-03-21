export default function Footer() {
  return (
    <footer className="py-8 px-6 border-t border-[rgba(0,255,136,0.1)] bg-[#0a0a0f]">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="font-mono text-sm text-[#64748b]">
          <span className="text-[#00ff88]">&gt;</span> BATIONO Ulrich Rachid Kevin
        </p>
        <p className="text-xs text-[#64748b]">
          © {new Date().getFullYear()} — Cybersécurité & Développement
        </p>
        <p className="font-mono text-xs text-[#64748b]">
          Built with <span className="text-[#00d4ff]">Next.js</span> &{" "}
          <span className="text-[#00ff88]">Tailwind CSS</span>
        </p>
      </div>
    </footer>
  );
}
