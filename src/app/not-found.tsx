import Link from "next/link";

export default function NotFound() {
  return (
    <main id="conteudo" className="page-width not-found">
      <span aria-hidden="true" className="not-found-icon">
        ⌂
      </span>
      <span className="eyebrow">PARECE QUE DEMOS UMA VOLTA A MAIS</span>
      <h1>Este cantinho ainda não existe.</h1>
      <p>Há outras portas abertas à tua espera no bairro.</p>
      <Link href="/" className="primary-link">
        Voltar à cidade <span aria-hidden="true">↗</span>
      </Link>
    </main>
  );
}
