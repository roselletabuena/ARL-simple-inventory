export interface Unit {
  name: string;
  displayName: string;
  value: number;
}

export interface InvoiceConfig {
  name: string;
  phone_number: string;
  address: string;
  units: Unit[];
}
