import { Shield, Truck, BarChart3, Cog, ArrowRight } from "lucide-react"

const services = [
  {
    icon: Shield,
    title: "Qualité & Conformité",
    description: "ISO 9001, HACCP, GDP, audits internes et fournisseurs",
    projects: "117 Projets",
  },
  {
    icon: Cog,
    title: "Excellence Opérationnelle",
    description: "Lean Six Sigma, DMAIC, 5S, VSM, optimisation des flux",
    projects: "84 Projets",
  },
  {
    icon: Truck,
    title: "Transport & Logistique",
    description: "Process transport, chaîne du froid, conformité GDP",
    projects: "52 Projets",
  },
  {
    icon: BarChart3,
    title: "Digitalisation & KPI",
    description: "Power BI, Power Automate, automatisation IA",
    projects: "38 Projets",
  },
]

export function ServicesSection() {
  return (
    <section id="services" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left side */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
              Mes domaines d'expertise
            </h2>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Il est plus simple de confier le travail aux experts car ils peuvent fournir les meilleurs résultats avec
              une qualité fiable.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-6">
              <div>
                <div className="text-3xl font-bold text-primary">100+</div>
                <div className="text-sm text-muted-foreground">Projets réalisés</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary">50+</div>
                <div className="text-sm text-muted-foreground">Audits réussis</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary">10+</div>
                <div className="text-sm text-muted-foreground">Certifications obtenues</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary">15+</div>
                <div className="text-sm text-muted-foreground">Années d'expérience</div>
              </div>
            </div>
          </div>

          {/* Right side - Service cards */}
          <div className="space-y-4">
            {services.map((service) => (
              <div
                key={service.title}
                className="flex items-center gap-4 p-4 bg-card rounded-xl border border-border hover:border-primary/50 transition-all group cursor-pointer"
              >
                <div className="w-14 h-14 rounded-lg bg-secondary flex items-center justify-center shrink-0">
                  <service.icon className="w-6 h-6 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-foreground">{service.title}</h3>
                  <p className="text-sm text-muted-foreground">{service.projects}</p>
                </div>

              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
