import { houses } from "@/data/houses";
import { plots } from "@/data/plots";

// Local data access lives here; pages do not need to know where it is stored.
export function getPlots() {
  return plots;
}

export function getHouse(id: string) {
  return houses.find((house) => house.id === id);
}

export function getPlotForHouse(houseId: string) {
  return plots.find(
    (plot) => plot.status === "occupied" && plot.houseId === houseId,
  );
}
