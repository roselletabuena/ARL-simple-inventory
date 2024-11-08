import React from "react";

interface ReceiptProps {
  customer_name: string;
  date: string;
  address: string;
  items: {
    quantity: number;
    unit: string;
    articles: string;
    unit_price: number;
    amount: number;
  }[];
  total: number;
}

const Receipt: React.FC<ReceiptProps> = ({
  customer_name,
  date,
  address,
  items,
  total,
}) => {
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className='receipt' style={{ width: "80mm", padding: "10px" }}>
      <h2 style={{ textAlign: "center" }}>Receipt</h2>
      <div>
        <p>Customer: {customer_name}</p>
        <p>Date: {date}</p>
        <p>Address: {address}</p>
      </div>
      <hr />
      <table style={{ width: "100%", fontSize: "12px" }}>
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
          {items.map((item, index) => (
            <tr key={index}>
              <td>{item.quantity}</td>
              <td>{item.unit}</td>
              <td>{item.articles}</td>
              <td>{item.unit_price.toFixed(2)}</td>
              <td>{item.amount.toFixed(2)}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <hr />
      <div style={{ textAlign: "right", fontSize: "14px", fontWeight: "bold" }}>
        <p>Total: ₱{total.toFixed(2)}</p>
      </div>
      <button
        onClick={handlePrint}
        style={{ width: "100%", marginTop: "10px" }}
      >
        Print Receipt
      </button>
    </div>
  );
};

export default Receipt;
