import DataTable from "./components/DataTable";
import { Button, Box, Typography, TableContainer, Paper } from "@mui/material";

const Products = () => {
  return (
    <Box
      sx={{
        display: "flex",
        width: "100%",
        flexDirection: "column",
      }}
    >
      <TableContainer component={Paper} sx={{ p: 5 }}>
        <Box sx={{ display: "flex", justifyContent: "space-between", mb: 2 }}>
          <Typography variant='h5' component='h1'>
            Products
          </Typography>
          <Button variant='contained'>Add Products</Button>
        </Box>
        <Box sx={{ justifyContent: "flex-end", mb: 2 }}>
          <DataTable />
        </Box>
      </TableContainer>
    </Box>
  );
};

export default Products;
