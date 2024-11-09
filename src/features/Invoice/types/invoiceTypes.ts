import { UseFormReturn } from "react-hook-form";
import { TypeaheadProduct } from "../../../types/products";

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
  errors: UseFormReturn<InvoiceData>["formState"]["errors"];
  products: TypeaheadProduct[];
}

export type CustomerFieldsProps = {
  register: UseFormReturn<InvoiceData>["register"];
  errors: UseFormReturn<InvoiceData>["formState"]["errors"];
};

export type InvoiceFormProps = {
  products: any;
};
