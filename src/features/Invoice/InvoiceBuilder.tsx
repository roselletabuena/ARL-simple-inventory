import InvoiceForm from "./components/InvoiceForm";
import { Box } from "@mui/material";

const InvoiceBuilder = () => {
  return (
    <Box
      sx={{ padding: 2, maxWidth: 900, margin: "auto", background: "white" }}
    >
      <InvoiceForm />
    </Box>
  );
};

export default InvoiceBuilder;
