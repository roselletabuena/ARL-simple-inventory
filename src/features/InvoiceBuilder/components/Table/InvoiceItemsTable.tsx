import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";
import ItemRow from "./ItemRow";

const InvoiceItemsTable: React.FC = () => {
  return (
    <TableContainer component={Paper} sx={{ marginTop: 2 }}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell align='center' width={1} />
            <TableCell align='center'>QTY</TableCell>
            <TableCell align='center'>UNIT</TableCell>
            <TableCell align='center'>ARTICLES</TableCell>
            <TableCell align='center'>Unit Price</TableCell>
            <TableCell align='center'>AMOUNT</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <ItemRow />
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default InvoiceItemsTable;
