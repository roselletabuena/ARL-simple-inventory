import { Box, Grid, TextField } from "@mui/material";
import React from "react";
import { CustomerFieldsProps } from "../types/invoiceTypes";

const CustomerFields: React.FC<CustomerFieldsProps> = ({
  register,
  errors,
}) => {
  return (
    <Box>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <TextField
            label='Cust. Name'
            variant='standard'
            fullWidth
            size='small'
            {...register("customer_name", {
              required: "Customer name is required",
            })}
          />

          {errors.customer_name && <span>{errors.customer_name.message}</span>}
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            label='Date'
            type='date'
            variant='standard'
            fullWidth
            size='small'
            {...register("date", { required: "Date is required" })}
            InputLabelProps={{ shrink: true }}
          />
          {errors.date && <span>{errors.date.message}</span>}
        </Grid>
        <Grid item xs={12}>
          <TextField
            label='Address'
            variant='standard'
            fullWidth
            size='small'
            multiline
            rows={2}
            {...register("address", { required: "Address is required" })}
          />
          {errors.address && <span>{errors.address.message}</span>}
        </Grid>
      </Grid>
    </Box>
  );
};

export default CustomerFields;
