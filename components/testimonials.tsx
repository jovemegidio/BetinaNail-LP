import { Star } from "lucide-react"

const testimonials = [
  {
    name: "Mariana Silva",
    text: "A Betina é incrível! Minhas unhas nunca ficaram tão lindas. O atendimento é impecável e o resultado sempre supera as expectativas.",
    rating: 5,
  },
  {
    name: "Carolina Santos",
    text: "Encontrei a melhor nail designer! Ambiente aconchegante, produtos de qualidade e muito profissionalismo. Super recomendo!",
    rating: 5,
  },
  {
    name: "Fernanda Costa",
    text: "Faço alongamento com a Betina há 2 anos e não troco por nada. Ela é atenciosa, criativa e sempre cuida das minhas unhas com muito carinho.",
    rating: 5,
  },
]

export function Testimonials() {
  return (
    <section id="depoimentos" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-sm uppercase tracking-[0.3em] text-primary font-medium mb-4">
            Depoimentos
          </p>
          <h2 className="font-serif text-4xl md:text-5xl font-medium text-foreground mb-6 text-balance">
            O que dizem minhas clientes
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="p-8 bg-card rounded-2xl border border-border"
            >
              <div className="flex gap-1 mb-6">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                ))}
              </div>
              <p className="text-muted-foreground leading-relaxed mb-6 italic">
                {`"${testimonial.text}"`}
              </p>
              <p className="font-serif text-lg font-semibold text-foreground">
                {testimonial.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
