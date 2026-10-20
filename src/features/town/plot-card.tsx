import type { CSSProperties } from "react";
import Link from "next/link";
import { HouseIllustration } from "@/components/ui/house-illustration";
import { getHouse } from "@/lib/town";
import type { Plot } from "@/types/town";

export function PlotCard({ plot, index }: { plot: Plot; index: number }) {
  const house = plot.status === "occupied" ? getHouse(plot.houseId) : undefined;
  const position: CSSProperties = {
    gridColumn: (index % 3) + 1,
    gridRow: Math.floor(index / 3) * 2 + 1,
  };

  if (plot.status === "occupied" && !house) {
    throw new Error(
      `O terreno ${plot.id} está associado a uma casa inexistente: ${plot.houseId}`,
    );
  }

  return (
    <Link
      href={house ? `/house/${house.id}` : "#construir"}
      className={`map-lot ${house ? "lot-occupied" : "lot-available"}`}
      style={position}
      aria-label={
        house
          ? `Visitar ${house.name}, terreno ${plot.number}`
          : `Terreno ${plot.number} disponível — aprende a criar a tua casa`
      }
    >
      <span className="lot-number">{plot.number}</span>
      {house ? (
        <>
          <HouseIllustration color={house.color} />
          <span className="lot-name">{house.name}</span>
          <span className="lot-detail">
            {house.owner} <span aria-hidden="true">·</span>{" "}
            <span className="lot-visit">Visitar ↗</span>
          </span>
        </>
      ) : (
        <>
          <span className="empty-lot-art" aria-hidden="true">
            <span>🌱</span>
            <span className="plot-sign">O teu cantinho?</span>
          </span>
          <span className="lot-name">Aqui cabe um sonho</span>
          <span className="available-label">
            <span /> Terreno disponível
          </span>
        </>
      )}
    </Link>
  );
}
