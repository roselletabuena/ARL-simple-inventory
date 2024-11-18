import { useQuery } from "react-query";
import axios from "axios";
import { InvoiceConfig } from "../../types/user-configs";

const ARL_ENDPOINT = import.meta.env.VITE_ARL_ENDPOINT + "/users/config";

export const getInvoiceConfig = async (): Promise<InvoiceConfig> => {
  const headers = {
    Authorization: sessionStorage.getItem("authToken"),
    "Content-Type": "application/json",
  };

  try {
    const response = await axios.get<{ invoice_config: InvoiceConfig }>(
      ARL_ENDPOINT,
      {
        headers,
      }
    );

    return response.data.invoice_config;
  } catch (error) {
    console.error("Error fetching data: ", error);
    throw error;
  }
};

export const useInvoiceConfig = () => {
  return useQuery<InvoiceConfig, Error>(["invoiceConfig"], getInvoiceConfig, {
    staleTime: 1000 * 60 * 5,
    refetchOnWindowFocus: false,
  });
};
