export default function Contacto() {
  return (
    <main className="flex-1">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-bold text-center text-destructive mb-8">Contacto</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-semibold text-card-foreground mb-6">Información de Contacto</h2>
            <div className="space-y-4">
              <div className="flex items-center">
                <svg className="h-6 w-6 text-destructive mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span className="text-muted-foreground">Calle Principal 123, Ciudad, País</span>
              </div>
              <div className="flex items-center">
                <svg className="h-6 w-6 text-destructive mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span className="text-muted-foreground">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center">
                <svg className="h-6 w-6 text-destructive mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span className="text-muted-foreground">info@colegioagoraie.edu</span>
              </div>
            </div>
          </div>
          <div>
            <h2 className="text-2xl font-semibold text-card-foreground mb-6">Envíanos un Mensaje</h2>
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-muted-foreground">Nombre</label>
                <input type="text" id="name" name="name" className="mt-1 block w-full px-3 py-2 border border-input rounded-md shadow-sm focus:outline-none focus:ring-destructive focus:border-destructive" />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-muted-foreground">Correo Electrónico</label>
                <input type="email" id="email" name="email" className="mt-1 block w-full px-3 py-2 border border-input rounded-md shadow-sm focus:outline-none focus:ring-destructive focus:border-destructive" />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-muted-foreground">Mensaje</label>
                <textarea id="message" name="message" rows={4} className="mt-1 block w-full px-3 py-2 border border-input rounded-md shadow-sm focus:outline-none focus:ring-destructive focus:border-destructive"></textarea>
              </div>
              <button type="submit" className="w-full bg-destructive text-destructive-foreground py-2 px-4 rounded-md hover:bg-destructive/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-destructive">
                Enviar Mensaje
              </button>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
}