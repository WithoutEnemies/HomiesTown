import type { HouseColor } from "@/types/house";

const palettes: Record<
  HouseColor,
  { wall: string; roof: string; door: string }
> = {
  terracotta: { wall: "#f8e9d3", roof: "#c66b51", door: "#627c5f" },
  sage: { wall: "#e6ebd5", roof: "#6f8b6b", door: "#ae7752" },
  ochre: { wall: "#faedc9", roof: "#d4a052", door: "#7b8e86" },
};

export function HouseIllustration({
  color,
  lightsOn = false,
}: {
  color: HouseColor;
  lightsOn?: boolean;
}) {
  const palette = palettes[color];
  const windowColor = lightsOn ? "#ffe393" : "#b8d5d1";

  return (
    <svg
      viewBox="0 0 260 180"
      fill="none"
      aria-hidden="true"
      className="house-illustration"
    >
      <ellipse cx="131" cy="151" rx="92" ry="15" fill="#78915e" opacity=".14" />
      <path d="M127 149h23l10 25h-45z" fill="#e9d9b8" />
      <path d="M55 145V93h143v52" fill={palette.wall} />
      <path d="M55 94h143v9H55z" fill="#413f32" opacity=".08" />
      <path d="M165 48V25h16v41" fill={palette.roof} />
      <path d="M162 25h22v6h-22z" fill="#5b5547" />
      <path d="m42 96 57-56h54l58 56z" fill={palette.roof} />
      <path d="m99 40 55 56H42z" fill="#fff" opacity=".12" />
      <path
        d="m42 96 57-56 55 56m-55-56h54l58 56"
        stroke="#61513e"
        strokeOpacity=".18"
        strokeWidth="3"
        strokeLinejoin="round"
      />
      <path d="M66 94V77l33-33 34 33v68H66z" fill={palette.wall} />
      <path
        d="m58 80 41-41 42 41"
        stroke={palette.roof}
        strokeWidth="10"
        strokeLinejoin="round"
      />
      <circle
        cx="99"
        cy="77"
        r="10"
        fill={windowColor}
        stroke="#fff9ed"
        strokeWidth="4"
      />
      <path d="M99 68v18m-9-9h18" stroke="#fff9ed" strokeWidth="2" />
      <rect
        x="86"
        y="108"
        width="27"
        height="39"
        rx="13.5"
        fill={palette.door}
      />
      <circle cx="106" cy="130" r="2" fill="#f9df9e" />
      <rect
        x="151"
        y="111"
        width="27"
        height="24"
        rx="2"
        fill={windowColor}
        stroke="#fff9ed"
        strokeWidth="5"
      />
      <path d="M164.5 100v38m-16-15h33" stroke="#fff9ed" strokeWidth="3" />
      <rect x="146" y="135" width="37" height="5" rx="2" fill={palette.door} />
      <path
        d="M150 135v-6m7 6v-10m9 10v-7m8 7v-9"
        stroke="#6b885c"
        strokeWidth="4"
        strokeLinecap="round"
      />
      <path
        d="M48 148h158"
        stroke="#a5a17d"
        strokeWidth="4"
        strokeLinecap="round"
      />
      <path
        d="M34 145v-35"
        stroke="#927558"
        strokeWidth="6"
        strokeLinecap="round"
      />
      <circle cx="34" cy="101" r="19" fill="#8ca474" />
      <circle cx="24" cy="111" r="15" fill="#789360" />
      <circle cx="44" cy="111" r="16" fill="#90a877" />
      <path
        d="M217 149v-23"
        stroke="#927558"
        strokeWidth="4"
        strokeLinecap="round"
      />
      <circle cx="217" cy="117" r="15" fill="#789360" />
      <circle cx="225" cy="123" r="11" fill="#8fa875" />
      <path
        d="M62 151v-13m-8 7h16m121 6v-13m-8 7h16"
        stroke="#eee8d5"
        strokeWidth="4"
        strokeLinecap="round"
      />
      <path d="M74 151v-7m126 7v-7" stroke="#79945d" strokeWidth="2" />
      <circle cx="74" cy="142" r="3" fill="#d69b83" />
      <circle cx="200" cy="142" r="3" fill="#e0bb64" />
    </svg>
  );
}
