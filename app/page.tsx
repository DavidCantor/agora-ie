import { Hero } from "@/components/sections/inicio/Hero";
import { Features } from "@/components/sections/inicio/Features";

export default function Inicio() {
  return (
    <main className="flex flex-col w-full">
      <Hero />
      <Features />
      {/* Aquí podrás añadir más secciones como <Events /> o <Testimonials /> */}
    </main>
  );
}