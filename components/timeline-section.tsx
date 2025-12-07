"use client"

import { useEffect, useRef, useState } from "react"
import { Shield, Truck, Building2, TrendingUp, Plane, Factory, X, Lightbulb } from "lucide-react"

const timeline = [
  {
    period: "2011 – 2018",
    title: "Analyste Qualité",
    company: "ARGOS GPS",
    icon: Shield,
    description:
      "SMQ en supply chain, audits fournisseurs, suivi des non-conformités. Expérience internationale (USA, Brésil, Europe).",
    skills: [
      { name: "SMQ Supply Chain", value: 85 },
      { name: "Traçabilité", value: 90 },
      { name: "Non-conformités", value: 80 },
      { name: "Audits Fournisseurs", value: 85 },
      { name: "Gestion Stock", value: 75 },
    ],
    details: {
      missions: ["Suivi qualité supply chain", "Audits internationaux", "Gestion non-conformités"],
      outils: ["SAP", "Excel avancé", "Outils audit"],
      resultats: "Audits sur 3 continents, conformité transport & logistique",
    },
  },
  {
    period: "2018 – 2019",
    title: "Superviseur Qualité & Service Client",
    company: "EurotransPharma",
    icon: Truck,
    description: "Management service client, audit sous-traitants roulants, CAPA & réclamations clients pharma.",
    skills: [
      { name: "Gestion Réclamations", value: 90 },
      { name: "CAPA 8D", value: 85 },
      { name: "Relation Client", value: 95 },
      { name: "Audit Sous-traitants", value: 80 },
      { name: "Transport T°", value: 85 },
    ],
    details: {
      missions: ["Pilotage service client", "Audits sous-traitants", "Contrôle transport pharma"],
      outils: ["CRM", "8D", "Outils traçabilité"],
      resultats: "Amélioration satisfaction client +25%",
    },
  },
  {
    period: "2019 – 2022",
    title: "Responsable Qualité Multisite",
    company: "EurotransPharma",
    icon: Building2,
    description: "SMQ multisites (4 HUBs), audits internes/externes, certifications ISO9001 & GDP.",
    skills: [
      { name: "ISO 9001", value: 95 },
      { name: "GDP Pharma", value: 90 },
      { name: "Audits", value: 95 },
      { name: "CAPA", value: 90 },
      { name: "Management", value: 85 },
    ],
    details: {
      missions: ["SMQ multisites", "Pilotage audits", "Management superviseurs qualité"],
      outils: ["ISO 9001", "GDP", "Power BI"],
      resultats: "Certifications ISO9001 & GDP obtenues, 0 non-conformité majeure",
    },
  },
  {
    period: "2022 – 2023",
    title: "Responsable Excellence Opérationnelle",
    company: "Walden Group",
    icon: TrendingUp,
    description:
      "KPI automatisés (Power BI), résolution 8D, Ishikawa, Pareto, amélioration continue & réduction coûts non-qualité.",
    skills: [
      { name: "Lean & DMAIC", value: 95 },
      { name: "KPI Power BI", value: 90 },
      { name: "Analyse Risques", value: 85 },
      { name: "8D/Ishikawa", value: 95 },
      { name: "Optim. Process", value: 90 },
    ],
    details: {
      missions: ["Pilotage ExOps", "Résolution problèmes complexes", "Standardisation flux"],
      outils: ["Power BI", "Lean Six Sigma", "DMAIC"],
      resultats: "Réduction coûts non-qualité -35%, digitalisation KPIs",
    },
  },
  {
    period: "2023",
    title: "Responsable Qualité",
    company: "CCL Labels (Pharma / BPF)",
    icon: Factory,
    description:
      "Contrôle qualité impression pharma, conformité BPF, gestion déviations, audits clients, sécurisation traçabilité.",
    skills: [
      { name: "BPF / GMP", value: 95 },
      { name: "Contrôle Artworks", value: 90 },
      { name: "CAPA (5Why/8D)", value: 90 },
      { name: "Traçabilité", value: 95 },
      { name: "Valid. IQ/OQ/PQ", value: 85 },
    ],
    details: {
      missions: ["Contrôle qualité impression pharma", "Conformité BPF", "Validation équipements"],
      outils: ["BPF/GMP", "IQ/OQ/PQ", "5Why", "8D"],
      resultats: "100% conformité audits clients, traçabilité sécurisée",
    },
  },
  {
    period: "2023 – Aujourd'hui",
    title: "Responsable Qualité Groupe (Holding)",
    company: "Partnair & Sea",
    icon: Plane,
    description:
      "SMQ multisites + Sûreté + Sécurité + Environnement. Représentant DSAC / DGAC / GTA. Certification GDP obtenue en 6 mois. Norme 9120B.",
    skills: [
      { name: "Conformité GDP", value: 95 },
      { name: "Sûreté DGAC/DSAC", value: 90 },
      { name: "Management Multisite", value: 95 },
      { name: "Norme 9120B", value: 90 },
      { name: "Excellence Ops", value: 95 },
    ],
    details: {
      missions: ["Gestion SMQ multisite", "Coordination QSSE", "Obtention certification GDP", "Formations responsable sûreté"],
      outils: ["GDP", "DGAC", "DSAC", "GTA", "9120B"],
      resultats: "Certification GDP en 6 mois, 7 sites coordonnés",
    },
  },
  {
    period: "2024 – Aujourd'hui",
    title: "QSE & Excellence Opérationnelle",
    company: "Freelance / Transition",
    icon: Lightbulb,
    description:
      "Intervention pour PME agroalimentaire et transport : audits flash, structuration SMQ, mise en conformité GDP, amélioration des flux et traçabilité, préparation audits clients, automatisation Power BI, accompagnement terrain et montée en maturité QSE. Construction de SaaS opérationnel.",
    skills: [
      { name: "Audit Flash", value: 95 },
      { name: "Transition GDP", value: 90 },
      { name: "Mise en Conformité", value: 95 },
      { name: "Automatisation BI/IA", value: 85 },
      { name: "SaaS Opérationnel", value: 90 },
    ],
    details: {
      missions: [
        "Audits flash & Diagnostic 360°",
        "Structuration SMQ",
        "Préparation audits clients",
        "Automatisation reporting",
        "Construction SaaS",
      ],
      outils: ["Power BI", "IA/Automatisation", "GDP", "ISO 9001"],
      resultats: "Montée en conformité + structuration complète du système qualité",
    },
  },
]

