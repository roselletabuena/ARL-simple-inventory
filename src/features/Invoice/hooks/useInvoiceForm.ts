// src/hooks/useInvoiceForm.ts
import { useForm, useFieldArray } from "react-hook-form";
import { useState } from "react";
import { Item, FormValues } from "../types/invoiceTypes";
import { calculateAmount, calculateTotal } from "../utils/calculate";

export const useInvoiceForm = () => {
  const {
    control,
    register,
    handleSubmit,
    setValue,
    watch,
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

  const { fields, append, remove } = useFieldArray({ control, name: "items" });
  const [total, setTotal] = useState(0);

  const updateAmount = (
    index: number,
    quantity: number,
    unit_price: number
  ) => {
    const amount = calculateAmount(quantity, unit_price);
    setValue(`items.${index}.amount`, amount);
    setValue("total", calculateTotal(watch("items")));
  };

  const onSubmit = (data: FormValues) => {
    console.log("Form Data:", data);
  };

  return {
    control,
    register,
    handleSubmit,
    setValue,
    errors,
    fields,
    append,
    remove,
    updateAmount,
    total: calculateTotal(watch("items")),
    onSubmit,
  };
};
