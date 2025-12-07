import { TrendingDown, TrendingUp, Rocket, BarChart3, CheckCircle2, Award } from "lucide-react"

const results = [
  {
    icon: CheckCircle2,
    value: "50",
    label: "Audits Réussis",
    description: "Clients & Autorités",
  },
  {
    icon: Rocket,
    value: "100+",
    label: "Projets Réalisés",
    description: "Amélioration & Conformité",
  },
  {
    icon: Award,
    value: "10+",
    label: "Certifications",
    description: "Obtenues & Maintenues",
  },
  {
    icon: TrendingUp,
    value: "6",
    label: "Mois",
    description: "Certification GDP obtenue",
  },
  {
    icon: TrendingDown,
    value: "-25%",
    label: "Coûts Non-Qualité",
    description: "Réduction opérationnelle",
  },
  {
    icon: BarChart3,
    value: "100%",
    label: "Digitalisation",
    description: "KPI & Process automatisés",
  },
]

export function ROISection() {
  return (
    <section className="py-20 bg-secondary/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">ROI Chiffré & Résultats</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Des résultats concrets et mesurables pour votre entreprise
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {results.map((result) => (
            <div
              key={result.label}
              className="bg-card border border-border rounded-xl p-6 hover:border-primary/50 transition-all group text-center"
            >
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                <result.icon className="w-6 h-6 text-primary" />
              </div>
              <div className="text-4xl font-bold text-primary mb-1">{result.value}</div>
              <div className="text-foreground font-semibold mb-1">{result.label}</div>
              <div className="text-sm text-muted-foreground">{result.description}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
