'use client';
export default function GlobalError({ reset }: { reset: () => void }) {
  return (
    <html lang="es">
      <body
        style={{
          fontFamily: 'system-ui',
          padding: '10vw',
          background: '#f7f6f2',
          color: '#232522',
        }}
      >
        <h1>Contenido temporalmente no disponible</h1>
        <p>Content temporarily unavailable. Please try again shortly.</p>
        <button onClick={reset}>Reintentar / Try again</button>
      </body>
    </html>
  );
}
