import { Item } from "../types/invoiceTypes";

export const calculateAmount = (quantity: number, unit_price: number) => {
  return quantity * unit_price;
};

export const calculateTotal = (items: Item[]) => {
  return items.reduce((sum, item) => sum + (item.amount || 0), 0);
};
