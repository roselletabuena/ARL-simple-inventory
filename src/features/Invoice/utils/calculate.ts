import { Item } from "../types/invoiceTypes";
import { Unit } from "../../../types/user-configs";

const units: { [key: string]: number } = {
  ea: 1,
  Kg: 12,
  Liter: 3,
};

export const computeByUnit = (_units: Unit[]) => {
  return (quantity: number, unit: string, unit_price: number) => {
    const unitFactor = _units.reduce(
      (acc, item) => (item.name === unit ? item.value : acc),
      1
    );
    return quantity * unitFactor * unit_price;
  };
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
