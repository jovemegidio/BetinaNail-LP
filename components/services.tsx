import { Sparkles, Palette, Shield, Heart } from "lucide-react"

const services = [
  {
    icon: Sparkles,
    title: "Alongamento de Unhas",
    description: "Técnicas de fibra de vidro, gel e acrílico para unhas mais longas e resistentes com acabamento natural.",
    price: "A partir de R$ 150",
  },
  {
    icon: Palette,
    title: "Nail Art",
    description: "Designs exclusivos e personalizados, desde os mais delicados aos mais elaborados, para todas as ocasiões.",
    price: "A partir de R$ 80",
  },
  {
    icon: Shield,
    title: "Esmaltação em Gel",
    description: "Durabilidade e brilho por até 3 semanas, com ampla variedade de cores e acabamentos.",
    price: "A partir de R$ 70",
  },
  {
    icon: Heart,
    title: "Spa das Mãos",
    description: "Tratamento completo com esfoliação, hidratação profunda e massagem relaxante.",
    price: "A partir de R$ 100",
  },
]

export function Services() {
  return (
    <section id="servicos" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-sm uppercase tracking-[0.3em] text-primary font-medium mb-4">
            Serviços
          </p>
          <h2 className="font-serif text-4xl md:text-5xl font-medium text-foreground mb-6 text-balance">
            O que eu ofereço
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            Serviços especializados para cuidar das suas unhas com carinho e profissionalismo, 
            utilizando produtos de alta qualidade.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => (
            <div
              key={service.title}
              className="group p-8 bg-card rounded-2xl border border-border hover:border-primary/30 hover:shadow-lg transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <service.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-serif text-xl font-semibold text-foreground mb-3">
                {service.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                {service.description}
              </p>
              <p className="text-primary font-medium text-sm">
                {service.price}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
