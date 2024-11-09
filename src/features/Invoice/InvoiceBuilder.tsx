import InvoiceForm from "./components/InvoiceForm";
import { Box } from "@mui/material";
import useProducts from "../../hooks/useProducts";
import { TypeaheadProduct } from "../../types/products";

const InvoiceBuilder = () => {
  const { data: products, error, isLoading } = useProducts("typeahead");

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <Box
      sx={{ padding: 2, maxWidth: 900, margin: "auto", background: "white" }}
    >
      <InvoiceForm products={products as TypeaheadProduct[]} />
    </Box>
  );
};

export default InvoiceBuilder;
