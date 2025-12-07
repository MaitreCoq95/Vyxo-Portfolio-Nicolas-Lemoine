import { TrendingUp, DollarSign, BarChart3, Shield, Calendar, Users } from "lucide-react"

const services = [
  {
    icon: TrendingUp,
    title: "Pilotage de la Performance Financière",
    description: "Mise en place de systèmes de pilotage, KPIs, dashboards stratégiques, suivi de la performance multi-pays",
    deliverables: "Dashboards Power BI, Reporting mensuel, KPIs personnalisés",
    metrics: "ROI mesurable, Temps de reporting -50%",
  },
  {
    icon: DollarSign,
    title: "Optimisation des Coûts & Rentabilité",
    description: "Analyse des coûts, identification des leviers d'optimisation, variance analysis, amélioration des marges",
    deliverables: "Analyse coûts complets, Plan d'optimisation, Suivi des savings",
    metrics: "Réduction coûts jusqu'à -15%, Amélioration marges +8%",
  },
  {
    icon: BarChart3,
    title: "Mise en Place d'Outils de Pilotage",
    description: "Conception et déploiement d'outils de pilotage automatisés (Power BI, Excel avancé, R Studio, Qlikview)",
    deliverables: "Dashboards automatisés, Outils Excel avancés, Documentation",
    metrics: "Gain de temps +40%, Fiabilité données +20%",
  },
  {
    icon: Shield,
    title: "Audit & Fiabilisation de la Donnée Financière",
    description: "Audit de la qualité des données, mise en place de contrôles, data governance, standardisation des processus",
    deliverables: "Rapport d'audit, Plan de data quality, Procédures de contrôle",
    metrics: "Fiabilité +25%, Erreurs -90%",
  },
  {
    icon: Calendar,
    title: "Structuration Budgétaire & Forecasting",
    description: "Élaboration de budgets, forecasting mensuel/trimestriel, variance analysis, méthodologies de prévision",
    deliverables: "Budget annuel, Forecast rolling, Analyses variance",
    metrics: "Précision forecast +15%, Délai de clôture -30%",
  },
  {
    icon: Users,
    title: "Support Comex/Codir pour la Prise de Décision",
    description: "Business partnering, analyses ad-hoc, présentation des résultats, recommandations stratégiques",
    deliverables: "Analyses stratégiques, Présentations COMEX, Business cases",
    metrics: "Qualité décisionnelle améliorée, Visibilité financière accrue",
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
              Mes Services Finance & Performance
            </h2>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Des solutions concrètes pour piloter votre performance financière et transformer vos données en décisions stratégiques.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-6">
              <div>
                <div className="text-3xl font-bold text-primary">50M€</div>
                <div className="text-sm text-muted-foreground">Budget projet digital piloté</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary">3 Pays</div>
                <div className="text-sm text-muted-foreground">Harmonisés (FR, BE, DE)</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary">30+</div>
                <div className="text-sm text-muted-foreground">Dashboards déployés</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary">10+</div>
                <div className="text-sm text-muted-foreground">Années d'expérience</div>
              </div>
            </div>
          </div>

          {/* Right side - Service cards */}
          <div className="space-y-4">
            {services.map((service) => (
              <div
                key={service.title}
                className="flex items-start gap-4 p-5 bg-card rounded-xl border border-border hover:border-primary/50 transition-all group cursor-pointer hover:shadow-lg hover:shadow-primary/10"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                  <service.icon className="w-6 h-6 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-foreground mb-1">{service.title}</h3>
                  <p className="text-xs text-muted-foreground mb-2">{service.description}</p>
                  <div className="text-xs text-primary font-medium">
                    {service.deliverables}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
