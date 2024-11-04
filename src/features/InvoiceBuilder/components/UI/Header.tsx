import React from "react";
import { Typography, Box } from "@mui/material";

const Header: React.FC = () => {
  return (
    <Box sx={{ textAlign: "center", marginBottom: 2 }}>
      <Typography variant='h6'>Company Name</Typography>
      <Typography variant='body2'>[Address]</Typography>
    </Box>
  );
};

export default Header;
