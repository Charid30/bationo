export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col grid-bg overflow-hidden px-6"
    >
      {/* Ambient glow */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#00ff88] rounded-full opacity-5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#00d4ff] rounded-full opacity-5 blur-3xl pointer-events-none" />

      {/* Spacer navbar */}
      <div className="h-24 shrink-0" />

      {/* Contenu principal — prend tout l'espace disponible, centré verticalement */}
      <div className="relative z-10 flex-1 flex flex-col items-center justify-center text-center max-w-4xl mx-auto w-full">
        {/* Status badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[rgba(0,255,136,0.3)] bg-[rgba(0,255,136,0.05)] text-sm text-[#00ff88] font-mono mb-10">
          <span className="w-2 h-2 rounded-full bg-[#00ff88] animate-pulse" />
          Disponible pour de nouvelles opportunités
        </div>

        {/* Full name */}
        <h1 className="font-bold text-white leading-tight mb-6">
          <span className="block text-5xl md:text-7xl">
            BATIONO <span className="gradient-text text-glow-green">Ulrich</span>
          </span>
          <span className="block text-4xl md:text-6xl mt-2">
            Rachid <span className="text-[#00d4ff]">Kévin</span>
          </span>
        </h1>

        {/* Title */}
        <p className="text-lg md:text-2xl text-[#94a3b8] mb-4 max-w-2xl">
          Ingénieur en{" "}
          <span className="text-[#00ff88] font-semibold">Cybersécurité</span>{" "}
          &amp;{" "}
          <span className="text-[#00d4ff] font-semibold">Développement Full-Stack</span>
        </p>

        {/* Tagline */}
        <p className="text-base text-[#64748b] max-w-xl mb-10 font-mono">
          <span className="text-[#00ff88]">$</span> Concevoir des solutions sécurisées et performantes.
        </p>

        {/* CTA buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-14">
          <a
            href="/cv.pdf"
            download
            className="inline-flex items-center gap-2 px-8 py-4 bg-[#00ff88] text-black font-bold rounded-xl hover:bg-[#00e077] transition-all duration-200 glow-green"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            Télécharger mon CV
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-4 border border-[#00d4ff] text-[#00d4ff] font-bold rounded-xl hover:bg-[rgba(0,212,255,0.1)] transition-all duration-200"
          >
            Me contacter
          </a>
          <a
            href="#projects"
            className="inline-flex items-center gap-2 px-8 py-4 border border-[#ffffff20] text-[#94a3b8] font-medium rounded-xl hover:border-[#ffffff40] hover:text-white transition-all duration-200"
          >
            Voir mes projets
          </a>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-8 max-w-md w-full">
          {[
            { value: "12", label: "mois d'expérience" },
            { value: "5+", label: "projets réalisés" },
            { value: "2", label: "domaines d'expertise" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-3xl font-bold gradient-text">{stat.value}</div>
              <div className="text-xs text-[#64748b] mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom padding */}
      <div className="h-12 shrink-0" />
    </section>
  );
}
