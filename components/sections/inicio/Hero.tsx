import { Button } from "@/components/ui/button";
import { MoveRight } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-[90vh] w-full flex items-center bg-[#F2F2F2] dark:bg-[#0D0D0D] overflow-hidden">
      {/* ELEMENTOS GEOMÉTRICOS: Orden y Razón */}
      {/* Un pilar vertical sólido en el color dorado de la paleta */}
      <div className="absolute right-0 top-0 h-full w-1/3 bg-[#D99D55]/5 hidden lg:block border-l border-[#D99D55]/20" />
      
      {/* Detalle decorativo: Una línea roja que representa el "Recto Camino" */}
      <div className="absolute left-10 top-0 h-full w-px bg-[#D93644]/20 hidden md:block" />

      <div className="mx-auto max-w-7xl px-6 lg:px-12 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 z-10">
        
        {/* BLOQUE DE CONTENIDO */}
        <div className="lg:col-span-8 space-y-12">
          
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <div className="h-px w-12 bg-[#D93644]" />
              <span className="text-[10px] font-bold uppercase tracking-[0.5em] text-[#262626] dark:text-[#F2F2F2]/60">
                Virtud • Razón • Disciplina
              </span>
            </div>
            
            <h1 className="text-6xl md:text-8xl font-serif font-black tracking-tighter text-[#0D0D0D] dark:text-[#F2F2F2] leading-[0.85]">
              DOMINA TU <br />
              <span className="text-[#D93644]">CARÁCTER</span>, <br />
              FORJA TU DESTINO.
            </h1>
          </div>

          <p className="max-w-xl text-xl font-serif italic leading-relaxed text-[#262626]/80 dark:text-[#F2F2F2]/70 border-l-4 border-[#D99D55] pl-8">
            &ldquo;La felicidad de tu vida depende de la calidad de tus pensamientos.&rdquo;
            <span className="not-italic text-sm mt-4 block font-sans font-bold uppercase tracking-widest text-[#D99D55]">
              — Marco Aurelio
            </span>
          </p>

          <div className="flex flex-col sm:flex-row gap-0">
            {/* Botones con bordes rectos y colores de tu paleta */}
            <Button 
              className="h-16 rounded-none px-12 bg-[#0D0D0D] dark:bg-[#F2F2F2] text-[#F2F2F2] dark:text-[#0D0D0D] hover:bg-[#D93644] dark:hover:bg-[#D93644] hover:text-white transition-all duration-300 font-bold uppercase tracking-widest text-xs"
            >
              Iniciar Proceso
            </Button>
            <Button 
              variant="outline"
              className="h-16 rounded-none px-10 border-[#0D0D0D] dark:border-[#F2F2F2] text-[#0D0D0D] dark:text-[#F2F2F2] hover:bg-[#D99D55] hover:border-[#D99D55] hover:text-white transition-all duration-300 font-bold uppercase tracking-widest text-xs"
            >
              Filosofía Ágora
              <MoveRight className="ml-2 size-4" />
            </Button>
          </div>
        </div>

        {/* ELEMENTO SIMBÓLICO: Un bloque sólido de color */}
        <div className="lg:col-span-4 flex items-center justify-center">
          <div className="relative w-full aspect-square border-[12px] border-[#D99D55] flex items-center justify-center p-8 bg-white dark:bg-[#262626] shadow-2xl">
             <div className="text-center space-y-4">
                <p className="text-6xl font-serif font-black text-[#0D0D0D] dark:text-[#F2F2F2]">IE</p>
                <div className="h-2 w-12 bg-[#D93644] mx-auto" />
                <p className="text-[10px] font-bold uppercase tracking-[0.4em] text-[#D99D55]">Agora</p>
             </div>
             {/* Coordenadas o texto pequeño en las esquinas del cuadro */}
             <span className="absolute top-2 left-2 text-[8px] font-mono opacity-40">MOSQUERA • COL</span>
             <span className="absolute bottom-2 right-2 text-[8px] font-mono opacity-40">EST. 2026</span>
          </div>
        </div>

      </div>

      {/* FOOTER DEL HERO: Los 4 pilares estoicos */}
      <div className="absolute bottom-0 left-0 w-full bg-[#0D0D0D] py-6 px-12 hidden md:block">
        <div className="mx-auto max-w-7xl flex justify-between items-center text-[#F2F2F2]/40 text-[9px] font-bold uppercase tracking-[0.6em]">
          <span>Sabiduría</span>
          <div className="size-1 bg-[#D93644] rounded-full" />
          <span>Justicia</span>
          <div className="size-1 bg-[#D99D55] rounded-full" />
          <span>Coraje</span>
          <div className="size-1 bg-[#D93644] rounded-full" />
          <span>Templanza</span>
        </div>
      </div>
    </section>
  );
}