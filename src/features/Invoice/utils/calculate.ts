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
  // Ensure that the unit exists in the units object
  const unitFactor = units[unit];
  if (unitFactor === undefined) {
    console.error(`Invalid unit: ${unit}`);
    return 0; // Return 0 or handle appropriately
  }

  // Ensure quantity and unit_price are valid numbers
  if (isNaN(quantity) || isNaN(unit_price)) {
    console.error(
      `Invalid quantity or unit_price: quantity=${quantity}, unit_price=${unit_price}`
    );
    return 0; // Return 0 or handle appropriately
  }

  console.log(unit, unitFactor);

  return quantity * unitFactor * unit_price;
};

export const calculateTotal = (items: Item[]) => {
  return items.reduce((sum, item) => sum + (item.amount ?? 0), 0);
};
