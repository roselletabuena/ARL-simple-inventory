import React from "react";
import { TableCell, TableRow, Typography } from "@mui/material";
import { PlainTextField } from "../../styles/PlainTextField";
import AddIcon from "@mui/icons-material/Add";
import { PrimaryButton, DangerButton } from "../../styles/Button";
import PlainSelect from "../Inputs/SelectInput";
import RemoveIcon from "@mui/icons-material/Remove";
import { InvoiceItem } from "../../types";

const ItemRow: React.FC = () => {
  const itemsAttr = {
    qty: 0,
    unitValue: 1,
    unitName: "Each",
    article: "",
    unitPrice: 0,
    amount: 0,
  };

  const [items, setItems] = React.useState<InvoiceItem[]>([itemsAttr]);

  React.useEffect(() => {
    console.log(items);
  }, [items]);

  const addRow = () => {
    setItems([...items, itemsAttr]);
  };

  const removeRow = (rowIndex: number) => {
    const newItems = items.filter((_, index) => index !== rowIndex);

    setItems(newItems);
  };

  const handleTextInputChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    rowIndex: number,
    key: string
  ) => {
    const value =
      key === "qty" || key === "unitPrice"
        ? parseFloat(event.target.value)
        : event.target.value;

    const newItems = items.map((item, index) => {
      if (index === rowIndex) {
        const updatedItem = { ...item, [key]: value };

        if (key === "qty" || key === "unitPrice") {
          const total =
            updatedItem.unitValue * updatedItem.qty * updatedItem.unitPrice;
          updatedItem.amount = isNaN(total) ? 0 : total;
        }

        return updatedItem;
      }
      return item;
    });

    setItems(newItems);
  };

  const handleSelectOnChange = (selectValue: string, rowIndex: number) => {
    const [multiplier, unitLabel] = selectValue.split("_");
    const newItems = items.map((item, index) => {
      if (index === rowIndex) {
        const unitMultiplier = parseInt(multiplier);

        const newQuantity = item.qty * unitMultiplier;
        const newAmount = newQuantity * item.unitPrice;

        const updatedItem = {
          ...item,
          unitValue: unitMultiplier,
          unitName: unitLabel,
          amount: isNaN(newAmount) ? 0 : newAmount,
        };

        return updatedItem;
      }
      return item;
    });

    setItems(newItems);
  };

  return (
    <>
      {items.map((item, index) => (
        <TableRow key={index}>
          <TableCell align='center'>
            {index == 0 ? (
              <PrimaryButton onClick={addRow} aria-label='Add Item'>
                <AddIcon />
              </PrimaryButton>
            ) : (
              <DangerButton
                onClick={removeRow.bind(null, index)}
                aria-label='Remove Item'
              >
                <RemoveIcon />
              </DangerButton>
            )}
          </TableCell>
          <TableCell align='center'>
            <PlainTextField
              width='50px'
              id={`qty_${index}`}
              onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                handleTextInputChange(event, index, "qty")
              }
              variant='outlined'
            />
          </TableCell>
          <TableCell align='center'>
            <PlainSelect
              handleOnChange={(value: string) =>
                handleSelectOnChange(value, index)
              }
            />
          </TableCell>
          <TableCell align='center'>
            <PlainTextField
              id={`article_${index}`}
              width='300px'
              onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                handleTextInputChange(event, index, "article")
              }
              variant='outlined'
            />
          </TableCell>
          <TableCell align='right'>
            <PlainTextField
              id={`price_${index}`}
              onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                handleTextInputChange(event, index, "unitPrice")
              }
              width='100px'
              variant='outlined'
            />
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
    </>
  );
};

export default ItemRow;
