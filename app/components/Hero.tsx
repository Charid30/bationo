export default function Hero() {
  const base = process.env.NEXT_PUBLIC_BASE_PATH || "";

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col grid-bg overflow-hidden px-6"
    >
      {/* Ambient glow */}
      <div className="absolute top-1/3 right-1/4 w-[500px] h-[500px] bg-[#00ff88] rounded-full opacity-[0.04] blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/4 w-[500px] h-[500px] bg-[#00d4ff] rounded-full opacity-[0.04] blur-3xl pointer-events-none" />

      <div className="h-24 shrink-0" />

      <div className="relative z-10 flex-1 flex items-center">
        <div className="max-w-6xl mx-auto w-full grid md:grid-cols-2 gap-12 lg:gap-20 items-center py-12">

          {/* Left — Texte */}
          <div className="order-2 md:order-1">
            {/* Status badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[rgba(0,255,136,0.3)] bg-[rgba(0,255,136,0.05)] text-sm text-[#00ff88] font-mono mb-8">
              <span className="w-2 h-2 rounded-full bg-[#00ff88] animate-pulse" />
              Disponible pour de nouvelles opportunités
            </div>

            {/* Nom */}
            <h1 className="font-bold text-white leading-tight mb-4">
              <span className="block text-4xl md:text-5xl lg:text-6xl">
                BATIONO <span className="gradient-text text-glow-green">Ulrich</span>
              </span>
              <span className="block text-3xl md:text-4xl lg:text-5xl mt-1">
                Rachid <span className="text-[#00d4ff]">Kévin</span>
              </span>
            </h1>

            {/* Titre */}
            <p className="text-lg md:text-xl text-[#94a3b8] mb-3">
              Ingénieur de Conception en{" "}
              <span className="text-[#00ff88] font-semibold">Cybersécurité</span>
              {" "}&amp;{" "}
              <span className="text-[#00d4ff] font-semibold">Développement Logiciel</span>
            </p>

            {/* Tagline */}
            <p className="text-sm text-[#64748b] mb-8 font-mono">
              <span className="text-[#00ff88]">$</span> Concevoir des solutions sécurisées et performantes.
            </p>

            {/* CTA */}
            <div className="flex flex-wrap gap-3 mb-10">
              <a
                href={`${base}/CV_Bationo_Ulrich.pdf`}
                download
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#00ff88] text-black font-bold rounded-xl hover:bg-[#00e077] transition-all duration-200 glow-green text-sm"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Télécharger mon CV
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3 border border-[#00d4ff] text-[#00d4ff] font-bold rounded-xl hover:bg-[rgba(0,212,255,0.1)] transition-all duration-200 text-sm"
              >
                Me contacter
              </a>
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-6 py-3 border border-[#ffffff20] text-[#94a3b8] font-medium rounded-xl hover:border-[#ffffff40] hover:text-white transition-all duration-200 text-sm"
              >
                Mes projets
              </a>
            </div>

            {/* Stats impactantes */}
            <div className="grid grid-cols-3 gap-3">
              {[
                { value: "SOC", sub: "déployé en production", color: "#00ff88" },
                { value: "5+", sub: "applications livrées", color: "#00d4ff" },
                { value: "22", sub: "certifications", color: "#7c3aed" },
              ].map((s) => (
                <div key={s.sub} className="cyber-card p-3 text-center">
                  <div className="text-xl font-bold font-mono" style={{ color: s.color }}>{s.value}</div>
                  <div className="text-[11px] text-[#64748b] mt-0.5 leading-tight">{s.sub}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — Photo */}
          <div className="order-1 md:order-2 flex flex-col items-center gap-5">
            <div className="relative">
              {/* Glow derrière */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#00ff88] to-[#00d4ff] blur-2xl opacity-20 scale-110" />

              {/* Anneau dégradé */}
              <div className="relative w-60 h-60 lg:w-72 lg:h-72 rounded-full p-[3px] bg-gradient-to-br from-[#00ff88] via-[#00d4ff] to-[#7c3aed]">
                <div className="w-full h-full rounded-full overflow-hidden bg-[#0d1117]">
                  <img
                    src={`${base}/profile.jpg`}
                    alt="BATIONO Ulrich Rachid Kévin"
                    className="w-full h-full object-cover object-center"
                  />
                </div>
              </div>

              {/* Badge flottant — haut droite */}
              <div className="absolute -top-3 -right-6 cyber-card px-3 py-2 flex items-center gap-2 whitespace-nowrap shadow-lg">
                <svg className="w-4 h-4 text-[#00ff88] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                </svg>
                <span className="text-xs font-mono text-white">Ingénieur de Conception</span>
              </div>

              {/* Badge flottant — bas gauche */}
              <div className="absolute -bottom-3 -left-6 cyber-card px-3 py-2 flex items-center gap-2 whitespace-nowrap shadow-lg">
                <span className="w-2 h-2 rounded-full bg-[#00ff88] animate-pulse shrink-0" />
                <span className="text-xs font-mono text-[#00ff88]">Open to work</span>
              </div>
            </div>

            {/* Localisation */}
            <div className="flex items-center gap-2 text-sm text-[#64748b] font-mono mt-4">
              <svg className="w-4 h-4 text-[#00ff88]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
              </svg>
              Ouagadougou, Burkina Faso
            </div>
          </div>

        </div>
      </div>

      <div className="h-12 shrink-0" />
    </section>
  );
}