function RadarChart({ skills, isVisible }: { skills: { name: string; value: number }[]; isVisible: boolean }) {
  const size = 220 // Increased size to accommodate labels
  const center = size / 2
  const radius = 60 // Slightly smaller radius for label space
  const angleStep = (2 * Math.PI) / skills.length

  const points = skills.map((skill, i) => {
    const angle = i * angleStep - Math.PI / 2
    const r = (skill.value / 100) * radius
    return {
      x: center + r * Math.cos(angle),
      y: center + r * Math.sin(angle),
      labelX: center + (radius + 30) * Math.cos(angle),
      labelY: center + (radius + 30) * Math.sin(angle),
      name: skill.name,
      value: skill.value,
      angle: angle,
    }
  })

  const pathData = points.map((p, i) => `${i === 0 ? "M" : "L"} ${p.x} ${p.y}`).join(" ") + " Z"

  // Grid circles
  const gridCircles = [0.25, 0.5, 0.75, 1].map((scale) => (
    <polygon
      key={scale}
      points={skills
        .map((_, i) => {
          const angle = i * angleStep - Math.PI / 2
          const r = scale * radius
          return `${center + r * Math.cos(angle)},${center + r * Math.sin(angle)}`
        })
        .join(" ")}
      fill="none"
      stroke="#6b7280"
      strokeOpacity={0.2}
    />
  ))

  // Grid lines
  const gridLines = skills.map((_, i) => {
    const angle = i * angleStep - Math.PI / 2
    return (
      <line
        key={i}
        x1={center}
        y1={center}
        x2={center + radius * Math.cos(angle)}
        y2={center + radius * Math.sin(angle)}
        stroke="#6b7280"
        strokeOpacity={0.2}
      />
    )
  })

  const primaryColor = "#d4a853"

  const getTextAnchor = (angle: number) => {
    const degrees = (angle * 180) / Math.PI
    if (degrees > -45 && degrees < 45) return "start"
    if (degrees > 135 || degrees < -135) return "end"
    return "middle"
  }

  return (
    <svg width={size} height={size} className="mx-auto">
      {gridCircles}
      {gridLines}
      {/* Data polygon - filled area */}
      <path
        d={pathData}
        fill={primaryColor}
        fillOpacity={isVisible ? 0.3 : 0}
        stroke={primaryColor}
        strokeWidth={2}
        strokeOpacity={isVisible ? 1 : 0}
        className="transition-all duration-700"
      />
      {/* Data points */}
      {points.map((point, i) => (
        <circle
          key={i}
          cx={point.x}
          cy={point.y}
          r={5}
          fill={primaryColor}
          opacity={isVisible ? 1 : 0}
          className="transition-all duration-500"
          style={{ transitionDelay: `${i * 100}ms` }}
        />
      ))}
      {points.map((point, i) => (
        <text
          key={`label-${i}`}
          x={point.labelX}
          y={point.labelY}
          textAnchor={getTextAnchor(point.angle)}
          dominantBaseline="middle"
          fill="#9ca3af"
          fontSize={9}
          fontWeight={500}
          opacity={isVisible ? 1 : 0}
          className="transition-opacity duration-500"
          style={{ transitionDelay: `${i * 100 + 300}ms` }}
        >
          {point.name.length > 12 ? point.name.substring(0, 12) + "..." : point.name}
        </text>
      ))}
    </svg>
  )
}

