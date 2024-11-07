import React from "react";
import { useForm } from "react-hook-form";
import { Box, Button } from "@mui/material";
import { FormValues } from "./types/invoiceTypes";
import CustomerFields from "./components/CustomerFields";
import InvoiceTable from "./components/InvoiceTable";
import Header from "./components/Header";

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

  const onSubmit = (data: FormValues) => {
    console.log("Form Data:", data);
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
