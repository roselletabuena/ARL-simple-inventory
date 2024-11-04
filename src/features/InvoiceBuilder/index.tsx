import { Box } from "@mui/material";
import InvoiceForm from "./components/Form/InvoiceForm";

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
    </Box>
  );
};

export default InvoiceBuilder;
