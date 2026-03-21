"use client";

import { useScrollAnimation } from "../hooks/useScrollAnimation";

export default function About() {
  const ref = useScrollAnimation();
  const base = process.env.NEXT_PUBLIC_BASE_PATH || "";

  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div ref={ref} className="fade-in-section grid md:grid-cols-2 gap-16 items-center">

          {/* Colonne 1 — Photo + Terminal (en premier dans le DOM = en haut sur mobile) */}
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
              {/* Badge disponible */}
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
                <p><span className="text-[#7c3aed]">&quot;role&quot;</span>: <span className="text-[#fbbf24]">&quot;Cybersécurité & Dev Full-Stack&quot;</span>,</p>
                <p><span className="text-[#7c3aed]">&quot;location&quot;</span>: <span className="text-[#fbbf24]">&quot;Ouagadougou 🇧🇫&quot;</span>,</p>
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
                ingénieur en informatique spécialisé en{" "}
                <span className="text-[#00ff88]">cybersécurité</span> et{" "}
                <span className="text-[#00d4ff]">développement full-stack</span>.
              </p>
              <p>
                Passionné par la conception de solutions sécurisées et performantes, fort d&apos;expériences
                dans le déploiement de SOC open source, l&apos;intégration de solutions de sécurité
                et la création d&apos;applications web et mobiles, je combine rigueur technique et esprit
                d&apos;innovation pour relever les défis de la sécurité informatique.
              </p>
              <p>
                Actuellement en <span className="text-white font-semibold">Master II en Sécurité Informatique</span>  à
                l&apos;Université Aube Nouvelle, je continue de développer mon expertise à la croisée
                de la cybersécurité et du génie logiciel.
              </p>
            </div>

            {/* Quick info */}
            <div className="mt-8 grid grid-cols-2 gap-4">
              {[
                { icon: "📍", label: "Localisation", value: "Ouagadougou, Burkina Faso" },
                { icon: "🎓", label: "Niveau", value: "Master II — en cours" },
                { icon: "📞", label: "Téléphone", value: "(+226) 51-57-82-89" },
                { icon: "🌐", label: "Langues", value: "Français, Anglais, Mooré, Lélé" },
              ].map((item) => (
                <div key={item.label} className="cyber-card p-4">
                  <div className="text-xl mb-1">{item.icon}</div>
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
