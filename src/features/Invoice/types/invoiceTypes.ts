import { UseFormReturn } from "react-hook-form";

export type Item = {
  quantity: number;
  unit: string;
  articles: string;
  unit_price: number;
  amount: number;
};

export type InvoiceData = {
  customer_name: string;
  date: string;
  address: string;
  items: Item[];
  total: number;
};

export interface InvoiceTableProps {
  register: UseFormReturn<InvoiceData>["register"];
  control: UseFormReturn<InvoiceData>["control"];
  setValue: UseFormReturn<InvoiceData>["setValue"];
  watch: UseFormReturn<InvoiceData>["watch"];
}
