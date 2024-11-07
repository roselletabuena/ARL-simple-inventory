import React from "react";
import { Box, Button } from "@mui/material";
import Header from "../UI/Header";
import CustomerDetails from "./CustomerDetails";
import InvoiceItemsTable from "../Table/InvoiceItemsTable";
import { useForm, SubmitHandler } from "react-hook-form";

const InvoiceForm: React.FC = () => {
  const printReceipt = () => {
    const printWindow = window.open("", "_blank");
    if (printWindow) {
      printWindow.document.write(`
        <html>
          <head>
            <title>Receipt</title>
            <style>
              @media print {
                body {
                  width: 300px; /* Set the width for receipt */
                  // margin: 0 auto;
                  font-family: Arial, sans-serif;
                  font-size: 14px;
                }
                h1 {
                  font-size: 16px;
                  text-align: center;
                  margin: 0;
                }
                table {
                  width: 100%;
                  border-collapse: collapse;
                  margin-top: 10px;
                }
                th, td {
                  border: 1px solid #000;
                  padding: 5px;
                  text-align: left;
                }
                th {
                  background-color: #f2f2f2;
                }
                .footer {
                  text-align: center;
                  margin-top: 20px;
                }
              }
            </style>
          </head>
          <body>
            <h1>Receipt</h1>
            <table>
              <thead>
                <tr>
                  <th>Item</th>
                  <th>Qty</th>
                  <th>Price</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Item 1</td>
                  <td>1</td>
                  <td>$10.00</td>
                </tr>
                <tr>
                  <td>Item 2</td>
                  <td>2</td>
                  <td>$5.00</td>
                </tr>
              </tbody>
            </table>
            <div class="footer">
              <p>Thank you for your purchase!</p>
            </div>
          </body>
        </html>
      `);
      printWindow.document.close();
      printWindow.print();
    }
  };
  return (
    <Box sx={{ padding: 2, maxWidth: 900, margin: "auto" }}>
      <Header />
      <CustomerDetails />

      <InvoiceItemsTable />

      <Box
        sx={{
          align: "right",
          display: "flex",
          flexDirection: "row-reverse",
          pt: 5,
        }}
      >
        <Button variant='outlined' onClick={printReceipt}>
          PRINT RECEIPT
        </Button>
      </Box>
    </Box>
  );
};

export default InvoiceForm;
