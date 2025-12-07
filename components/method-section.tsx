import { Search, Map, FileCheck, BarChart3, Award } from "lucide-react"

const steps = [
  {
    step: "01",
    icon: Search,
    title: "Diagnostic financier & qualité opérationnelle",
    description: "Analyse précise des marges, coûts, variances, fiabilité des données et maturité process.",
  },
  {
    step: "02",
    icon: Map,
    title: "Cartographie des flux, des données & des risques",
    description: "Identification des ruptures process, incohérences de données, risques opérationnels et sources de variabilité.",
  },
  {
    step: "03",
    icon: FileCheck,
    title: "Standardisation & Excellence Opérationnelle",
    description: "Création de processus, modèles financiers et règles de gestion homogènes pour une performance stable.",
  },
  {
    step: "04",
    icon: BarChart3,
    title: "KPI, Automatisation & Systèmes de pilotage",
    description: "Construction de dashboards Power BI / Excel avancé et automatisation du reporting qualité + finances.",
  },
  {
    step: "05",
    icon: Award,
    title: "Pilotage, Excellence & ROI",
    description: "Accompagnement DG/Comex, optimisation coûts et réduction du coût de non qualité avec gains mesurables.",
  },
]

export function MethodSection() {
  return (
    <section id="method" className="py-20 bg-secondary/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">Ma Méthode</span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4">Méthode Vyxo — 5 étapes</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Une approche structurée et éprouvée pour transformer votre performance financière, votre qualité et vos opérations
          </p>
        </div>

        <div className="relative">
          {/* Connection line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-border -translate-y-1/2" />

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {steps.map((step, index) => (
              <div key={step.step} className="relative">
                <div className="bg-card border border-border rounded-xl p-6 hover:border-primary/50 transition-all group text-center h-full">
                  {/* Step number */}
                  <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center mx-auto mb-4 font-bold text-sm relative z-10">
                    {step.step}
                  </div>
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                    <step.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">{step.title}</h3>
                  <p className="text-sm text-muted-foreground">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
