import Image from "next/image"

const stats = [
  { value: "5+", label: "Anos de experiência" },
  { value: "1000+", label: "Clientes atendidas" },
  { value: "50+", label: "Designs exclusivos" },
]

export function About() {
  return (
    <section id="sobre" className="py-24 bg-card">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <div className="relative">
            <div className="aspect-[4/5] relative rounded-2xl overflow-hidden bg-muted">
              <Image
                src="/betina-portrait.jpg"
                alt="Betina Balduti - Nail Designer"
                fill
                className="object-cover"
              />
            </div>
            {/* Decorative Element */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 border-2 border-primary/30 rounded-2xl -z-10" />
          </div>

          {/* Content */}
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-primary font-medium mb-4">
              Sobre Mim
            </p>
            <h2 className="font-serif text-4xl md:text-5xl font-medium text-foreground mb-6 text-balance">
              Betina Balduti
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Sou apaixonada por transformar unhas em verdadeiras obras de arte. Com mais de 5 anos de 
                experiência no mercado de beleza, me especializei em técnicas avançadas de nail art, 
                alongamento e esmaltação em gel.
              </p>
              <p>
                Meu objetivo é proporcionar uma experiência única para cada cliente, entendendo suas 
                preferências e criando designs personalizados que expressem sua personalidade e estilo.
              </p>
              <p>
                Estou sempre em busca de aperfeiçoamento, participando de cursos e workshops para 
                trazer as tendências mais atuais e técnicas inovadoras para minhas clientes.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mt-10 pt-10 border-t border-border">
              {stats.map((stat) => (
                <div key={stat.label}>
                  <p className="font-serif text-3xl md:text-4xl font-semibold text-primary">
                    {stat.value}
                  </p>
                  <p className="text-sm text-muted-foreground mt-1">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