function HoverCard({
  item,
  isVisible,
  onClose,
}: {
  item: (typeof timeline)[0]
  isVisible: boolean
  onClose: () => void
}) {
  if (!isVisible) return null

  return (
    <>
      {/* Backdrop */}
      <div className="fixed inset-0 bg-background/60 backdrop-blur-sm z-40" onClick={onClose} />

      {/* Centered Modal Card */}
      <div className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-50 w-[90vw] max-w-md bg-card border border-primary/30 rounded-2xl p-6 shadow-2xl shadow-primary/20 animate-in fade-in zoom-in-95 duration-200">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-muted-foreground hover:text-foreground transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Glow effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent rounded-2xl pointer-events-none" />

        <div className="relative">
          {/* Header */}
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center">
              <item.icon className="w-6 h-6 text-primary" />
            </div>
            <div>
              <span className="text-primary text-sm font-medium">{item.period}</span>
              <h4 className="font-bold text-foreground">{item.title}</h4>
              <p className="text-sm text-muted-foreground">{item.company}</p>
            </div>
          </div>

          {/* Radar Chart */}
          <div className="mb-4">
            <RadarChart skills={item.skills} isVisible={isVisible} />
          </div>

          {/* Skills with progress bars */}
          <div className="grid grid-cols-1 gap-2 mb-4">
            {item.skills.map((skill, i) => (
              <div key={i}>
                <div className="flex justify-between text-xs mb-1">
                  <span className="text-muted-foreground">{skill.name}</span>
                  <span className="text-primary font-medium">{skill.value}%</span>
                </div>
                <div className="h-2 bg-muted rounded-full overflow-hidden">
                  <div
                    className="h-full bg-primary rounded-full transition-all duration-700"
                    style={{ width: isVisible ? `${skill.value}%` : "0%" }}
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Details */}
          <div className="space-y-3 text-sm">
            <div>
              <span className="text-primary font-semibold">Missions :</span>
              <ul className="text-muted-foreground mt-1 space-y-1">
                {item.details.missions.map((m, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-primary mt-0.5">•</span>
                    {m}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <span className="text-primary font-semibold">Outils :</span>
              <div className="flex flex-wrap gap-1.5 mt-1">
                {item.details.outils.map((o, i) => (
                  <span key={i} className="px-2 py-1 bg-primary/10 text-primary rounded-md text-xs font-medium">
                    {o}
                  </span>
                ))}
              </div>
            </div>
            <div className="pt-3 border-t border-border">
              <span className="text-primary font-semibold">Résultats :</span>
              <p className="text-muted-foreground mt-1">{item.details.resultats}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export function TimelineSection() {
  const [visibleItems, setVisibleItems] = useState<number[]>([])
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null)
  const itemRefs = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = Number(entry.target.getAttribute("data-index"))
          if (entry.isIntersecting) {
            setVisibleItems((prev) => [...new Set([...prev, index])])
          }
        })
      },
      { threshold: 0.3 },
    )

    itemRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref)
    })

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelectedIndex(null)
    }
    window.addEventListener("keydown", handleEscape)
    return () => window.removeEventListener("keydown", handleEscape)
  }, [])

  return (
    <section id="timeline" className="py-20 bg-secondary/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Mon Parcours</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Plus de 12 ans d'expérience dans la Qualité, la Sécurité et l'Excellence Opérationnelle
          </p>
          <p className="text-sm text-primary mt-2">Cliquez sur une expérience pour voir le détail des compétences</p>
        </div>

        {selectedIndex !== null && (
          <HoverCard item={timeline[selectedIndex]} isVisible={true} onClose={() => setSelectedIndex(null)} />
        )}

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 md:-translate-x-px top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary/20 via-primary to-primary/20" />

          <div className="space-y-12">
            {timeline.map((item, index) => (
              <div
                key={item.period + item.title}
                ref={(el) => {
                  itemRefs.current[index] = el
                }}
                data-index={index}
                onClick={() => setSelectedIndex(index)}
                className={`relative flex flex-col md:flex-row gap-8 cursor-pointer ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                } ${
                  visibleItems.includes(index) ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                } transition-all duration-700`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                {/* Content */}
                <div
                  className={`relative flex-1 ${index % 2 === 0 ? "md:text-right md:pr-12" : "md:pl-12"} pl-12 md:pl-0`}
                >
                  <div
                    className={`bg-card border border-border rounded-xl p-6 transition-all duration-300 ${
                      selectedIndex === index
                        ? "border-primary shadow-lg shadow-primary/20 scale-[1.02]"
                        : "hover:border-primary/50 hover:shadow-md hover:shadow-primary/10"
                    }`}
                  >
                    <span className="text-primary font-semibold text-sm">{item.period}</span>
                    <h3
                      className={`text-xl font-bold mt-1 transition-all duration-300 ${
                        selectedIndex === index ? "text-primary" : "text-foreground"
                      }`}
                    >
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground text-sm mt-1">{item.company}</p>
                    <p className="text-muted-foreground mt-3 text-sm leading-relaxed">{item.description}</p>

                    {/* Mobile preview */}
                    <div className="mt-4 pt-4 border-t border-border">
                      <div className="grid grid-cols-2 gap-2">
                        {item.skills.slice(0, 4).map((skill, i) => (
                          <div key={i} className="text-xs">
                            <div className="flex justify-between mb-1">
                              <span className="text-muted-foreground truncate">{skill.name}</span>
                              <span className="text-primary">{skill.value}%</span>
                            </div>
                            <div className="h-1 bg-muted rounded-full">
                              <div className="h-full bg-primary rounded-full" style={{ width: `${skill.value}%` }} />
                            </div>
                          </div>
                        ))}
                      </div>
                      <p className="text-xs text-primary/70 mt-2 text-center">Cliquez pour voir plus</p>
                    </div>
                  </div>
                </div>

                {/* Icon */}
                <div
                  className={`absolute left-0 md:left-1/2 md:-translate-x-1/2 w-8 h-8 bg-primary rounded-full flex items-center justify-center border-4 border-background transition-all duration-300 ${
                    selectedIndex === index ? "scale-125 shadow-lg shadow-primary/50" : "hover:scale-110"
                  }`}
                >
                  <item.icon className="w-4 h-4 text-primary-foreground" />
                </div>

                {/* Empty space for alternating layout */}
                <div className="hidden md:block flex-1" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
