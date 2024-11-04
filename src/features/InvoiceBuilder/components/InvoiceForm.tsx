import React from "react";
import { Box } from "@mui/material";
import Header from "./Header";
import CustomerDetails from "./CustomerDetails";
import InvoiceItemsTable from "./InvoiceItemsTable";

const InvoiceForm: React.FC = () => {
  return (
    <Box sx={{ padding: 2, maxWidth: 900, margin: "auto" }}>
      <Header />
      <CustomerDetails />

      <InvoiceItemsTable />
    </Box>
  );
};

export default InvoiceForm;
