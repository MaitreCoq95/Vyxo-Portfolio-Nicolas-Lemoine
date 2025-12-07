import { MapPin, Award, Users, Cpu, Building, Zap } from "lucide-react"

const reasons = [
  {
    icon: MapPin,
    title: "Expertise terrain réelle",
    description: "Transport, froid, pharma — pas de la théorie",
  },
  {
    icon: Building,
    title: "Multi-sites",
    description: "4 HUBs + 7 sites gérés simultanément",
  },
  {
    icon: Award,
    title: "Certifications obtenues",
    description: "GDP, ISO9001 — résultats prouvés",
  },
  {
    icon: Zap,
    title: "Pilote ExOps",
    description: "Amélioration continue & Lean Six Sigma",
  },
  {
    icon: Cpu,
    title: "Automatisation avancée",
    description: "Power BI, Power Automate, IA",
  },
  {
    icon: Users,
    title: "Structuration PME",
    description: "Capacité à structurer une entreprise entière",
  },
]

export function WhyMeSection() {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Pourquoi moi plutôt qu'un autre ?</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">Pourquoi faire appel à mon expertise ?</p>
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
