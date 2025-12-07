const skillCategories = [
  {
    title: "Outils Finance & BI",
    skills: ["Excel Expert", "Power BI", "Power Pivot", "Qlikview", "R Studio", "Access", "Tableaux de bord avancés"],
  },
  {
    title: "Systèmes & ERP",
    skills: ["SAP", "Business Objects", "Oracle", "Microsoft Dynamics", "Hyperion", "Consolidation"],
  },
  {
    title: "Méthodologies Finance",
    skills: ["Budgeting & Forecasting", "Variance Analysis", "Cost Control", "Data Governance", "Financial Modeling", "Business Analysis"],
  },
  {
    title: "Soft Skills & Management",
    skills: ["Leadership Analytique", "Communication COMEX", "Synthèse & Stratégie", "Résolution Problèmes", "Business Partnering", "Change Management"],
  },
]

const certifications = [
  "Master Finance & Gestion",
  "Certified Financial Analyst",
  "Advanced Excel & Power BI",
  "SAP Certified",
  "Data Analytics Professional",
  "Business Analysis",
  "Anglais Professionnel C1",
]

export function SkillsSection() {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Tech Stack & Compétences</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">Outils financiers, systèmes ERP et méthodologies que je maîtrise pour piloter la performance</p>
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
