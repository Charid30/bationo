const projects = [
  {
    title: "iBaara",
    subtitle: "Application mobile Flutter — Emploi & Opportunités",
    description:
      "Application mobile connectant employeurs et chercheurs d'emploi. Interface intuitive, gestion des profils et des offres, notifications en temps réel. Backend Node.js.",
    tags: ["Flutter", "Dart", "Node.js", "Mobile"],
    color: "#00d4ff",
    icon: "💼",
    features: [
      "Publication et recherche d'offres d'emploi",
      "Gestion des profils candidats",
      "Notifications en temps réel",
      "Interface intuitive",
    ],
    status: "Terminé",
  },
  {
    title: "Luna",
    subtitle: "Application mobile Flutter — Santé féminine",
    description:
      "Application de suivi du cycle menstruel permettant aux utilisatrices de suivre, analyser et anticiper leur cycle. Interface douce et respectueuse de la vie privée. Backend Node.js.",
    tags: ["Flutter", "Dart", "Node.js", "Santé", "Mobile"],
    color: "#f472b6",
    icon: "🌙",
    features: [
      "Suivi et prédiction du cycle",
      "Historique et statistiques",
      "Rappels et notifications",
      "Données privées et sécurisées",
    ],
    status: "Terminé",
  },
  {
    title: "Plateforme e-commerce",
    subtitle: "Application mobile Flutter — Achat en ligne",
    description:
      "Application mobile de plateforme d'achat en ligne. Catalogue produits, panier, gestion des commandes et paiements. Projet personnel. Backend Node.js.",
    tags: ["Flutter", "Dart", "Node.js", "E-commerce", "Mobile"],
    color: "#fbbf24",
    icon: "🛒",
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
      "Application web développée pour la SONABHY facilitant les démarches administratives : demandes de stages, consultation des offres d'emploi, demandes d'aides et autres services. Backend Node.js.",
    tags: ["Angular", "TypeScript", "Node.js", "Web", "SONABHY"],
    color: "#00ff88",
    icon: "🏢",
    features: [
      "Demandes de stages en ligne",
      "Offres d'emploi SONABHY",
      "Demandes d'aides et services",
      "Suivi des dossiers",
    ],
    status: "Professionnel",
  },
  {
    title: "Gestion Bons de Commande",
    subtitle: "Angular + Flutter — SONABHY",
    description:
      "Solution complète de gestion des bons de commande pour la SONABHY. Application web Angular pour les gestionnaires et application mobile Flutter pour les agents terrain. Backend Node.js.",
    tags: ["Angular", "Flutter", "Node.js", "Gestion", "SONABHY"],
    color: "#7c3aed",
    icon: "📋",
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
  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-white mb-2 section-title">Projets</h2>
        <p className="text-[#64748b] font-mono text-sm mb-12">git log --oneline --all</p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div key={project.title} className="cyber-card p-6 flex flex-col">
              {/* Header */}
              <div className="flex items-start justify-between mb-4">
                <div className="text-3xl">{project.icon}</div>
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
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs font-mono px-2 py-1 bg-[#1e293b] text-[#64748b] rounded"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
