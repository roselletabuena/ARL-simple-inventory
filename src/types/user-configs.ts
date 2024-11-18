interface Unit {
  name: string;
  value: number;
}

export interface InvoiceConfig {
  name: string;
  phone_number: string;
  address: string;
  units: Unit[];
}
