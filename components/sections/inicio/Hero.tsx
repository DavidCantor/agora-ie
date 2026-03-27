import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRight, Star } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-[85vh] flex items-center overflow-hidden bg-background">
      {/* Decoración de fondo */}
      <div className="absolute top-0 right-0 -z-10 h-full w-1/2 bg-linear-to-l from-primary/5 to-transparent" />
      <div className="absolute -top-24 -left-24 size-96 rounded-full bg-destructive/5 blur-3xl" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider">
              <Star className="size-3 fill-current" />
              Inscripciones Abiertas 2026
            </div>
            
            <h1 className="text-5xl md:text-7xl font-black tracking-tight text-foreground">
              Formando <span className="text-primary">Líderes</span> para el Mañana
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-lg">
              En el **Colegio Agora IE**, potenciamos el talento humano a través de una educación integral, ética y de vanguardia.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="h-14 rounded-full px-10 text-lg font-bold shadow-lg shadow-primary/20 bg-primary hover:bg-primary/90">
                Ver Programas
                <ArrowRight className="ml-2 size-5" />
              </Button>
              <Button variant="outline" size="lg" className="h-14 rounded-full px-10 text-lg font-bold border-2 transition-all hover:bg-accent">
                Sobre Nosotros
              </Button>
            </div>

            {/* Mini Stats */}
            <div className="flex gap-8 pt-4 border-t border-border">
              {[
                { label: "Años de Exp.", value: "15+" },
                { label: "Graduados", value: "500+" },
                { label: "Nivel ICFES", value: "A+" },
              ].map((stat) => (
                <div key={stat.label}>
                  <p className="text-2xl font-bold text-foreground">{stat.value}</p>
                  <p className="text-xs text-muted-foreground uppercase tracking-tighter">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Imagen Hero */}
          <div className="relative aspect-square lg:aspect-auto lg:h-150 w-full rounded-2xl overflow-hidden shadow-2xl border border-border">
            <div className="absolute inset-0 bg-muted flex items-center justify-center text-muted-foreground">
               <span className="text-sm italic">Cargando Imagen Institucional...</span>
            </div>
            <Image 
              src="/hero-students.jpg" 
              alt="Estudiantes Colegio Agora"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute bottom-6 left-6 right-6 p-6 bg-background/80 backdrop-blur-md rounded-xl border border-border hidden md:block">
              <p className="text-sm font-medium text-foreground italic">
                &ldquo;La educación es el arma más poderosa para cambiar el mundo.&rdquo;
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}