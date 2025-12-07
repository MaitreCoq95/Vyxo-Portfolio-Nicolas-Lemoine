"use client"

import { motion } from "framer-motion"
import { GraduationCap, Award, ScrollText } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { useTranslation } from "@/lib/i18n/useTranslation"

export function DiplomasSection() {
  const { t } = useTranslation()

  const icons = [GraduationCap, ScrollText, Award]

  return (
    <section id="diplomas" className="py-20 bg-secondary/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">{t.diplomas.title}</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">{t.diplomas.subtitle}</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {t.diplomas.items.map((diploma, index) => {
            const Icon = icons[index]
            return (
              <motion.div
                key={diploma.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full hover:border-primary/50 transition-all">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">{diploma.title}</h3>
                    <p className="text-sm text-muted-foreground mb-2">{diploma.institution}</p>
                    <p className="text-sm text-muted-foreground mb-3">{diploma.year}</p>
                    <p className="text-sm text-foreground">{diploma.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
