import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
// Importamos solo los que Lucide maneja perfectamente:
import { Mail, Phone, MapPin } from 'lucide-react'

function Footer() {
  return (
    <footer className="w-full border-t border-border bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-4 lg:gap-8">
          
          {/* Columna 1: Branding y Propósito */}
          <div className="md:col-span-2 space-y-6">
            <Link href="/" className="flex items-center gap-3">
              <div className="relative size-36 flex items-center justify-center rounded-xl">
                <Image
                  src="/agora_logo.webp"
                  alt="Logo Colegio Agora IE"
                  fill
                  className="object-contain p-1"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-4xl font-black tracking-tight text-primary uppercase leading-none">
                  Ágora 
                </span>
                <span className="text-[10px] font-medium text-muted-foreground uppercase tracking-[0.2em] mt-1">
                  Excelencia Educativa
                </span>
              </div>
            </Link>
            <p className="max-w-md text-balance text-sm leading-relaxed text-muted-foreground">
              Comprometidos con la excelencia educativa y el desarrollo integral de nuestros estudiantes. 
              Formando líderes éticos con las herramientas necesarias para transformar el futuro.
            </p>
            
            {/* Redes Sociales con SVGs manuales */}
            <div className="flex gap-3">
              {/* Facebook */}
              <a href="#" className="flex size-10 items-center justify-center rounded-full bg-accent text-muted-foreground transition-all hover:bg-primary hover:text-primary-foreground">
                <svg className="size-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95z"/>
                </svg>
              </a>

              {/* Instagram */}
              <a href="#" className="flex size-10 items-center justify-center rounded-full bg-accent text-muted-foreground transition-all hover:bg-primary hover:text-primary-foreground">
                <svg className="size-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
                </svg>
              </a>

              {/* Twitter (X) */}
              <a href="#" className="flex size-10 items-center justify-center rounded-full bg-accent text-muted-foreground transition-all hover:bg-primary hover:text-primary-foreground">
                <svg className="size-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Columna 2: Enlaces Rápidos */}
          <div className="space-y-6">
            <h3 className="text-sm font-bold uppercase tracking-widest text-foreground">
              Institución
            </h3>
            <ul className="grid gap-3 text-sm">
              {[
                { name: 'Inicio', href: '/' },
                { name: 'Institución', href: '/institucion' },
                { name: 'Oferta Académica', href: '/oferta' },
                { name: 'Comunidad', href: '/comunidad' },
                { name: 'Admisiones', href: '/admisiones' },
              ].map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href} 
                    className="text-muted-foreground transition-colors hover:text-primary hover:underline underline-offset-4"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Columna 3: Información de contacto */}
          <div className="space-y-6">
            <h3 className="text-sm font-bold uppercase tracking-widest text-foreground">
              Contacto Directo
            </h3>
            <ul className="grid gap-4 text-sm">
              <li className="flex items-start gap-3 group">
                <MapPin className="size-5 shrink-0 text-destructive transition-transform group-hover:scale-110" />
                <span className="text-muted-foreground">Calle Principal 123, Bogotá D.C.</span>
              </li>
              <li className="flex items-center gap-3 group">
                <Phone className="size-5 shrink-0 text-destructive transition-transform group-hover:scale-110" />
                <a href="tel:+15551234567" className="text-muted-foreground hover:text-foreground transition-colors">
                  +1 (555) 123-4567
                </a>
              </li>
              <li className="flex items-center gap-3 group">
                <Mail className="size-5 shrink-0 text-destructive transition-transform group-hover:scale-110" />
                <a href="mailto:info@colegioagoraie.edu" className="text-muted-foreground hover:text-foreground transition-colors">
                  info@colegioagoraie.edu
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Barra inferior */}
        <div className="mt-16 border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-muted-foreground">
            © 2026 <span className="font-semibold text-foreground">Institución Educativa Ágora</span>. Todos los derechos reservados.
          </p>
          <div className="flex gap-6 text-xs text-muted-foreground">
            <Link href="/privacidad" className="hover:text-primary transition-colors">Política de Privacidad</Link>
            <Link href="/terminos" className="hover:text-primary transition-colors">Términos de Servicio</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer