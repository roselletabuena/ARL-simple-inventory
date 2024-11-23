import { InvoiceData } from "../types/invoiceTypes";
import { InvoiceConfig } from "../../../types/user-configs";
import logo from "../../../assets/logo.png";

export const handlePrint = (
  receipt: InvoiceData,
  invoiceConfig: InvoiceConfig
) => {
  const printWindow = window.open("", "_blank");
  if (printWindow) {
    printWindow.document.write(`
                <html>
                    <head>
                        <title>Receipt</title>
                        <style>

                            p {
                                font-size: 16px;
                            }
                            
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
                                font-size: 18px;
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
                                font-size: 25px;
                                font-weight: bold;
                            }
                        </style>
                    </head>
                    <body onload="window.print(); window.close();">
                        <div>
                        
                            <div style='text-align: center; margin-bottom: 10px;  filter: grayscale(100%);'>
                                <img src='${logo}' style='width: 80px; display: block; margin: auto;'/> 
                            </div>

                            <div style='text-align: "center"; margin-bottom: 20px;'>

                                <h2 style="text-align: center; margin-bottom: 2px">${
                                  invoiceConfig.name
                                }</h2>
                                <p style="text-align: center">${
                                  invoiceConfig.address
                                }</p>
                                <p style="text-align: center">${
                                  invoiceConfig.phone_number
                                }</p>
                            </div>
                            <p>Customer: ${receipt.customer_name}</p>
                            <p>Date: ${receipt.date}</p>
                            <p>Address: ${receipt.address}</p>
                            <hr />
                            <table>
                                <thead>
                                    <tr>
                                        <th>Qty</th>
                                        <th>Item</th>
                                        <th>Price</th>
                                        <th>Amount</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    ${receipt.items
                                      .map(
                                        (item) => `
                                        <tr>
                                            <td>${item.quantity}(${
                                          item.unit
                                        })</td>
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
