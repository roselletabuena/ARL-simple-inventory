import { Box, Button } from "@mui/material";
import InvoiceForm from "./components/InvoiceForm";

const InvoiceBuilder = () => {
  return (
    <Box
      sx={{
        backgroundColor: "white",
        height: "100%",
        width: "90%",
        p: 3,
        marginX: "auto",
        boxShadow: 1,
      }}
    >
      <InvoiceForm />

      <Button>PRINT INVOICE</Button>
    </Box>
  );
};

export default InvoiceBuilder;
