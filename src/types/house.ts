import type { Plot } from "@/types/town";

export type HouseColor = "terracotta" | "sage" | "ochre";

export interface House {
  id: string;
  name: string;
  owner: string;
  description: string;
  color: HouseColor;
}

// Every house receives the same information, but owns its own interactions.
export interface HouseProps {
  house: House;
  plot: Plot;
}
