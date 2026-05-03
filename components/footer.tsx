import Link from "next/link"
import { Instagram } from "lucide-react"

export function Footer() {
  return (
    <footer className="py-12 bg-foreground text-primary-foreground">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <Link href="/" className="font-serif text-2xl font-semibold tracking-wide">
              Betina Balduti
            </Link>
            <p className="text-primary-foreground/60 text-sm mt-2">
              Nail Designer
            </p>
          </div>

          <div className="flex items-center gap-6">
            <Link 
              href="https://instagram.com/betinabalduti" 
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary-foreground/20 transition-colors"
            >
              <Instagram className="w-5 h-5" />
            </Link>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 mt-8 pt-8 text-center">
          <p className="text-primary-foreground/40 text-sm">
            © {new Date().getFullYear()} Betina Balduti. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}
