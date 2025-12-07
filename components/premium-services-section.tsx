"use client"

import { Bot, TrendingUp, Shield, Sparkles } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const premiumServices = [
  {
    icon: Bot,
    title: "Reporting Financier Automatisé & IA",
    description:
      "Construction d'assistants IA internes, automatisation complète du reporting mensuel, détection autonome des écarts et génération automatique d'analyses financières exploitables.",
    keyPoints: [
      "Chatbot IA interne entraîné sur les données du client",
      "Reporting mensuel produit automatiquement",
      "Détection automatique des anomalies & variances",
      "Réduction du travail manuel (20h → 20 min)",
      "Sécurisation & fiabilisation de la donnée financière",
    ],
    badge: "Offre exclusive Vyxo — aucune concurrence équivalente sur le marché.",
    color: "from-blue-500/20 to-cyan-500/20",
    borderColor: "border-blue-500/30",
  },
  {
    icon: TrendingUp,
    title: "Modélisation Financière Prédictive",
    description:
      "Création de modèles prédictifs pour anticiper la marge, le cash burn, les risques, la rentabilité par produit ou l'impact d'une décision stratégique.",
    techStack: ["R Studio", "Python", "Excel avancé (Power Pivot)", "Power BI", "Modèles IA prédictifs"],
    deliverables: [
      "Forecast intelligent à 3/6/12 mois",
      "Simulation d'impact décisionnel",
      "Modèles financiers dynamiques",
    ],
    badge: "Produit premium très recherché par les directions financières.",
    color: "from-purple-500/20 to-pink-500/20",
    borderColor: "border-purple-500/30",
  },
  {
    icon: Shield,
    title: "Vyxo Data Quality Scan™",
    description:
      "Audit haut-niveau de la qualité de la donnée financière : identification des erreurs, doublons, incohérences Excel, ruptures de flux, anomalies de variances et KPIs de mauvaise qualité.",
    diagnosticContent: [
      "Audit des fichiers Excel / systèmes / reporting",
      "Analyse des sources d'erreurs",
      "Cartographie des incohérences de données",
      "Scoring qualitatif de la donnée",
      "Plan de correction & standardisation",
    ],
    pricing: "Diagnostic : 3 000€ à 10 000€",
    badge: "Un service unique sur le marché, combinant finance, data et excellence opérationnelle.",
    color: "from-emerald-500/20 to-teal-500/20",
    borderColor: "border-emerald-500/30",
  },
]

export function PremiumServicesSection() {
  return (
    <section id="premium-services" className="py-20 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-4">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-semibold text-primary">Offres Premium</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Finance Augmentée & IA
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Des solutions innovantes combinant finance, data, IA et excellence opérationnelle pour transformer votre organisation
          </p>
        </div>

        {/* Premium Service Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {premiumServices.map((service, index) => (
            <Card
              key={index}
              className={`bg-gradient-to-br ${service.color} border-2 ${service.borderColor} hover:shadow-xl hover:shadow-primary/20 transition-all duration-300 group`}
            >
              <CardContent className="p-6">
                {/* Icon */}
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <service.icon className="w-7 h-7 text-primary" />
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-foreground mb-3">{service.title}</h3>

                {/* Description */}
                <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{service.description}</p>

                {/* Key Points / Tech Stack / Diagnostic Content */}
                {service.keyPoints && (
                  <ul className="space-y-2 mb-4">
                    {service.keyPoints.map((point, i) => (
                      <li key={i} className="text-xs text-foreground flex items-start gap-2">
                        <span className="text-primary mt-0.5">✓</span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                )}

                {service.techStack && (
                  <div className="mb-4">
                    <p className="text-xs font-semibold text-foreground mb-2">Tech Stack :</p>
                    <div className="flex flex-wrap gap-1.5">
                      {service.techStack.map((tech, i) => (
                        <span
                          key={i}
                          className="text-xs px-2 py-1 rounded-md bg-primary/10 text-primary border border-primary/20"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {service.deliverables && (
                  <div className="mb-4">
                    <p className="text-xs font-semibold text-foreground mb-2">Livrables :</p>
                    <ul className="space-y-1">
                      {service.deliverables.map((item, i) => (
                        <li key={i} className="text-xs text-muted-foreground flex items-start gap-2">
                          <span className="text-primary">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {service.diagnosticContent && (
                  <ul className="space-y-2 mb-4">
                    {service.diagnosticContent.map((item, i) => (
                      <li key={i} className="text-xs text-foreground flex items-start gap-2">
                        <span className="text-primary mt-0.5">✓</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                )}

                {/* Pricing */}
                {service.pricing && (
                  <div className="mb-4 p-3 rounded-lg bg-primary/5 border border-primary/10">
                    <p className="text-sm font-bold text-primary">{service.pricing}</p>
                  </div>
                )}

                {/* Badge */}
                <div className="pt-4 border-t border-border">
                  <p className="text-xs italic text-primary font-medium">{service.badge}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Differentiation Statement */}
        <div className="text-center">
          <div className="inline-block p-6 rounded-2xl bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10 border border-primary/20">
            <p className="text-lg font-semibold text-foreground">
              Nicolas combine{" "}
              <span className="text-primary">finance</span>,{" "}
              <span className="text-primary">data</span>,{" "}
              <span className="text-primary">IA</span> et{" "}
              <span className="text-primary">excellence opérationnelle</span> pour transformer les organisations.
            </p>
            <p className="text-sm text-muted-foreground mt-2">Un profil rare et puissant.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
