"use client";

import { useEffect, useRef } from "react";

const skillCategories = [
  {
    title: "Développement Web",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="#00d4ff" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
      </svg>
    ),
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
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="#00ff88" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18h3" />
      </svg>
    ),
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
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="#7c3aed" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
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
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          section.classList.add("visible");
          const bars = section.querySelectorAll<HTMLElement>(".skill-bar");
          bars.forEach((bar) => bar.classList.add("animated"));
          observer.unobserve(section);
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" className="py-24 px-6 bg-[#0a0a0f]">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-white mb-2 section-title">Compétences</h2>
        <p className="text-[#64748b] font-mono text-sm mb-12">skills --list</p>

        <div ref={sectionRef} className="fade-in-section">
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {skillCategories.map((cat) => (
              <div key={cat.title} className="cyber-card p-6">
                <div className="flex items-center gap-3 mb-6">
                  {cat.icon}
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
                          className="skill-bar h-full rounded-full"
                          style={{
                            ["--target-width" as string]: `${skill.level}%`,
                            background: `linear-gradient(90deg, ${cat.color}, ${cat.color}88)`,
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>

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
      </div>
    </section>
  );
}
