import { Quote } from "lucide-react"

const testimonials = [
  {
    quote: "Vivien nous a fait gagner 2 ans de maturité QSE en 6 mois. Impressionnant.",
    author: "Directeur Opérations",
    company: "PME Transport",
  },
  {
    quote: "Structure, rigueur et modernisation. Rare de trouver ce profil.",
    author: "DG",
    company: "Groupe Logistique",
  },
  {
    quote: "La certification GDP en 6 mois ? On n'y croyait pas. Il l'a fait.",
    author: "Responsable Qualité",
    company: "Pharma Logistics",
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
