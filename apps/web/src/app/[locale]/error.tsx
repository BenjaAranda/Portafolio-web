'use client';
export default function ErrorPage({ reset }: { reset: () => void }) {
  return (
    <section className="shell prose-page">
      <p className="eyebrow">CONTENIDO NO DISPONIBLE / CONTENT UNAVAILABLE</p>
      <h1>No pudimos cargar esta página.</h1>
      <p>Inténtalo nuevamente en un momento. / Please try again shortly.</p>
      <button className="button button-dark" onClick={reset}>
        Reintentar / Try again
      </button>
    </section>
  );
}
