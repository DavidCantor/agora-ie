export default function Programas() {
  return (
    <main className="flex-1">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-bold text-center text-destructive mb-8">Nuestros Programas</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-card p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold text-card-foreground mb-4">Educación Primaria</h2>
            <p className="text-muted-foreground">
              Programa integral para niños de 6 a 12 años, enfocado en el desarrollo cognitivo, emocional y social.
            </p>
          </div>
          <div className="bg-card p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold text-card-foreground mb-4">Educación Secundaria</h2>
            <p className="text-muted-foreground">
              Preparación académica rigurosa para estudiantes de 12 a 18 años, con énfasis en ciencias, humanidades y artes.
            </p>
          </div>
          <div className="bg-card p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold text-card-foreground mb-4">Programas Extracurriculares</h2>
            <p className="text-muted-foreground">
              Actividades deportivas, artísticas y culturales que complementan la formación académica.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}