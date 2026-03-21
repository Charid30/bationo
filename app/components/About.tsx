"use client";

import { useScrollAnimation } from "../hooks/useScrollAnimation";

export default function About() {
  const ref = useScrollAnimation();

  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div ref={ref} className="fade-in-section grid md:grid-cols-2 gap-16 items-center">
          {/* Text */}
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
                Actuellement en <span className="text-white font-semibold">Master II en Sécurité Informatique</span> à
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

          {/* Terminal */}
          <div className="cyber-card p-6 font-mono text-sm">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-3 h-3 rounded-full bg-red-500" />
              <div className="w-3 h-3 rounded-full bg-yellow-500" />
              <div className="w-3 h-3 rounded-full bg-green-500" />
              <span className="ml-2 text-xs text-[#64748b]">terminal — profile.sh</span>
            </div>
            <div className="space-y-2 text-[#94a3b8]">
              <p>
                <span className="text-[#00ff88]">$</span>{" "}
                <span className="text-[#00d4ff]">cat</span> profile.json
              </p>
              <div className="pl-4 border-l border-[rgba(0,255,136,0.2)] space-y-1">
                <p><span className="text-[#7c3aed]">"name"</span>: <span className="text-[#fbbf24]">"BATIONO Ulrich Rachid Kévin"</span>,</p>
                <p><span className="text-[#7c3aed]">"role"</span>: <span className="text-[#fbbf24]">"Ingénieur Cybersécurité & Dev Full-Stack"</span>,</p>
                <p><span className="text-[#7c3aed]">"location"</span>: <span className="text-[#fbbf24]">"Ouagadougou 🇧🇫"</span>,</p>
                <p><span className="text-[#7c3aed]">"age"</span>: <span className="text-[#00d4ff]">27</span>,</p>
                <p><span className="text-[#7c3aed]">"focus"</span>: [</p>
                <p className="pl-4"><span className="text-[#fbbf24]">"SOC / Cyberdéfense"</span>,</p>
                <p className="pl-4"><span className="text-[#fbbf24]">"Angular / Flutter"</span>,</p>
                <p className="pl-4"><span className="text-[#fbbf24]">"NodeJS / API Rest"</span>,</p>
                <p className="pl-4"><span className="text-[#fbbf24]">"Cloud AWS / Azure"</span></p>
                <p>],</p>
                <p><span className="text-[#7c3aed]">"status"</span>: <span className="text-[#00ff88]">"open to opportunities"</span></p>
              </div>
              <p className="mt-4">
                <span className="text-[#00ff88]">$</span>{" "}
                <span className="cursor-blink text-white">▋</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
