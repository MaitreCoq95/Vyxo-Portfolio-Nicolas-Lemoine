import { ArrowRight, CheckCircle2 } from "lucide-react"
import { Button } from "@/components/ui/button"

const badges = ["ISO 9001", "GDP", "Lean Six Sigma", "Power BI", "Multi-sites", "ExOps", "Sûreté aéroportuaire"]

export function HeroSection() {
  return (
    <section className="relative pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden">
      {/* Background gradient */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <p className="text-primary font-medium">Responsable Qualité Groupe & Excellence Opérationnelle</p>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight text-balance">
              <span className="text-primary">Vivien Closse</span>
            </h1>

            <p className="text-lg text-muted-foreground leading-relaxed max-w-xl">
              Expert en structuration de systèmes Qualité et pilotage de la performance opérationnelle.
              <br />
              Je transforme les contraintes normatives en leviers de croissance pour les entreprises du Transport, de la Pharma et de la Logistique.
            </p>

            {/* Badges */}
            <div className="flex flex-wrap gap-2">
              {badges.map((badge) => (
                <span
                  key={badge}
                  className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-secondary text-foreground text-sm border border-border"
                >
                  <CheckCircle2 className="w-3 h-3 text-primary" />
                  {badge}
                </span>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 animate-glow" asChild>
                <a href="#job-matcher">
                  Job Matcher AI
                  <ArrowRight className="w-4 h-4 ml-2" />
                </a>
              </Button>

            </div>
          </div>

          {/* Right Content - Profile Image */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative">
              {/* Glow effect */}
              <div className="absolute -inset-4 bg-primary/20 rounded-full blur-3xl" />

              {/* Image container */}
              <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-2xl overflow-hidden border-2 border-primary/30">
                <img
                  src="/vivien-closse-profile-new.jpg"
                  alt="Vivien Closse - Responsable Qualité Groupe"
                  className="w-full h-full object-cover object-top"
                />
              </div>

              {/* Stats card */}
              <div className="absolute -bottom-4 -left-4 bg-card border border-border rounded-xl p-4 shadow-xl">
                <div className="text-2xl font-bold text-primary">15+</div>
                <div className="text-sm text-muted-foreground">Années d'expérience</div>
              </div>

              {/* Services card */}
              <div className="absolute -top-4 -right-4 bg-card border border-border rounded-xl p-4 shadow-xl">
                <p className="text-sm text-muted-foreground mb-1">Spécialités</p>
                <p className="text-foreground font-medium text-sm">Transport • Pharma • Logistique</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
