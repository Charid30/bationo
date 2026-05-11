"use client";

import { useScrollAnimation } from "../hooks/useScrollAnimation";

const educations = [
  {
    degree: "Master II en Sécurité Informatique",
    specialty: "Ingénieur de Conception",
    school: "Université Aube Nouvelle — Ouagadougou",
    period: "2024 — 2025",
    color: "#00ff88",
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="#00ff88" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.26 10.147a60.438 60.438 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.906 59.906 0 0112 3.493a59.903 59.903 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
      </svg>
    ),
    description:
      "Formation approfondie en sécurité des systèmes d'information, cyberdéfense, gestion des risques et déploiement de solutions SOC. Mémoire soutenu sur les systèmes SIEM open source.",
    highlights: [
      "Sécurité des systèmes d'information",
      "Cyberdéfense & SOC",
      "Gestion des risques informatiques",
      "Déploiement de solutions open source",
    ],
  },
  {
    degree: "Licence 3 en Génie Logiciel",
    specialty: "Ingénieur des Travaux",
    school: "Université Aube Nouvelle — Ouagadougou",
    period: "2022 — 2023",
    color: "#00d4ff",
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="#00d4ff" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
      </svg>
    ),
    description:
      "Formation en génie logiciel couvrant le développement d'applications, les bases de données, les réseaux et la programmation orientée objet.",
    highlights: [
      "Génie Logiciel",
      "Développement web & mobile",
      "Bases de données",
      "Réseaux informatiques",
    ],
  },
  {
    degree: "Baccalauréat Scientifique",
    specialty: "Série scientifique",
    school: "Lycée Marie St Claire",
    period: "2019 — 2020",
    color: "#7c3aed",
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="#7c3aed" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0012 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75z" />
      </svg>
    ),
    description:
      "Baccalauréat scientifique, fondations en mathématiques, physique et sciences.",
    highlights: [
      "Mathématiques",
      "Physique-Chimie",
      "Sciences de la vie",
    ],
  },
];

export default function Education() {
  const ref = useScrollAnimation();

  return (
    <section id="education" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-white mb-2 section-title">Formation & Cursus</h2>
        <p className="text-[#64748b] font-mono text-sm mb-12">cat /etc/academic_profile</p>

        <div ref={ref} className="fade-in-section space-y-8">
          {educations.map((edu) => (
            <div key={edu.degree} className="cyber-card p-6">
              <div className="flex flex-wrap items-start gap-4">
                <div className="shrink-0 mt-1">{edu.icon}</div>
                <div className="flex-1">
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                    <div>
                      <h3 className="text-lg font-bold text-white">{edu.degree}</h3>
                      <p style={{ color: edu.color }} className="font-semibold text-sm">
                        {edu.specialty}
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="text-xs font-mono text-[#64748b]">{edu.school}</p>
                      <span
                        className="text-xs font-mono px-3 py-1 rounded-full border mt-1 inline-block"
                        style={{
                          borderColor: `${edu.color}40`,
                          color: edu.color,
                          background: `${edu.color}10`,
                        }}
                      >
                        {edu.period}
                      </span>
                    </div>
                  </div>

                  <p className="text-sm text-[#94a3b8] mb-4 leading-relaxed">
                    {edu.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {edu.highlights.map((h) => (
                      <span
                        key={h}
                        className="text-xs px-3 py-1 rounded-full bg-[#1e293b] text-[#64748b]"
                      >
                        {h}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
