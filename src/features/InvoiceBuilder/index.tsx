import { Box } from "@mui/material";
// import InvoiceForm from "./components/Form/InvoiceForm";
import SampleForm from "./components/Form/SampleForm";
import InvoiceForm from "../Invoice/InvoiceBuilder";

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

      {/* <SampleForm /> */}
    </Box>
  );
};

export default InvoiceBuilder;
