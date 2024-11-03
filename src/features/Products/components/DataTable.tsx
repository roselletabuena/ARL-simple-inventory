import { styled } from "@mui/material/styles"; // or
import { useLoaderData } from "react-router-dom";

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

export default function DataTable() {
  const products = useLoaderData() as Product[];

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
          {products.map((product: Product) => (
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
