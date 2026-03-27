import { GraduationCap, Users, BookOpen } from "lucide-react";

const FEATURES = [
  {
    title: "Excelencia Académica",
    desc: "Currículos actualizados con estándares internacionales para un aprendizaje profundo.",
    icon: <GraduationCap className="size-8" />,
    color: "text-primary"
  },
  {
    title: "Desarrollo Humano",
    desc: "Fomentamos valores éticos, liderazgo y responsabilidad social en cada paso.",
    icon: <Users className="size-8" />,
    color: "text-destructive"
  },
  {
    title: "Innovación Técnica",
    desc: "Integración de tecnologías de software y análisis desde etapas tempranas.",
    icon: <BookOpen className="size-8" />,
    color: "text-primary/70"
  }
];

export function Features() {
  return (
    <section className="py-24 bg-accent/30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">¿Por qué elegir Agora IE?</h2>
          <p className="text-muted-foreground">
            Nos enfocamos en tres pilares fundamentales para el crecimiento de nuestros jóvenes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {FEATURES.map((feature, i) => (
            <div key={i} className="group p-8 rounded-2xl bg-background border border-border hover:border-primary/50 hover:shadow-xl transition-all duration-300">
              <div className={`mb-6 p-3 inline-block rounded-xl bg-muted group-hover:bg-primary/10 transition-colors ${feature.color}`}>
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-3 text-foreground">{feature.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {feature.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}