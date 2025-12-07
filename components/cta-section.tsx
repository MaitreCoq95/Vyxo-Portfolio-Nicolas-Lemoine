import { ArrowRight, Download, Eye, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"

export function CTASection() {
  return (
    <section id="contact" className="py-20 bg-primary/5 border-y border-primary/20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Prêt à transformer votre organisation ?</h2>
        <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
          Discutons de vos enjeux QSE et de comment je peux vous aider à atteindre vos objectifs en moins de 90 jours.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90" asChild>
            <a href="tel:0617997198">
              <Phone className="mr-2 h-4 w-4" />
              Prendre RDV 20 min
            </a>
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-border text-foreground hover:bg-secondary bg-transparent"
          >
            <Eye className="w-4 h-4 mr-2" />
            Voir mes résultats
          </Button>
        </div>
      </div>
    </section>
  )
}
