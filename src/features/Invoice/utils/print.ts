import { InvoiceData } from "../types/invoiceTypes";

export const handlePrint = (receipt: InvoiceData, name: string | undefined) => {
  const printWindow = window.open("", "_blank");
  if (printWindow) {
    printWindow.document.write(`
                <html>
                    <head>
                        <title>Receipt</title>
                        <style>
                            body {
                                width: 80mm;
                                font-family: Arial, sans-serif;
                            }
                            h2, p, table {
                                margin: 0;
                                padding: 0;
                            }
                            table {
                                width: 100%;
                                font-size: 14px;
                                border-collapse: collapse;
                            }
                            th, td {
                                padding: 5px;
                                text-align: left;
                            }
                            th {
                                font-weight: bold;
                            }
                            hr {
                                border: none;
                                border-top: 1px solid #000;
                                margin: 10px 0;
                            }
                            .total {
                                text-align: right;
                                font-size: 14px;
                                font-weight: bold;
                            }
                        </style>
                    </head>
                    <body onload="window.print(); window.close();">
                        <div>
                            <h2 style="text-align: center; margin-bottom: 2px">${name}</h2>
                            <p>Customer: ${receipt.customer_name}</p>
                            <p>Date: ${receipt.date}</p>
                            <p>Address: ${receipt.address}</p>
                            <hr />
                            <table>
                                <thead>
                                    <tr>
                                        <th>Qty</th>
                                        <th>Unit</th>
                                        <th>Item</th>
                                        <th>Unit Price</th>
                                        <th>Amount</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    ${receipt.items
                                      .map(
                                        (item) => `
                                        <tr>
                                            <td>${item.quantity}</td>
                                            <td>${item.unit}</td>
                                            <td>${item.articles}</td>
                                            <td>${item.unit_price.toFixed(
                                              2
                                            )}</td>
                                            <td>${item.amount.toFixed(2)}</td>
                                        </tr>
                                    `
                                      )
                                      .join("")}
                                </tbody>
                            </table>
                            <hr />
                            <p class="total">Total: ₱${receipt.total.toFixed(
                              2
                            )}</p>
                        </div>
                    </body>
                </html>
            `);
    printWindow.document.close();
  }
};
