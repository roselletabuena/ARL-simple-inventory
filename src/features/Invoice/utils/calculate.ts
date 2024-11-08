import { Item } from "../types/invoiceTypes";

const units: { [key: string]: number } = {
  Each: 1,
  Kg: 12,
  Liter: 3,
};

export const calculateAmount = (
  quantity: number,
  unit: string,
  unit_price: number
) => {
  const unitFactor = units[unit];
  return quantity * unitFactor * unit_price;
};

export const calculateTotal = (items: Item[]) => {
  return items.reduce((sum, item) => sum + (item.amount ?? 0), 0);
};
