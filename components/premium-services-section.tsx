'use client'

import { Bot, TrendingUp, Shield } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { useTranslation } from "@/lib/i18n/useTranslation"

export function PremiumServicesSection() {
  const { t } = useTranslation()

  const icons = [Bot, TrendingUp, Shield]

  return (
    <section id="premium-services" className="py-20 bg-secondary/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            {t.premiumServices.badge}
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">{t.premiumServices.title}</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">{t.premiumServices.subtitle}</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {t.premiumServices.services.map((service, index) => {
            const Icon = icons[index]
            return (
              <Card key={service.title} className="hover:border-primary/50 transition-all">
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground text-sm">{service.description}</p>
                  
                  {service.keyPoints && (
                    <ul className="space-y-2">
                      {service.keyPoints.map((point, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <span className="text-primary mt-0.5">•</span>
                          {point}
                        </li>
                      ))}
                    </ul>
                  )}

                  {service.techStack && (
                    <div>
                      <p className="text-xs font-medium text-primary mb-2">Tech Stack:</p>
                      <div className="flex flex-wrap gap-2">
                        {service.techStack.map((tech, i) => (
                          <span key={i} className="px-2 py-1 bg-primary/10 text-primary rounded-md text-xs">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {service.deliverables && (
                    <ul className="space-y-1">
                      {service.deliverables.map((item, i) => (
                        <li key={i} className="flex items-start gap-2 text-xs text-muted-foreground">
                          <span className="text-primary">✓</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  )}

                  {service.diagnosticContent && (
                    <ul className="space-y-1">
                      {service.diagnosticContent.map((item, i) => (
                        <li key={i} className="flex items-start gap-2 text-xs text-muted-foreground">
                          <span className="text-primary">✓</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  )}

                  <div className="pt-4 border-t border-border">
                    <p className="text-xs text-primary font-medium">{service.badge}</p>
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
