const technologies = [
  "Angular", "Flutter", "Node.js", "TypeScript", "Python",
  "Laravel", "VueJS", "MySQL", "Docker", "Azure",
  "AWS", "Linux", "Git", "Wazuh", "Suricata", "SOC / SIEM",
];

export default function TechBanner() {
  const items = [...technologies, ...technologies];

  return (
    <div className="py-5 bg-[#0a0a0f] border-y border-[rgba(0,255,136,0.08)] overflow-hidden">
      <div className="flex gap-10 animate-marquee whitespace-nowrap">
        {items.map((tech, i) => (
          <span
            key={i}
            className="inline-flex items-center gap-2 text-sm font-mono text-[#475569]"
          >
            <span className="text-[#00ff88] opacity-50">▸</span>
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
}
