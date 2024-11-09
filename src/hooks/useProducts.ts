import { useQuery } from "react-query";
import { getProducts } from "../api/products";
import {
  Product,
  Products,
  TypeaheadProduct,
  FormatType,
} from "../types/products";

const useProducts = (format: FormatType = "full") => {
  return useQuery<Products | TypeaheadProduct[], Error>(
    ["products", format],
    () => getProducts(),
    {
      select: (data) => {
        if (format === "typeahead" && Array.isArray(data)) {
          return (data as Products).flatMap((product: Product) =>
            product.varieties.map((variety) => ({
              article: `${product.name} (${variety.unit})`,
              price: variety.price,
            }))
          ) as TypeaheadProduct[];
        }
        return data as Products;
      },
    }
  );
};

export default useProducts;
