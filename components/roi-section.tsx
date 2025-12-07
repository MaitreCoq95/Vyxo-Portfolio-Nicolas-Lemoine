import { TrendingDown, TrendingUp, Rocket, BarChart3, CheckCircle2, Award } from "lucide-react"

const results = [
  {
    icon: TrendingUp,
    value: "+12%",
    label: "Fiabilité Reporting",
    description: "Amélioration de la qualité des données",
  },
  {
    icon: TrendingDown,
    value: "-8%",
    label: "Coûts Opérationnels",
    description: "Réduction via optimisation",
  },
  {
    icon: CheckCircle2,
    value: "3 Pays",
    label: "Harmonisés",
    description: "Modèle financier unique FR/BE/DE",
  },
  {
    icon: Rocket,
    value: "50M€",
    label: "Projet Digital",
    description: "Pilotage budgétaire Europe",
  },
  {
    icon: BarChart3,
    value: "30+",
    label: "Dashboards",
    description: "Déployés et automatisés",
  },
  {
    icon: Award,
    value: "+15%",
    label: "Précision Forecast",
    description: "Amélioration des prévisions",
  },
]

export function ROISection() {
  return (
    <section className="py-20 bg-secondary/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Impact en Chiffres</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Des résultats mesurables et une performance financière optimisée
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
