import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  Paper,
} from "@mui/material";
import { InvoiceItem } from "../types";

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
            <TableCell align='center'>QTY</TableCell>
            <TableCell align='center'>UNIT</TableCell>
            <TableCell align='center'>ARTICLES</TableCell>
            <TableCell align='center'>Unit Price</TableCell>
            <TableCell align='center'>AMOUNT</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {invoiceData.map((item, index) => (
            <TableRow key={index}>
              <TableCell align='center'>{item.qty}</TableCell>
              <TableCell align='center'>{item.unit}</TableCell>
              <TableCell align='left'>
                <Typography variant='body2' component='span'>
                  {item.article}
                </Typography>
              </TableCell>
              <TableCell align='right'>
                <Typography variant='body2' component='span'>
                  {item.unitPrice.toFixed(2)}
                </Typography>
              </TableCell>
              <TableCell align='right'>
                <Typography
                  variant='body2'
                  component='span'
                  sx={{ fontStyle: "italic", fontWeight: "bold" }}
                >
                  {item.amount.toFixed(2)}
                </Typography>
              </TableCell>
            </TableRow>
          ))}

          <TableRow>
            <TableCell colSpan={3} rowSpan={3} />
            <TableCell>Total</TableCell>
            <TableCell align='right'>{ccyFormat(50)}</TableCell>
          </TableRow>

          {/* <TableRow>
            <TableCell>Total</TableCell>
            <TableCell align='right'>{ccyFormat(85)}</TableCell>
          </TableRow> */}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default InvoiceItemsTable;
