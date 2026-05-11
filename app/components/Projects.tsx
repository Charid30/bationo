"use client";

import { useScrollAnimation } from "../hooks/useScrollAnimation";

const APK_BASE = "https://github.com/Charid30/bationo/releases/download/apk";

const projects = [
  {
    title: "iBaara",
    subtitle: "Application mobile Flutter — Emploi & Opportunités",
    description:
      "Application mobile connectant employeurs et chercheurs d'emploi. Interface intuitive, gestion des profils et des offres, notifications en temps réel. Backend Node.js.",
    tags: ["Flutter", "Dart", "Node.js", "Mobile"],
    color: "#00d4ff",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="#00d4ff" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z" />
      </svg>
    ),
    features: [
      "Publication et recherche d'offres d'emploi",
      "Gestion des profils candidats",
      "Notifications en temps réel",
      "Interface intuitive",
    ],
    status: "Terminé",
    apk: `${APK_BASE}/iBaara.apk`,
  },
  {
    title: "Luna",
    subtitle: "Application mobile Flutter — Santé féminine",
    description:
      "Application de suivi du cycle menstruel permettant aux utilisatrices de suivre, analyser et anticiper leur cycle. Interface douce et respectueuse de la vie privée. Backend Node.js.",
    tags: ["Flutter", "Dart", "Node.js", "Santé", "Mobile"],
    color: "#f472b6",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="#f472b6" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
      </svg>
    ),
    features: [
      "Suivi et prédiction du cycle",
      "Historique et statistiques",
      "Rappels et notifications",
      "Données privées et sécurisées",
    ],
    status: "Terminé",
    apk: `${APK_BASE}/luna.apk`,
  },
  {
    title: "Plateforme e-commerce",
    subtitle: "Application mobile Flutter — Achat en ligne",
    description:
      "Application mobile de plateforme d'achat en ligne. Catalogue produits, panier, gestion des commandes et paiements. Projet personnel. Backend Node.js.",
    tags: ["Flutter", "Dart", "Node.js", "E-commerce", "Mobile"],
    color: "#fbbf24",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="#fbbf24" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
      </svg>
    ),
    features: [
      "Catalogue produits",
      "Panier et commandes",
      "Gestion des livraisons",
      "Interface marchands & clients",
    ],
    status: "Personnel",
  },
  {
    title: "e-Sonabhy",
    subtitle: "Application web Angular — Portail SONABHY",
    description:
      "Portail web livré pour la SONABHY facilitant les démarches administratives en ligne : demandes de stages, consultation des offres d'emploi, demandes d'aides et autres services. Backend Node.js.",
    tags: ["Angular", "TypeScript", "Node.js", "Web", "SONABHY"],
    color: "#00ff88",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="#00ff88" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21" />
      </svg>
    ),
    features: [
      "Demandes de stages en ligne",
      "Offres d'emploi SONABHY",
      "Demandes d'aides et services",
      "Suivi des dossiers",
    ],
    status: "Livré",
    link: "https://portail.sonabhy.bf",
  },
  {
    title: "Gestion Bons de Commande",
    subtitle: "Angular + Flutter — SONABHY",
    description:
      "Solution complète de gestion des bons de commande pour la SONABHY. Application web Angular pour les gestionnaires et application mobile Flutter pour les agents terrain. Backend Node.js.",
    tags: ["Angular", "Flutter", "Node.js", "Gestion", "SONABHY"],
    color: "#7c3aed",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="#7c3aed" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z" />
      </svg>
    ),
    features: [
      "Création et validation des bons",
      "Suivi en temps réel",
      "Application mobile agents terrain",
      "Tableau de bord administrateur",
    ],
    status: "Professionnel",
  },
];

export default function Projects() {
  const ref = useScrollAnimation();

  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-white mb-2 section-title">Projets</h2>
        <p className="text-[#64748b] font-mono text-sm mb-12">git log --oneline --all</p>

        <div ref={ref} className="fade-in-section grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div key={project.title} className="cyber-card p-6 flex flex-col">
              {/* Header */}
              <div className="flex items-start justify-between mb-4">
                <div>{project.icon}</div>
                <span
                  className="text-xs font-mono px-3 py-1 rounded-full border"
                  style={{
                    borderColor: `${project.color}40`,
                    color: project.color,
                    background: `${project.color}10`,
                  }}
                >
                  {project.status}
                </span>
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-white mb-1">{project.title}</h3>
              <p className="text-xs text-[#64748b] font-mono mb-4">{project.subtitle}</p>

              {/* Description */}
              <p className="text-sm text-[#94a3b8] leading-relaxed mb-6 flex-1">
                {project.description}
              </p>

              {/* Features */}
              <ul className="space-y-2 mb-6">
                {project.features.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-sm text-[#94a3b8]">
                    <span style={{ color: project.color }}>▸</span>
                    {f}
                  </li>
                ))}
              </ul>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs font-mono px-2 py-1 bg-[#1e293b] text-[#64748b] rounded"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* APK Download button */}
              {project.apk && (
                <a
                  href={project.apk}
                  className="mt-auto inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold border transition-all duration-200 hover:scale-105"
                  style={{
                    borderColor: project.color,
                    color: project.color,
                    background: `${project.color}10`,
                  }}
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                      d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                  </svg>
                  Télécharger APK
                  <span className="text-xs opacity-70 font-mono">Android</span>
                </a>
              )}

              {/* External link button */}
              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-auto inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold border transition-all duration-200 hover:scale-105"
                  style={{
                    borderColor: project.color,
                    color: project.color,
                    background: `${project.color}10`,
                  }}
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                      d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                  </svg>
                  Voir le portail
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
