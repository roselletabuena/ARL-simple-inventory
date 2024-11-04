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
import { InvoiceItem } from "../../types";
import ItemRow from "./ItemRow";

const invoiceData: InvoiceItem[] = [
  {
    qty: 1,
    unit: "pcs",
    article: "TABLE TOP 140x160cm",
    unitPrice: 1120,
    amount: 1120,
  },
];

function ccyFormat(num: number) {
  return `${num.toFixed(2)}`;
}

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
          <ItemRow invoiceData={invoiceData} />
          <TableRow>
            <TableCell colSpan={3} rowSpan={3} />
            <TableCell>Total</TableCell>
            <TableCell align='right'>{ccyFormat(50)}</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default InvoiceItemsTable;
