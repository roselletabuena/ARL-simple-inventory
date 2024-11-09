import { styled } from "@mui/material/styles";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Box,
} from "@mui/material";
import { Product } from "../../../types/products";
import CollapsibleRow from "./CollapsibleRow";
import useProducts from "../../../hooks/useProducts";

export default function DataTable() {
  const { data: products, error, isLoading } = useProducts("full");

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <Container>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell width={10} />
            <TableCell>ID</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Description</TableCell>
            <TableCell>Quantity</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {(products as Product[])?.map((product: Product) => (
            <CollapsibleRow key={product.productId} product={product} />
          ))}
        </TableBody>
      </Table>
    </Container>
  );
}

const Container = styled(Box)(() => ({
  overflowX: "auto",
  margin: "auto",
}));
