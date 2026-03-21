const educations = [
  {
    degree: "Master II en Sécurité Informatique",
    specialty: "Sécurité Informatique",
    school: "Université Aube Nouvelle — Ouagadougou",
    period: "2024 — 2025 (en cours)",
    color: "#00ff88",
    icon: "🎓",
    description:
      "Formation approfondie en sécurité des systèmes d'information, cyberdéfense, gestion des risques et déploiement de solutions SOC. Mémoire en cours sur les systèmes de sécurité open source.",
    highlights: [
      "Sécurité des systèmes d'information",
      "Cyberdéfense & SOC",
      "Gestion des risques informatiques",
      "Déploiement de solutions open source",
    ],
  },
  {
    degree: "Licence 3 en Travaux Informatique",
    specialty: "Option Génie Logiciel",
    school: "Université Aube Nouvelle — Ouagadougou",
    period: "2022 — 2023",
    color: "#00d4ff",
    icon: "📜",
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
    icon: "🏫",
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
  return (
    <section id="education" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-white mb-2 section-title">Formation & Cursus</h2>
        <p className="text-[#64748b] font-mono text-sm mb-12">cat /etc/academic_profile</p>

        <div className="space-y-8">
          {educations.map((edu) => (
            <div key={edu.degree} className="cyber-card p-6">
              <div className="flex flex-wrap items-start gap-4">
                <div className="text-4xl">{edu.icon}</div>
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
