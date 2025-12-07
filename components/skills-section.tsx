const skillCategories = [
  {
    title: "Qualité & Conformité",
    skills: ["ISO 9001", "ISO 14001", "ISO 27001", "ISO 45001", "HACCP", "GDP / BPD Pharma", "CAPA", "Audits"],
  },
  {
    title: "Excellence Opérationnelle",
    skills: ["Lean Six Sigma", "DMAIC", "5S", "VSM", "8D"],
  },
  {
    title: "Transport & Logistique",
    skills: ["Chaîne du froid", "GDP Transport", "Multi-sites", "TMS/WMS"],
  },
  {
    title: "Digitalisation & SaaS",
    skills: ["Power BI", "Power Automate", "Zapier", "n8n", "API", "Construction SaaS"],
  },
]

const certifications = [
  "Master 2 QSE",
  "Lean Six Sigma Green Belt",
  "Anglais C1",
  "ISO 9001 Lead Auditor",
  "GDP Certified",
  "Norme 9120B",
  "Responsable Sûreté",
]

export function SkillsSection() {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Stack & Certifications</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">Les outils et compétences que je maîtrise</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {skillCategories.map((category) => (
            <div key={category.title} className="bg-card border border-border rounded-xl p-6">
              <h3 className="font-semibold text-primary mb-4">{category.title}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span key={skill} className="px-3 py-1 bg-secondary rounded-full text-sm text-foreground">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Certifications */}
        <div className="text-center">
          <h3 className="text-lg font-semibold text-foreground mb-4">Certifications & Formations</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {certifications.map((cert) => (
              <span
                key={cert}
                className="px-4 py-2 bg-primary/10 border border-primary/30 rounded-full text-primary font-medium"
              >
                {cert}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
