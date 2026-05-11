"use client";

import { useScrollAnimation } from "../hooks/useScrollAnimation";

const issuers = [
  { name: "AWS", count: 6, color: "#f97316" },
  { name: "Google", count: 5, color: "#00ff88" },
  { name: "Microsoft", count: 3, color: "#00d4ff" },
  { name: "IBM", count: 2, color: "#7c3aed" },
  { name: "Coursera", count: 3, color: "#94a3b8" },
  { name: "Canva", count: 3, color: "#f472b6" },
];

const certCategories = [
  {
    category: "Ingénierie Logicielle & Sécurité",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="#00ff88" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
      </svg>
    ),
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
    category: "Cloud — Microsoft Azure",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="#00d4ff" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.25 15a4.5 4.5 0 004.5 4.5H18a3.75 3.75 0 001.332-7.257 3 3 0 00-3.758-3.848 5.25 5.25 0 00-10.233 2.33A4.502 4.502 0 002.25 15z" />
      </svg>
    ),
    color: "#00d4ff",
    certs: [
      { title: "Create a REST API using NodeJS Serverless Functions", issuer: "Microsoft" },
      { title: "Creating Azure Serverless Functions in a Real-World Scenario", issuer: "Microsoft" },
      { title: "Create a Virtual Machine and Deploy a Web Server", issuer: "Microsoft" },
    ],
  },
  {
    category: "Cloud — Amazon Web Services",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="#f97316" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5.25 14.25h13.5m-13.5 0a3 3 0 01-3-3m3 3a3 3 0 100 6h13.5a3 3 0 100-6m-16.5-3a3 3 0 013-3h13.5a3 3 0 013 3m-19.5 0a4.5 4.5 0 01.9-2.7L5.737 5.1a3.375 3.375 0 012.7-1.35h7.126c1.062 0 2.062.5 2.7 1.35l2.587 3.45a4.5 4.5 0 01.9 2.7m0 0a3 3 0 01-3 3m0 3h.008v.008h-.008v-.008zm0-6h.008v.008h-.008v-.008zm-3 6h.008v.008h-.008v-.008zm0-6h.008v.008h-.008v-.008z" />
      </svg>
    ),
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
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="#7c3aed" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6.75 7.5l3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0021 18V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v12a2.25 2.25 0 002.25 2.25z" />
      </svg>
    ),
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
        <p className="text-[#64748b] font-mono text-sm mb-10">ls ~/certifications/</p>

        {/* Résumé émetteurs */}
        <div className="flex flex-wrap gap-3 mb-12 items-center">
          <span className="text-sm font-mono text-[#64748b] mr-2">22 certifications —</span>
          {issuers.map((iss) => (
            <span
              key={iss.name}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-mono border"
              style={{
                borderColor: `${iss.color}40`,
                color: iss.color,
                background: `${iss.color}0d`,
              }}
            >
              {iss.name}
              <span
                className="w-4 h-4 rounded-full flex items-center justify-center text-[10px] font-bold"
                style={{ background: `${iss.color}25` }}
              >
                {iss.count}
              </span>
            </span>
          ))}
        </div>

        {/* Détail par catégorie */}
        <div ref={ref} className="fade-in-section space-y-8">
          {certCategories.map((cat) => (
            <div key={cat.category}>
              <div className="flex items-center gap-3 mb-4">
                {cat.icon}
                <h3 className="text-base font-bold text-white">{cat.category}</h3>
                <div className="flex-1 h-px bg-gradient-to-r from-[rgba(0,255,136,0.15)] to-transparent" />
                <span className="text-xs font-mono" style={{ color: cat.color }}>
                  {cat.certs.length} cert{cat.certs.length > 1 ? "s" : ""}
                </span>
              </div>

              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {cat.certs.map((cert) => (
                  <div key={cert.title} className="cyber-card px-4 py-3 flex items-start gap-3">
                    <svg
                      className="w-3.5 h-3.5 mt-0.5 shrink-0"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      style={{ color: cat.color }}
                    >
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <div>
                      <p className="text-xs text-white font-medium leading-snug">{cert.title}</p>
                      <p className="text-[11px] mt-1 font-mono" style={{ color: cat.color }}>{cert.issuer}</p>
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
