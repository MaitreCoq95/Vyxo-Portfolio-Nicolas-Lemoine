import { Header } from "../components/header"
import { HeroSection } from "../components/hero-section"
import { ServicesSection } from "../components/services-section"
import { TimelineSection } from "../components/timeline-section"
import { BeforeAfterSection } from "../components/before-after-section"
import { ROISection } from "../components/roi-section"
import { WhyMeSection } from "../components/why-me-section"
import { MethodSection } from "../components/method-section"
import { SkillsSection } from "../components/skills-section"
import { DiplomasSection } from "../components/diplomas-section"
import { SecuritySection } from "../components/security-section"
import { TestimonialsSection } from "../components/testimonials-section"
import { DNASection } from "../components/dna-section"
import { CTASection } from "../components/cta-section"
import { Footer } from "../components/footer"
import { FloatingCTA } from "../components/floating-cta"
import { JobMatcher } from "../components/job-matcher"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <ServicesSection />
      <TimelineSection />
      <BeforeAfterSection />
      <ROISection />
      <WhyMeSection />
      <MethodSection />
      <SkillsSection />
      <DiplomasSection />
      <SecuritySection />

      {/* Job Matcher Section */}
      <section id="job-matcher" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Job <span className="text-primary">Matcher</span> AI
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Testez la compatibilité de votre offre avec mon profil en temps réel grâce à l'IA.
            </p>
          </div>
          <JobMatcher />
        </div>
      </section>

      <TestimonialsSection />
      <DNASection />
      <CTASection />
      <Footer />
      <FloatingCTA />
    </main>
  )
}
