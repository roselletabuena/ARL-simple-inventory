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

export interface InvoiceItemProps {
  fields: any;
  register: any;
  control: any;
  setValue: any;
  watch: any;
  remove: any;
  updateAmount: (index: number, quantity: number, unit_price: number) => void;
}
