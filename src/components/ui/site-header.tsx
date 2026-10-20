import Link from "next/link";

export function SiteHeader() {
  return (
    <header className="site-header">
      <div className="page-width header-inner">
        <Link href="/" className="brand" aria-label="Homies Town — início">
          <span className="brand-icon" aria-hidden="true">
            ⌂
          </span>
          <span>
            homies<span className="brand-light">town</span>
            <span className="brand-dot">.</span>
          </span>
        </Link>
        <nav aria-label="Navegação principal" className="header-nav">
          <Link href="/#cidade">A cidade</Link>
          <Link href="/#construir">
            Como construir <span aria-hidden="true">↗</span>
          </Link>
        </nav>
        <span className="header-note">
          <span className="status-dot" /> Feito entre amigos
        </span>
      </div>
    </header>
  );
}
