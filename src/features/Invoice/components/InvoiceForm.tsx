import React from "react";
import { useForm } from "react-hook-form";
import { Box, Button } from "@mui/material";
import { InvoiceData } from "../types/invoiceTypes";
import CustomerFields from "./CustomerFields";
import InvoiceTable from "./InvoiceTable";
import Header from "./Header";
import { handlePrint } from "../utils/print";
import { InvoiceFormProps } from "../types/invoiceTypes";

const InvoiceForm: React.FC<InvoiceFormProps> = ({ products }) => {
  const {
    control,
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm<InvoiceData>({
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

  const onSubmit = (data: InvoiceData) => {
    handlePrint(data);
  };

  return (
    <>
      <Header />

      <form onSubmit={handleSubmit(onSubmit)}>
        <CustomerFields register={register} errors={errors} />

        <InvoiceTable
          register={register}
          control={control}
          setValue={setValue}
          watch={watch}
          errors={errors}
          products={products}
        />

        <Box
          sx={{ display: "flex", justifyContent: "flex-end", gap: 2, pt: 2 }}
        >
          <Button variant='contained' type='button'>
            Reset Form
          </Button>
          <Button variant='contained' type='submit'>
            Submit
          </Button>
        </Box>
      </form>
    </>
  );
};

export default InvoiceForm;
