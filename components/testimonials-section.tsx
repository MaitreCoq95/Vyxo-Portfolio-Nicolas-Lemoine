import { Quote } from "lucide-react"

const testimonials = [
  {
    quote: "Nicolas a transformé notre pilotage financier. Nous avons maintenant une visibilité complète sur nos coûts et notre performance.",
    author: "Directeur Financier",
    company: "Groupe International",
  },
  {
    quote: "Grâce à son expertise, nous avons réduit nos coûts opérationnels de 12% tout en améliorant la qualité de nos reportings.",
    author: "CEO",
    company: "Scale-up Tech",
  },
  {
    quote: "Les dashboards Power BI qu'il a conçus nous ont fait gagner 3 jours par mois sur le reporting. Un vrai game-changer.",
    author: "Contrôleur de Gestion",
    company: "PME Industrielle",
  },
]

export function TestimonialsSection() {
  return (
    <section className="py-20 bg-secondary/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Ils disent de moi</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-card border border-border rounded-xl p-6 relative">
              <Quote className="w-8 h-8 text-primary/30 absolute top-4 right-4" />
              <p className="text-foreground mb-4 italic leading-relaxed">"{testimonial.quote}"</p>
              <div>
                <p className="font-semibold text-foreground">{testimonial.author}</p>
                <p className="text-sm text-muted-foreground">{testimonial.company}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
