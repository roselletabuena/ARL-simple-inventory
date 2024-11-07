import InvoiceForm from "../features/Invoice/InvoiceForm";
import { Box } from "@mui/material";

const InvoiceBuilderPage = () => {
  return (
    <Box
      sx={{ padding: 2, maxWidth: 900, margin: "auto", background: "white" }}
    >
      <InvoiceForm />
    </Box>
  );
};

export default InvoiceBuilderPage;
