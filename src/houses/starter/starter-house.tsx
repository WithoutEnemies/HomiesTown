"use client";

import { useState } from "react";
import { HouseIllustration } from "@/components/ui/house-illustration";
import type { HouseProps } from "@/types/house";

function Radio({
  isPlaying,
  onToggle,
}: {
  isPlaying: boolean;
  onToggle: () => void;
}) {
  return (
    <button
      type="button"
      className="room-object radio-object"
      onClick={onToggle}
      aria-pressed={isPlaying}
    >
      <span className="radio-drawing" aria-hidden="true">
        <span className={isPlaying ? "record record-playing" : "record"} />♫
      </span>
      <span>{isPlaying ? "Desligar o rádio" : "Ligar o rádio"}</span>
      <span className="object-hint">
        {isPlaying ? "♪ A tocar, na imaginação" : "Uma banda sonora imaginária"}
      </span>
    </button>
  );
}

export function StarterHouse({ house, plot }: HouseProps) {
  const [lightsOn, setLightsOn] = useState(false);
  const [radioOn, setRadioOn] = useState(false);

  return (
    <div className="starter-house">
      <div className={lightsOn ? "house-room room-lit" : "house-room"}>
        <div className="room-topline">
          <span>A sala de estar</span>
          <span>
            {plot.street}, {plot.number}
          </span>
        </div>
        <div className="room-scene">
          <span className="room-plant" aria-hidden="true">
            🪴
          </span>
          <div className="room-portrait">
            <HouseIllustration color={house.color} lightsOn={lightsOn} />
          </div>
          <span className="room-lamp" aria-hidden="true">
            💡
          </span>
        </div>
        <p className="room-greeting">Ainda bem que vieste.</p>
        <p className="room-caption">
          Puxa uma cadeira. Aqui, já estás em casa.
        </p>
        <div className="room-controls">
          <button
            type="button"
            className="room-object"
            onClick={() => setLightsOn(!lightsOn)}
            aria-pressed={lightsOn}
          >
            <span
              className={lightsOn ? "light-switch switch-on" : "light-switch"}
              aria-hidden="true"
            >
              <span />
            </span>
            <span>{lightsOn ? "Apagar a luz" : "Acender a luz"}</span>
            <span className="object-hint">Um toque muda o ambiente</span>
          </button>
          <Radio isPlaying={radioOn} onToggle={() => setRadioOn(!radioOn)} />
        </div>
        <p className="room-status" role="status">
          Luz {lightsOn ? "acesa" : "apagada"} · Rádio{" "}
          {radioOn ? "ligado" : "desligado"}
        </p>
      </div>
      <aside className="house-note">
        <span className="eyebrow">A PRIMEIRA DE MUITAS</span>
        <h2>Uma casa, à tua maneira.</h2>
        <p>{house.description}</p>
        <div className="resident-line">
          <span
            className={`resident-avatar avatar-${house.color}`}
            aria-hidden="true"
          >
            {house.owner[0]}
          </span>
          <div>
            <strong>{house.owner}</strong>
            <span>Quem cuida deste cantinho</span>
          </div>
        </div>
        <div className="learning-note rounded-2xl border border-[#deded0] bg-[#f7f6ee] p-5 text-sm leading-7">
          <strong className="block text-[#435a46]">
            Pequenas interações, grandes começos.
          </strong>
          Esta casa de exemplo usa props, componentes e <code>useState</code>.
          Experimenta os botões e depois dá-lhe o teu toque.
        </div>
        <p className="session-note">
          As interações são locais e reiniciam ao sair da casa.
        </p>
      </aside>
    </div>
  );
}
