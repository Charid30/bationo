"use client";

import { useScrollAnimation } from "../hooks/useScrollAnimation";

const certCategories = [
  {
    category: "Ingénierie Logicielle & Sécurité",
    icon: "🔐",
    color: "#00ff88",
    certs: [
      { title: "Introduction to Software Engineering", issuer: "IBM" },
      { title: "Application Security for Developers and DevOps Professionals", issuer: "IBM" },
      { title: "Assets, Threats, and Vulnerabilities", issuer: "Google" },
      { title: "Automate Cybersecurity Tasks with Python", issuer: "Google" },
      { title: "Play It Safe: Manage Security Risks", issuer: "Google" },
      { title: "Foundations of Cybersecurity", issuer: "Google" },
      { title: "Sound the Alarm: Detection and Response", issuer: "Google" },
    ],
  },
  {
    category: "Cloud Computing — Microsoft Azure",
    icon: "☁️",
    color: "#00d4ff",
    certs: [
      { title: "Azure: Create a REST API using NodeJS Serverless Functions", issuer: "Microsoft" },
      { title: "Azure: Creating Azure Serverless Functions in a Real-World Scenario", issuer: "Microsoft" },
      { title: "Azure: Create a Virtual Machine and Deploy a Web Server", issuer: "Microsoft" },
    ],
  },
  {
    category: "Cloud Computing — Amazon Web Services (AWS)",
    icon: "🟠",
    color: "#f97316",
    certs: [
      { title: "Launch an auto-scaling AWS EC2 virtual machine", issuer: "AWS" },
      { title: "AWS CloudFront: Serve content from multiple S3 buckets", issuer: "AWS" },
      { title: "Access an EC2 instance shell from the AWS console", issuer: "AWS" },
      { title: "AWS S3 Basics", issuer: "AWS" },
      { title: "Build a Business Architecture using AWS Organization", issuer: "AWS" },
      { title: "Create a Virtual Private Cloud (VPC) Using AWS", issuer: "AWS" },
    ],
  },
  {
    category: "Développement Web & Design",
    icon: "🎨",
    color: "#7c3aed",
    certs: [
      { title: "Web Development with Angular 16: Enhance an existing website", issuer: "Coursera" },
      { title: "The Bash Shell and Basic Scripting in Linux", issuer: "Coursera" },
      { title: "Python Scripting for DevOps", issuer: "Coursera" },
      { title: "Création de Designs Marketing avec Canva", issuer: "Canva" },
      { title: "Création d'Identité Visuelle En Utilisant Canva", issuer: "Canva" },
      { title: "Canva pour les débutants", issuer: "Canva" },
    ],
  },
];

export default function Certifications() {
  const ref = useScrollAnimation();

  return (
    <section id="certifications" className="py-24 px-6 bg-[#0a0a0f]">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-white mb-2 section-title">Certifications</h2>
        <p className="text-[#64748b] font-mono text-sm mb-12">ls ~/certifications/</p>

        <div ref={ref} className="fade-in-section space-y-10">
          {certCategories.map((cat) => (
            <div key={cat.category}>
              <div className="flex items-center gap-3 mb-5">
                <span className="text-2xl">{cat.icon}</span>
                <h3 className="text-lg font-bold text-white">{cat.category}</h3>
                <div className="flex-1 h-px bg-gradient-to-r from-[rgba(0,255,136,0.2)] to-transparent" />
              </div>

              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {cat.certs.map((cert) => (
                  <div key={cert.title} className="cyber-card p-4 flex items-start gap-3">
                    <span className="text-xs font-bold mt-0.5 shrink-0" style={{ color: cat.color }}>
                      ✓
                    </span>
                    <div>
                      <p className="text-sm text-white font-medium leading-tight">{cert.title}</p>
                      <p className="text-xs mt-1" style={{ color: cat.color }}>{cert.issuer}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
