import { UseFormReturn } from "react-hook-form";

export type Item = {
  quantity: number;
  unit: string;
  articles: string;
  unit_price: number;
  amount: number;
};

export type FormValues = {
  customer_name: string;
  date: string;
  address: string;
  items: Item[];
  total: number;
};

export interface InvoiceTableProps {
  register: UseFormReturn<FormValues>["register"];
  control: UseFormReturn<FormValues>["control"];
  setValue: UseFormReturn<FormValues>["setValue"];
  watch: UseFormReturn<FormValues>["watch"];
}
