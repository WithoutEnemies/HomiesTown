import Link from "next/link";
import { TownMap } from "@/features/town/town-map";
import { getHouse, getPlots } from "@/lib/town";

export default function HomePage() {
  const plots = getPlots();
  const available = plots.filter((plot) => plot.status === "available").length;
  const neighbours = plots.flatMap((plot) => {
    const house =
      plot.status === "occupied" ? getHouse(plot.houseId) : undefined;
    return house ? [{ house, plot }] : [];
  });

  return (
    <main id="conteudo" className="page-width">
      <section className="town-intro" aria-labelledby="welcome-title">
        <div>
          <span className="welcome-label">
            <span aria-hidden="true">✳</span> UM LUGAR PARA CONSTRUIR JUNTOS
          </span>
          <h1 id="welcome-title">
            Pequena cidade.
            <br />
            <em>Grandes começos.</em>
          </h1>
          <p>
            Cada casa, uma ideia. Cada vizinho, um amigo.
            <br className="desktop-break" /> Um cantinho na internet que ganha
            vida com o que criamos juntos.
          </p>
        </div>
        <div className="welcome-stamp" aria-hidden="true">
          <span>EST. 2026</span>
          <span className="stamp-house">⌂</span>
          <span>código & amizade</span>
          <span className="stamp-star">✦</span>
        </div>
      </section>

      <div className="town-layout">
        <TownMap plots={plots} />
        <aside className="town-sidebar" aria-label="Sobre o bairro">
          <section className="notice-board">
            <span className="eyebrow">O NOSSO CANTINHO</span>
            <h2>
              Uma cidade feita
              <br />
              de pessoas.
            </h2>
            <p>
              Ainda somos poucos. Mas todas as boas vizinhanças começam assim.
            </p>
            <div className="town-stats">
              <div>
                <strong>{neighbours.length.toString().padStart(2, "0")}</strong>
                <span>casas habitadas</span>
              </div>
              <div>
                <strong>{available.toString().padStart(2, "0")}</strong>
                <span>terrenos livres</span>
              </div>
            </div>
            <div className="neighbours-heading">
              <h3>Conhece os vizinhos</h3>
              <span aria-hidden="true">↙</span>
            </div>
            <ul className="neighbours-list">
              {neighbours.map(({ house, plot }) => (
                <li key={house.id}>
                  <Link href={`/house/${house.id}`}>
                    <span
                      className={`resident-avatar avatar-${house.color}`}
                      aria-hidden="true"
                    >
                      {house.name[0]}
                    </span>
                    <span>
                      <strong>{house.name}</strong>
                      <small>Terreno {plot.number}</small>
                    </span>
                    <span className="neighbour-arrow" aria-hidden="true">
                      ↗
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </section>
          <section className="invitation">
            <span className="invitation-flower" aria-hidden="true">
              ✳
            </span>
            <h2>
              O próximo vizinho
              <br />
              podes ser tu.
            </h2>
            <p>
              Um terreno livre, uma ideia tua.
              <br />O resto, aprendemos juntos.
            </p>
            <Link href="#construir">
              Vamos construir <span aria-hidden="true">↗</span>
            </Link>
          </section>
        </aside>
      </div>

      <section
        id="construir"
        className="build-section"
        aria-labelledby="build-title"
      >
        <div className="build-heading">
          <div>
            <span className="eyebrow">DA PRIMEIRA LINHA À PRIMEIRA CASA</span>
            <h2 id="build-title">O teu cantinho começa aqui.</h2>
          </div>
          <p>
            Não precisas de saber tudo.
            <br />
            Só de vontade de experimentar.
          </p>
        </div>
        <ol className="build-steps">
          <li>
            <span className="step-number">01</span>
            <h3>Inspira-te numa casa</h3>
            <p>
              Visita a Casa dos Homies e brinca com as interações. É o nosso
              ponto de partida.
            </p>
            <Link href="/house/starter">Conhecer a casa exemplo ↗</Link>
          </li>
          <li>
            <span className="step-number">02</span>
            <h3>Dá vida à tua ideia</h3>
            <p>
              Cria o teu componente React em <code>src/houses/</code>. Uma sala,
              um jardim, um pequeno universo.
            </p>
          </li>
          <li>
            <span className="step-number">03</span>
            <h3>Vem para a vizinhança</h3>
            <p>
              Adiciona a casa ao registry e aos dados de um terreno livre. O
              README explica cada passo.
            </p>
          </li>
        </ol>
        <div className="build-footnote">
          <span aria-hidden="true">♡</span> Aqui, aprender faz parte da
          construção. Uma casa de cada vez.
        </div>
      </section>
    </main>
  );
}
