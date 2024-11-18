import InvoiceForm from "./components/InvoiceForm";
import { Box } from "@mui/material";
import useProducts from "../../hooks/useProducts";
import { TypeaheadProduct } from "../../types/products";
import { InvoiceProvider } from "./hooks/InvoiceContext";

const InvoiceBuilder = () => {
  const { data: products, error, isLoading } = useProducts("typeahead");

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <InvoiceProvider>
      <Box
        sx={{ padding: 2, maxWidth: 900, margin: "auto", background: "white" }}
      >
        <InvoiceForm products={products as TypeaheadProduct[]} />
      </Box>
    </InvoiceProvider>
  );
};

export default InvoiceBuilder;
