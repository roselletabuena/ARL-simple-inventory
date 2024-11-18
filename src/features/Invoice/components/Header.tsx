import React from "react";
import { Typography, Box } from "@mui/material";
import { useInvoiceContext } from "../hooks/InvoiceContext";

const Header: React.FC = () => {
  const { invoiceConfig: header } = useInvoiceContext();

  return (
    <Box sx={{ textAlign: "center", marginBottom: 2 }}>
      <Typography variant='h6'>{header?.name}</Typography>
      <Typography variant='body2'>{header?.address}</Typography>
      <Typography variant='body2'>VAT TIN: 000-000-000</Typography>
      <Typography variant='body2'>{header?.phone_number}</Typography>
    </Box>
  );
};

export default Header;
