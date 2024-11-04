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

import { useQuery } from "react-query";
import { getProducts } from "../../../api/products";
import { Products } from "../../../types/products";

export default function DataTable() {
  const {
    data: products,
    error,
    isLoading,
  } = useQuery<Products, Error>("products", getProducts);

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  if (products) {
    console.log(products);
  }

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
          {products?.map((product: Product) => (
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
