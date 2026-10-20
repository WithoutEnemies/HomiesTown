import { PlotCard } from "@/features/town/plot-card";
import type { Plot } from "@/types/town";

export function TownMap({ plots }: { plots: Plot[] }) {
  return (
    <section id="cidade" className="map-panel" aria-labelledby="map-title">
      <div className="map-toolbar">
        <div>
          <span className="eyebrow">BAIRRO 01</span>
          <h2 id="map-title">Vila das Flores</h2>
        </div>
        <span className="map-weather">
          <span aria-hidden="true">☀</span> Um bom dia para visitar
        </span>
      </div>
      <div className="town-map">
        <div className="map-topline">
          <span>
            <span className="status-dot" /> A cidade está a crescer
          </span>
          <span className="compass" aria-hidden="true">
            N ↑
          </span>
        </div>
        <div className="town-grid">
          {plots.map((plot, index) => (
            <PlotCard key={plot.id} plot={plot} index={index} />
          ))}
          {Array.from(
            { length: Math.max(0, Math.ceil(plots.length / 3) - 1) },
            (_, index) => (
              <div
                key={index}
                className="town-road"
                style={{ gridRow: index * 2 + 2 }}
                aria-hidden="true"
              >
                <span>Rua das Flores</span>
                <span className="road-flower">✿</span>
                <span>Rua da Amizade</span>
              </div>
            ),
          )}
        </div>
        <div className="map-bottomline">
          <span aria-hidden="true">
            ♧ <span>Crescemos juntos, devagarinho.</span>
          </span>
          <span className="map-scale" aria-hidden="true">
            └────┘
          </span>
        </div>
      </div>
      <div className="map-legend">
        <span>
          <i className="legend-home" /> Casa habitada
        </span>
        <span>
          <i className="legend-available" /> Espaço para ti
        </span>
        <span className="map-hint">
          Escolhe uma casa e entra <span aria-hidden="true">↗</span>
        </span>
      </div>
    </section>
  );
}
