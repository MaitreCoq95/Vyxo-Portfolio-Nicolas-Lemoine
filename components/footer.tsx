import { Linkedin, Mail, Phone } from "lucide-react"

export function Footer() {
  return (
    <footer className="py-12 border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-sm">NL</span>
              </div>
              <span className="font-semibold text-foreground">Nicolas Lemoine</span>
            </div>
            <p className="text-muted-foreground text-sm">
              Chief Performance & Finance Strategist
              <br />
              Finance • Gestion • Performance • Digital
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Navigation</h4>
            <div className="space-y-2">
              <a href="#" className="block text-muted-foreground hover:text-primary text-sm">
                Accueil
              </a>
              <a href="#timeline" className="block text-muted-foreground hover:text-primary text-sm">
                Parcours
              </a>
              <a href="#services" className="block text-muted-foreground hover:text-primary text-sm">
                Services
              </a>
              <a href="#method" className="block text-muted-foreground hover:text-primary text-sm">
                Méthode
              </a>
              <a href="#contact" className="block text-muted-foreground hover:text-primary text-sm">
                Contact
              </a>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Contact</h4>
            <div className="space-y-3">
              <a
                href="mailto:nicolas.lemoine@vyxoconsult.com"
                className="flex items-center gap-2 text-muted-foreground hover:text-primary text-sm"
              >
                <Mail className="w-4 h-4" />
                nicolas.lemoine@vyxoconsult.com
              </a>
              <a
                href="mailto:contact@vyxoconsult.com"
                className="flex items-center gap-2 text-muted-foreground hover:text-primary text-sm"
              >
                <Mail className="w-4 h-4" />
                contact@vyxoconsult.com
              </a>
              <a
                href="tel:+33600000000"
                className="flex items-center gap-2 text-muted-foreground hover:text-primary text-sm"
              >
                <Phone className="w-4 h-4" />
                06.00.00.00.00
              </a>
              <a
                href="https://www.linkedin.com/in/nicolas-lemoine"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-muted-foreground hover:text-primary text-sm"
              >
                <Linkedin className="w-4 h-4" />
                LinkedIn
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} Nicolas Lemoine. Tous droits réservés.
        </div>
      </div>
    </footer>
  )
}
