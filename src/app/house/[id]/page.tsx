import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { houseRegistry } from "@/houses/registry";
import { getHouse, getPlotForHouse } from "@/lib/town";

type HousePageProps = { params: Promise<{ id: string }> };

export async function generateMetadata({
  params,
}: HousePageProps): Promise<Metadata> {
  const { id } = await params;
  const house = getHouse(id);
  return { title: house?.name ?? "Casa não encontrada" };
}

export default async function HousePage({ params }: HousePageProps) {
  const { id } = await params;
  const house = getHouse(id);
  const plot = getPlotForHouse(id);
  const HouseComponent = Object.hasOwn(houseRegistry, id)
    ? houseRegistry[id]
    : undefined;

  if (!house || !plot || !HouseComponent) notFound();

  return (
    <main id="conteudo" className="page-width house-page">
      <Link href="/#cidade" className="back-link">
        ← Voltar à cidade
      </Link>
      <div className="house-page-heading">
        <div>
          <span className="eyebrow">AS PORTAS ESTÃO ABERTAS</span>
          <h1>{house.name}</h1>
        </div>
        <span className="plot-address">
          Terreno {plot.number} · {plot.street}
        </span>
      </div>
      <HouseComponent house={house} plot={plot} />
    </main>
  );
}
