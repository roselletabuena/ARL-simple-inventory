import React from "react";
import { useForm } from "react-hook-form";
import { Box, Button } from "@mui/material";
import { InvoiceData } from "../types/invoiceTypes";
import CustomerFields from "./CustomerFields";
import InvoiceTable from "./InvoiceTable";
import Header from "./Header";
import { handlePrint } from "../utils/print";
import { InvoiceFormProps } from "../types/invoiceTypes";
import { TypeaheadProduct } from "../../../types/products";
import { useInvoiceContext } from "../hooks/InvoiceContext";

const InvoiceForm: React.FC<InvoiceFormProps> = ({ products }) => {
  const { invoiceConfig } = useInvoiceContext();

  const {
    control,
    register,
    handleSubmit,
    watch,
    reset,
    setValue,
    formState: { errors },
  } = useForm<InvoiceData>({
    defaultValues: {
      customer_name: "",
      date: new Date().toISOString().split("T")[0],
      address: "",
      items: [
        { quantity: 1, unit: "ea", articles: "", unit_price: 0, amount: 0 },
      ],
      total: 0,
    },
  });

  const onSubmit = (data: InvoiceData) => {
    handlePrint(data, invoiceConfig?.name);
  };

  const onReset = () => {
    reset();
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
          products={products as TypeaheadProduct[]}
        />

        <Box
          sx={{ display: "flex", justifyContent: "flex-end", gap: 2, pt: 2 }}
        >
          <Button variant='contained' type='button' onClick={onReset}>
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
