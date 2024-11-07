import React from "react";
import { useForm, useFieldArray, Controller } from "react-hook-form";
import AddIcon from "@mui/icons-material/Add";
import {
  Box,
  Grid,
  TextField,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Button,
  Paper,
  Select,
  MenuItem,
} from "@mui/material";
import RemoveIcon from "@mui/icons-material/Remove";
import { DangerButton } from "./styles/Button";
import { FormValues } from "./types/invoiceTypes";
import { calculateAmount, calculateTotal } from "./utils/calculate";
import CustomerFields from "./components/CustomerFields";

const InvoiceForm: React.FC = () => {
  const {
    control,
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm<FormValues>({
    defaultValues: {
      customer_name: "",
      date: "",
      address: "",
      items: [
        { quantity: 1, unit: "Each", articles: "", unit_price: 0, amount: 0 },
      ],
      total: 0,
    },
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: "items",
  });

  const onSubmit = (data: FormValues) => {
    console.log("Form Data:", data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <CustomerFields register={register} errors={errors} />

      <TableContainer component={Paper} sx={{ marginTop: 2 }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell align='center'>QTY</TableCell>
              <TableCell align='center'>UNIT</TableCell>
              <TableCell align='center'>ARTICLES</TableCell>
              <TableCell align='center'>Unit Price</TableCell>
              <TableCell align='center'>AMOUNT</TableCell>
              <TableCell align='center' width={1} />
            </TableRow>
          </TableHead>

          <TableBody>
            {fields.map((item, index) => (
              <TableRow key={item.id}>
                <TableCell align='center'>
                  <Controller
                    control={control}
                    name={`items.${index}.quantity`}
                    rules={{ required: "Quantity is required", min: 1 }}
                    render={({ field }) => (
                      <TextField
                        type='number'
                        placeholder='Qty'
                        {...field}
                        onChange={(e) => {
                          const quantity = Number(e.target.value);
                          const unit_price = watch(`items.${index}.unit_price`);
                          const amount = calculateAmount(quantity, unit_price);
                          setValue(`items.${index}.amount`, amount);
                          setValue("total", calculateTotal(watch("items")));
                          field.onChange(e);
                        }}
                        variant='outlined'
                        size='small'
                      />
                    )}
                  />
                </TableCell>
                <TableCell align='center'>
                  <Select
                    {...register(`items.${index}.unit`, {
                      required: "Unit is required",
                    })}
                    defaultValue='Each'
                    size='small'
                  >
                    <MenuItem value='Each'>Each</MenuItem>
                    <MenuItem value='Kg'>Kg</MenuItem>
                    <MenuItem value='Liter'>Liter</MenuItem>
                  </Select>
                </TableCell>
                <TableCell align='center'>
                  <TextField
                    {...register(`items.${index}.articles`, {
                      required: "Article description is required",
                    })}
                    placeholder='Articles'
                    variant='outlined'
                    size='small'
                  />
                </TableCell>
                <TableCell align='center'>
                  <Controller
                    control={control}
                    name={`items.${index}.unit_price`}
                    rules={{ required: "Unit price is required", min: 0 }}
                    render={({ field }) => (
                      <TextField
                        type='number'
                        placeholder='Unit Price'
                        {...field}
                        onChange={(e) => {
                          const unit_price = Number(e.target.value);
                          const quantity = watch(`items.${index}.quantity`);
                          const amount = calculateAmount(quantity, unit_price);
                          setValue(`items.${index}.amount`, amount);
                          setValue("total", calculateTotal(watch("items")));
                          field.onChange(e);
                        }}
                        variant='outlined'
                        size='small'
                      />
                    )}
                  />
                </TableCell>
                <TableCell>
                  <TextField
                    {...register(`items.${index}.amount`)}
                    placeholder='Amount'
                    value={(watch(`items.${index}.amount`) || 0).toFixed(2)}
                    variant='outlined'
                    size='small'
                    InputProps={{
                      readOnly: true,
                    }}
                  />
                </TableCell>
                <TableCell align='center'>
                  <DangerButton
                    onClick={() => remove(index)}
                    aria-label='Remove Item'
                  >
                    <RemoveIcon />
                  </DangerButton>
                </TableCell>
              </TableRow>
            ))}

            <TableRow>
              <TableCell colSpan={3}>
                <Button
                  variant='contained'
                  onClick={() =>
                    append({
                      quantity: 1,
                      unit: "Each",
                      articles: "",
                      unit_price: 0,
                      amount: 0,
                    })
                  }
                  aria-label='Add Item'
                >
                  <AddIcon /> Add Item
                </Button>
              </TableCell>
              <TableCell>
                <strong>Total</strong>
              </TableCell>
              <TableCell>
                <input
                  {...register("total")}
                  value={calculateTotal(watch("items")).toFixed(2)}
                  readOnly
                />
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
      <Box sx={{ display: "flex", justifyContent: "flex-end", gap: 2, pt: 2 }}>
        <Button variant='contained' type='button'>
          Reset Form
        </Button>
        <Button variant='contained' type='submit'>
          Submit
        </Button>
      </Box>
    </form>
  );
};

export default InvoiceForm;
