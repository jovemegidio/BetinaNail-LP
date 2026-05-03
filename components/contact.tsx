import Link from "next/link"
import { Button } from "@/components/ui/button"
import { MapPin, Phone, Clock, Instagram } from "lucide-react"

const contactInfo = [
  {
    icon: MapPin,
    title: "Endereço",
    content: "Rua das Flores, 123 - Centro",
    subcontent: "São Paulo, SP",
  },
  {
    icon: Phone,
    title: "WhatsApp",
    content: "(11) 99999-9999",
    subcontent: "Agende pelo WhatsApp",
  },
  {
    icon: Clock,
    title: "Horário",
    content: "Segunda a Sábado",
    subcontent: "9h às 19h",
  },
  {
    icon: Instagram,
    title: "Instagram",
    content: "@betinabalduti",
    subcontent: "Siga para novidades",
  },
]

export function Contact() {
  return (
    <section id="contato" className="py-24 bg-card">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left Side */}
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-primary font-medium mb-4">
              Contato
            </p>
            <h2 className="font-serif text-4xl md:text-5xl font-medium text-foreground mb-6 text-balance">
              Vamos conversar?
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-10">
              Entre em contato para agendar seu horário ou tirar dúvidas. 
              Ficarei feliz em atendê-la!
            </p>

            <div className="grid sm:grid-cols-2 gap-6">
              {contactInfo.map((item) => (
                <div key={item.title} className="flex gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                    <item.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">{item.title}</p>
                    <p className="font-medium text-foreground">{item.content}</p>
                    <p className="text-sm text-muted-foreground">{item.subcontent}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side - CTA */}
          <div id="agendar" className="flex items-center">
            <div className="w-full p-10 bg-primary rounded-2xl text-center">
              <h3 className="font-serif text-3xl md:text-4xl font-medium text-primary-foreground mb-4">
                Pronta para unhas perfeitas?
              </h3>
              <p className="text-primary-foreground/80 mb-8 max-w-md mx-auto">
                Agende seu horário pelo WhatsApp e venha viver uma experiência única de cuidado e beleza.
              </p>
              <Button 
                asChild 
                size="lg"
                className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 px-8 py-6 text-base"
              >
                <Link 
                  href="https://wa.me/5511999999999" 
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Phone className="mr-2 h-5 w-5" />
                  Agendar pelo WhatsApp
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
