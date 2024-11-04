import React from "react";
import { TableCell, TableRow, Typography } from "@mui/material";
import { PlainTextField } from "../../styles/PlainTextField";
import AddIcon from "@mui/icons-material/Add";
import { PrimaryButton } from "../../styles/PrimaryButton";
import PlainSelect from "../Inputs/SelectInput";
import { ItemRowProps } from "../../types";

const ItemRow: React.FC<ItemRowProps> = ({ invoiceData }) => {
  const addRow = () => {
    console.log("add");
  };

  return (
    <>
      {invoiceData.map((item, index) => (
        <TableRow key={index}>
          <TableCell align='center'>
            <PrimaryButton onClick={addRow} aria-label='Add Item'>
              <AddIcon />
            </PrimaryButton>
          </TableCell>
          <TableCell align='center'>
            <PlainTextField width='50px' variant='outlined' />
          </TableCell>
          <TableCell align='center'>
            <PlainSelect />
          </TableCell>
          <TableCell align='center'>
            <PlainTextField width='300px' variant='outlined' />
          </TableCell>
          <TableCell align='right'>
            <PlainTextField width='100px' variant='outlined' />
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
