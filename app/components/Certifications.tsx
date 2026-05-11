"use client";

import { useScrollAnimation } from "../hooks/useScrollAnimation";

const certCategories = [
  {
    category: "Ingénierie Logicielle & Sécurité",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="#00ff88" viewBox="0 0 24 24">
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
    category: "Cloud Computing — Microsoft Azure",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="#00d4ff" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.25 15a4.5 4.5 0 004.5 4.5H18a3.75 3.75 0 001.332-7.257 3 3 0 00-3.758-3.848 5.25 5.25 0 00-10.233 2.33A4.502 4.502 0 002.25 15z" />
      </svg>
    ),
    color: "#00d4ff",
    certs: [
      { title: "Azure: Create a REST API using NodeJS Serverless Functions", issuer: "Microsoft" },
      { title: "Azure: Creating Azure Serverless Functions in a Real-World Scenario", issuer: "Microsoft" },
      { title: "Azure: Create a Virtual Machine and Deploy a Web Server", issuer: "Microsoft" },
    ],
  },
  {
    category: "Cloud Computing — Amazon Web Services (AWS)",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="#f97316" viewBox="0 0 24 24">
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
      <svg className="w-6 h-6" fill="none" stroke="#7c3aed" viewBox="0 0 24 24">
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
        <p className="text-[#64748b] font-mono text-sm mb-12">ls ~/certifications/</p>

        <div ref={ref} className="fade-in-section space-y-10">
          {certCategories.map((cat) => (
            <div key={cat.category}>
              <div className="flex items-center gap-3 mb-5">
                {cat.icon}
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
