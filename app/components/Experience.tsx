"use client";

import { useScrollAnimation } from "../hooks/useScrollAnimation";

const experiences = [
  {
    title: "Sécurité Informatique",
    company: "DCSIC — MDAC",
    companyFull: "Direction Centrale des Systèmes d'Information et de la Cyberdéfense — Ministère de la Défense et des Anciens Combattants",
    period: "01/06/2025 — 31/11/2025",
    location: "Ouagadougou, Burkina Faso",
    type: "Stage",
    color: "#00ff88",
    tasks: [
      "Étude et déploiement d'un S.O.C Open Source",
      "Mise en place d'un Bastion d'administration Open Source",
      "Mise en place d'un gestionnaire de mot de passe Open Source",
    ],
  },
  {
    title: "Développeur Fullstack",
    company: "Fagemethod",
    companyFull: "Entreprise Fagemethod",
    period: "25/10/2023 — 24/01/2024",
    location: "Ouagadougou, Burkina Faso",
    type: "Emploi",
    color: "#00d4ff",
    tasks: [
      "Conception et maintenance d'applications internes",
      "Formation et assistance aux utilisateurs",
      "Support technique et maintenance du parc informatique",
    ],
  },
  {
    title: "Développeur Fullstack",
    company: "SONABHY",
    companyFull: "Société Nationale Burkinabè des Hydrocarbures",
    period: "15/02/2023 — 14/06/2023",
    location: "Ouagadougou, Burkina Faso",
    type: "Stage",
    color: "#7c3aed",
    tasks: [
      "Conception d'une application web",
      "Conception d'une application mobile",
      "Conception d'un backend",
    ],
  },
  {
    title: "Informaticien",
    company: "SONABHY",
    companyFull: "Société Nationale Burkinabè des Hydrocarbures",
    period: "23/08/2021 — 22/10/2021",
    location: "Ouagadougou, Burkina Faso",
    type: "Stage",
    color: "#fbbf24",
    tasks: [
      "Maintenance curative",
      "Maintenance préventive",
      "Assistance au personnel",
    ],
  },
];

export default function Experience() {
  const ref = useScrollAnimation();

  return (
    <section id="experience" className="py-24 px-6 bg-[#0a0a0f]">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-white mb-2 section-title">Expériences</h2>
        <p className="text-[#64748b] font-mono text-sm mb-12">git log --author=me</p>

        <div ref={ref} className="fade-in-section relative pl-8 timeline-line space-y-12">
          {experiences.map((exp) => (
            <div key={exp.title + exp.period} className="relative">
              {/* Timeline dot */}
              <div
                className="absolute -left-[2.25rem] top-1 w-4 h-4 rounded-full border-2 border-[#050508]"
                style={{ background: exp.color }}
              />

              <div className="cyber-card p-6">
                {/* Header */}
                <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                  <div>
                    <h3 className="text-lg font-bold text-white">{exp.title}</h3>
                    <p className="font-semibold" style={{ color: exp.color }}>{exp.company}</p>
                    <p className="text-xs text-[#64748b] mt-0.5">{exp.companyFull}</p>
                  </div>
                  <div className="text-right shrink-0">
                    <span
                      className="text-xs font-mono px-3 py-1 rounded-full border"
                      style={{
                        borderColor: `${exp.color}40`,
                        color: exp.color,
                        background: `${exp.color}10`,
                      }}
                    >
                      {exp.type}
                    </span>
                    <p className="text-xs text-[#64748b] mt-2 font-mono">{exp.period}</p>
                    <p className="text-xs text-[#64748b]">📍 {exp.location}</p>
                  </div>
                </div>

                {/* Tasks */}
                <ul className="space-y-2">
                  {exp.tasks.map((task) => (
                    <li key={task} className="flex items-start gap-2 text-sm text-[#94a3b8]">
                      <span className="mt-1 shrink-0" style={{ color: exp.color }}>▸</span>
                      {task}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
