import Link from 'next/link';
export default function NotFound() {
  return (
    <section className="shell prose-page">
      <p className="eyebrow">404</p>
      <h1>
        Página no encontrada
        <br />
        <span className="muted">Page not found</span>
      </h1>
      <p>El contenido no existe o todavía no está publicado.</p>
      <div className="hero-actions">
        <Link className="button button-dark" href="/es">
          Volver al inicio
        </Link>
        <Link className="text-link" href="/en">
          Back to home →
        </Link>
      </div>
    </section>
  );
}
