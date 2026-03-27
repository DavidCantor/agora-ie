import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

function Navbar() {
  return (
    // "inline-size" asegura que el layout sea estable
    <nav className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          
          {/* Logo y Nombre - Agrandados */}
          <div className="flex items-center shrink-0">
            <Link href="/" className="flex items-center gap-4 group transition-all">
              <div className="relative w-16 h-16 flex items-center justify-center transition-transform group-hover:scale-105">
                <Image
                  src="/agora_logo.webp"
                  alt="Logo Colegio Agora IE"
                  fill
                  priority // Carga prioritaria para evitar parpadeos
                  className="object-contain"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-black tracking-tighter text-primary leading-none uppercase">
                  Colegio Agora
                </span>
                <span className="text-[10px] font-medium text-muted-foreground tracking-[0.2em] uppercase">
                  Institución Educativa
                </span>
              </div>
            </Link>
          </div>

          {/* Navegación Desktop */}
          <div className="hidden md:flex items-center gap-2">
            {[
              { name: 'Inicio', href: '/' },
              { name: 'Sobre Nosotros', href: '/sobre-nosotros' },
              { name: 'Programas', href: '/programas' },
            ].map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="px-4 py-2 text-sm font-semibold text-foreground/70 transition-all hover:text-primary hover:bg-primary/5 rounded-md"
              >
                {item.name}
              </Link>
            ))}
            
            <Link 
              href="/contacto" 
              className="ml-4 inline-flex h-10 items-center justify-center rounded-lg bg-primary px-6 text-sm font-bold text-primary-foreground shadow-lg shadow-primary/20 transition-all hover:opacity-90 active:scale-95"
            >
              Contacto
            </Link>
          </div>

          {/* Menú Móvil */}
          <div className="md:hidden">
            <button className="p-2 text-foreground hover:bg-accent rounded-lg transition-colors">
              <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar