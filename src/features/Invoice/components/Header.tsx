import React from "react";
import { Typography, Box } from "@mui/material";

const Header: React.FC = () => {
  return (
    <Box sx={{ textAlign: "center", marginBottom: 2 }}>
      <Typography variant='h6'>ARL FOOD CONDIMENTS QUALITY</Typography>
      <Typography variant='body2'>
        Phase 7c, Bagong Silang Caloocan City
      </Typography>
      <Typography variant='body2'>VAT TIN: 000-000-000</Typography>
      <Typography variant='body2'>09684262982</Typography>
    </Box>
  );
};

export default Header;
