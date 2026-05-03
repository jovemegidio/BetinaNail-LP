import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 right-10 w-72 h-72 rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute bottom-20 left-10 w-96 h-96 rounded-full bg-primary/5 blur-3xl" />
      </div>

      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-sm uppercase tracking-[0.3em] text-primary font-medium mb-6">
            Nail Designer
          </p>
          
          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-medium text-foreground leading-tight mb-8 text-balance">
            Arte e elegância em cada detalhe
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed">
            Transforme suas unhas em verdadeiras obras de arte com técnicas exclusivas e acabamento impecável. 
            Experiência personalizada para realçar sua beleza única.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button 
              asChild 
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-base"
            >
              <Link href="#agendar">
                Agende seu horário
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button 
              asChild 
              variant="outline" 
              size="lg"
              className="px-8 py-6 text-base border-foreground/20 hover:bg-foreground/5"
            >
              <Link href="#portfolio">Ver Portfólio</Link>
            </Button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50">
          <span className="text-xs uppercase tracking-widest text-muted-foreground">Explore</span>
          <div className="w-px h-12 bg-foreground/30" />
        </div>
      </div>
    </section>
  )
}
