const skillCategories = [
  {
    title: "Développement Web",
    icon: "🌐",
    color: "#00d4ff",
    skills: [
      { name: "Angular", level: 85 },
      { name: "Laravel", level: 75 },
      { name: "VueJS", level: 70 },
      { name: "NodeJS / API Rest", level: 85 },
      { name: "MySQL", level: 80 },
    ],
  },
  {
    title: "Développement Mobile",
    icon: "📱",
    color: "#00ff88",
    skills: [
      { name: "Flutter (Dart)", level: 85 },
      { name: "Applications Android / iOS", level: 80 },
      { name: "Intégration API Rest", level: 85 },
      { name: "UI/UX Mobile", level: 75 },
    ],
  },
  {
    title: "Cybersécurité / Réseau",
    icon: "🛡️",
    color: "#7c3aed",
    skills: [
      { name: "SOC (Security Operations Center)", level: 80 },
      { name: "Bastion d'administration", level: 75 },
      { name: "Gestionnaire de mots de passe", level: 80 },
      { name: "Passerelle d'accès sécurisé", level: 75 },
      { name: "Git, Linux, Windows Server", level: 85 },
    ],
  },
];

const tags = [
  "Angular", "Laravel", "VueJS", "Flutter", "Dart", "NodeJS",
  "API Rest", "MySQL", "SOC", "Linux", "Git", "Windows Server",
  "AWS", "Azure", "Docker", "Canva", "Python",
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6 bg-[#0a0a0f]">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-white mb-2 section-title">Compétences</h2>
        <p className="text-[#64748b] font-mono text-sm mb-12">skills --list</p>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {skillCategories.map((cat) => (
            <div key={cat.title} className="cyber-card p-6">
              <div className="flex items-center gap-3 mb-6">
                <span className="text-2xl">{cat.icon}</span>
                <h3 className="text-lg font-bold text-white">{cat.title}</h3>
              </div>
              <div className="space-y-4">
                {cat.skills.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-[#94a3b8]">{skill.name}</span>
                      <span className="font-mono" style={{ color: cat.color }}>
                        {skill.level}%
                      </span>
                    </div>
                    <div className="h-1.5 bg-[#1e293b] rounded-full overflow-hidden">
                      <div
                        className="h-full rounded-full"
                        style={{
                          width: `${skill.level}%`,
                          background: `linear-gradient(90deg, ${cat.color}, ${cat.color}88)`,
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>

              {/* Soft skills */}
              {cat.title === "Cybersécurité / Réseau" && (
                <div className="mt-6 pt-4 border-t border-[rgba(0,255,136,0.1)]">
                  <p className="text-xs text-[#64748b] font-mono mb-2"># soft skills</p>
                  <div className="flex flex-wrap gap-2">
                    {["Collaboration", "Pédagogie", "Communication"].map((s) => (
                      <span key={s} className="text-xs px-2 py-1 bg-[#1e293b] text-[#94a3b8] rounded">
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Tags cloud */}
        <div className="text-center">
          <p className="text-[#64748b] text-sm font-mono mb-6"># stack technique</p>
          <div className="flex flex-wrap justify-center gap-3">
            {tags.map((tag) => (
              <span
                key={tag}
                className="px-4 py-2 text-sm font-mono border border-[rgba(0,255,136,0.2)] text-[#94a3b8] rounded-full hover:border-[#00ff88] hover:text-[#00ff88] transition-colors cursor-default"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
