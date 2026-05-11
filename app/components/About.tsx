"use client";

import { useScrollAnimation } from "../hooks/useScrollAnimation";

const infoItems = [
  {
    icon: (
      <svg className="w-5 h-5 text-[#00ff88]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
      </svg>
    ),
    label: "Localisation",
    value: "Ouagadougou, Burkina Faso",
  },
  {
    icon: (
      <svg className="w-5 h-5 text-[#00d4ff]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.26 10.147a60.438 60.438 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.906 59.906 0 0112 3.493a59.903 59.903 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
      </svg>
    ),
    label: "Diplôme",
    value: "Ingénieur de Conception — Master II",
  },
  {
    icon: (
      <svg className="w-5 h-5 text-[#7c3aed]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
      </svg>
    ),
    label: "Téléphone",
    value: "(+226) 51-57-82-89",
  },
  {
    icon: (
      <svg className="w-5 h-5 text-[#fbbf24]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.5 21l5.25-11.25L21 21m-9-3h7.5M3 5.621a48.474 48.474 0 016-.371m0 0c1.12 0 2.233.038 3.334.114M9 5.25V3m3.334 2.364C11.176 10.658 7.69 15.08 3 17.502m9.334-12.138c.896.061 1.785.147 2.666.257m-4.589 8.495a18.023 18.023 0 01-3.827-5.802" />
      </svg>
    ),
    label: "Langues",
    value: "Français, Anglais, Mooré, Lélé",
  },
];

export default function About() {
  const ref = useScrollAnimation();
  const base = process.env.NEXT_PUBLIC_BASE_PATH || "";

  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div ref={ref} className="fade-in-section grid md:grid-cols-2 gap-16 items-center">

          {/* Colonne 1 — Photo + Terminal */}
          <div className="flex flex-col items-center gap-8">

            {/* Photo */}
            <div className="relative">
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#00ff88] to-[#00d4ff] blur-xl opacity-30 scale-110" />
              <div className="relative w-56 h-56 rounded-full p-[3px] bg-gradient-to-br from-[#00ff88] to-[#00d4ff]">
                <div className="w-full h-full rounded-full overflow-hidden bg-[#0d1117]">
                  <img
                    src={`${base}/profile.jpg`}
                    alt="BATIONO Ulrich Rachid Kévin"
                    className="w-full h-full object-cover object-center scale-100"
                  />
                </div>
              </div>
              <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 flex items-center gap-1.5 px-3 py-1 bg-[#0d1117] border border-[rgba(0,255,136,0.4)] rounded-full text-xs font-mono whitespace-nowrap">
                <span className="w-2 h-2 rounded-full bg-[#00ff88] animate-pulse" />
                <span className="text-[#00ff88]">Disponible</span>
              </div>
            </div>

            {/* Terminal */}
            <div className="cyber-card p-5 font-mono text-sm w-full">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-3 h-3 rounded-full bg-red-500" />
                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                <div className="w-3 h-3 rounded-full bg-green-500" />
                <span className="ml-2 text-xs text-[#64748b]">profile.json</span>
              </div>
              <div className="space-y-1 text-[#94a3b8] text-xs">
                <p><span className="text-[#7c3aed]">&quot;role&quot;</span>: <span className="text-[#fbbf24]">&quot;Ingénieur de Conception&quot;</span>,</p>
                <p><span className="text-[#7c3aed]">&quot;location&quot;</span>: <span className="text-[#fbbf24]">&quot;Ouagadougou, Burkina Faso&quot;</span>,</p>
                <p><span className="text-[#7c3aed]">&quot;focus&quot;</span>: [</p>
                <p className="pl-4"><span className="text-[#fbbf24]">&quot;SOC / Cyberdéfense&quot;</span>,</p>
                <p className="pl-4"><span className="text-[#fbbf24]">&quot;Angular / Flutter&quot;</span>,</p>
                <p className="pl-4"><span className="text-[#fbbf24]">&quot;NodeJS / API Rest&quot;</span></p>
                <p>],</p>
                <p><span className="text-[#7c3aed]">&quot;status&quot;</span>: <span className="text-[#00ff88]">&quot;open to opportunities&quot;</span></p>
                <p className="mt-3"><span className="text-[#00ff88]">$</span> <span className="cursor-blink text-white">▋</span></p>
              </div>
            </div>

          </div>

          {/* Colonne 2 — Texte */}
          <div>
            <h2 className="text-3xl font-bold text-white mb-2 section-title">À propos</h2>
            <p className="text-[#64748b] font-mono text-sm mb-8">whoami</p>

            <div className="space-y-4 text-[#94a3b8] leading-relaxed">
              <p>
                Je suis <span className="text-white font-semibold">BATIONO Ulrich Rachid Kévin</span>,
                Ingénieur de Conception spécialisé en{" "}
                <span className="text-[#00ff88]">cybersécurité</span> et{" "}
                <span className="text-[#00d4ff]">développement logiciel</span>.
              </p>
              <p>
                Fort d&apos;expériences dans le déploiement de SOC open source, l&apos;intégration
                de solutions de sécurité et la création d&apos;applications web et mobiles, je combine
                rigueur technique et esprit d&apos;innovation pour concevoir des systèmes sécurisés
                et performants.
              </p>
              <p>
                Titulaire d&apos;un <span className="text-white font-semibold">Master II en Sécurité Informatique</span> de
                l&apos;Université Aube Nouvelle, j&apos;ai mené des travaux de recherche sur les systèmes
                SIEM open source et la cyberdéfense.
              </p>
            </div>

            {/* Quick info */}
            <div className="mt-8 grid grid-cols-2 gap-4">
              {infoItems.map((item) => (
                <div key={item.label} className="cyber-card p-4">
                  <div className="mb-1">{item.icon}</div>
                  <div className="text-xs text-[#64748b] font-mono">{item.label}</div>
                  <div className="text-sm text-white font-medium mt-0.5">{item.value}</div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
