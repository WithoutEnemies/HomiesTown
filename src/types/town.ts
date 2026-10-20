export type Plot = {
  id: string;
  number: string;
  street: string;
} & (
  | { status: "available"; houseId?: never }
  | { status: "occupied"; houseId: string }
);
