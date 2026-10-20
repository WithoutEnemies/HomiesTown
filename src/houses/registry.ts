import type { ComponentType } from "react";
import { StarterHouse } from "@/houses/starter/starter-house";
import type { HouseProps } from "@/types/house";

// The initial neighbours reuse the example. Register your own component here.
export const houseRegistry: Record<string, ComponentType<HouseProps>> = {
  starter: StarterHouse,
  "recanto-verde": StarterHouse,
  "casa-do-sol": StarterHouse,
};
