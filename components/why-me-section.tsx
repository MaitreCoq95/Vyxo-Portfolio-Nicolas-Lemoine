import { Globe, Users, Cpu, Rocket, TrendingUp, Target } from "lucide-react"

const reasons = [
  {
    icon: Globe,
    title: "Expérience Multi-Pays",
    description: "Pilotage financier France, Benelux, Allemagne — vision internationale",
  },
  {
    icon: Users,
    title: "Expertise COMEX/CODIR",
    description: "Communication et support décisionnel au plus haut niveau de l'entreprise",
  },
  {
    icon: Cpu,
    title: "Digitalisation Finance",
    description: "Maîtrise des outils modernes : Power BI, SAP, Excel Expert, R Studio",
  },
  {
    icon: Rocket,
    title: "Grands Projets",
    description: "Pilotage budgétaire projet digital paneuropéen > 50M€",
  },
  {
    icon: TrendingUp,
    title: "Optimisation Prouvée",
    description: "Résultats mesurables : -8% coûts opérationnels, +12% fiabilité reporting",
  },
  {
    icon: Target,
    title: "Approche 360°",
    description: "Budget, Forecast, Cost Control, Analyse, Data Governance, Reporting",
  },
]

export function WhyMeSection() {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Pourquoi travailler avec moi ?</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">Une expertise finance complète au service de votre performance</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((reason) => (
            <div
              key={reason.title}
              className="bg-card border border-border rounded-xl p-6 hover:border-primary/50 transition-all group"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <reason.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">{reason.title}</h3>
              <p className="text-muted-foreground text-sm">{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
