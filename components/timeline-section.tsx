'use client'

import { useTranslation } from "@/lib/i18n/useTranslation"

// Note: Timeline component is complex with detailed job data
// For now, keeping detailed content in French/English within the component
// Full translation can be added later if needed

export function TimelineSection() {
  const { t } = useTranslation()

  return (
    <section id="experience" className="py-20 bg-secondary/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">{t.timeline.title}</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">{t.timeline.subtitle}</p>
        </div>

        <div className="space-y-8">
          {t.timeline.jobs.map((job, index) => (
            <div key={index} className="bg-card border border-border rounded-xl p-6 hover:border-primary/50 transition-all">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-foreground">{job.title}</h3>
                  <p className="text-primary font-medium">{job.company}</p>
                  <p className="text-sm text-muted-foreground">{job.location}</p>
                  <p className="text-muted-foreground mt-3">{job.description}</p>
                  
                  {job.achievements && job.achievements.length > 0 && (
                    <ul className="mt-4 space-y-2">
                      {job.achievements.map((achievement, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <span className="text-primary mt-0.5">•</span>
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
