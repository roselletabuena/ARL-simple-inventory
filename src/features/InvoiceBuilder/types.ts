export interface InvoiceItem {
  qty: number;
  unitValue: number;
  unitName: string;
  article: string;
  unitPrice: number;
  amount: number;
}

export interface ItemRowProps {
  invoiceData: InvoiceItem[];
}
