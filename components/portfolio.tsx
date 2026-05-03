import Image from "next/image"

const portfolioItems = [
  { id: 1, title: "Francesa Moderna", category: "Nail Art" },
  { id: 2, title: "Glitter Delicado", category: "Esmaltação" },
  { id: 3, title: "Marmorizado", category: "Nail Art" },
  { id: 4, title: "Nude Elegante", category: "Alongamento" },
  { id: 5, title: "Flores Artísticas", category: "Nail Art" },
  { id: 6, title: "Minimalista", category: "Esmaltação" },
]

export function Portfolio() {
  return (
    <section id="portfolio" className="py-24 bg-card">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-sm uppercase tracking-[0.3em] text-primary font-medium mb-4">
            Portfólio
          </p>
          <h2 className="font-serif text-4xl md:text-5xl font-medium text-foreground mb-6 text-balance">
            Meus trabalhos
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            Confira alguns dos designs exclusivos criados para minhas clientes. 
            Cada trabalho é único e feito com muito carinho.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {portfolioItems.map((item) => (
            <div
              key={item.id}
              className="group relative aspect-square rounded-2xl overflow-hidden bg-muted cursor-pointer"
            >
              <Image
                src={`/portfolio-${item.id}.jpg`}
                alt={item.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/60 transition-colors duration-300 flex items-center justify-center">
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center text-primary-foreground">
                  <p className="text-xs uppercase tracking-wider mb-1 text-primary-foreground/70">
                    {item.category}
                  </p>
                  <p className="font-serif text-xl font-medium">{item.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
