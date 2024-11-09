export interface Variety {
  description: string;
  price: number;
  quantity: number;
  unit: string;
}

export interface Product {
  id: string;
  description: string;
  name: string;
  productId: string;
  totalQuantity: number;
  varieties: Variety[];
}

export type TypeaheadProduct = {
  article: string;
  price: number;
};

export type FormatType = "full" | "typeahead";

export type Products = Product[];
