import axios from "axios";
import { Products } from "../../types/products";

const ARL_ENDPOINT = import.meta.env.VITE_ARL_ENDPOINT + "/products";

export const getProducts = async (): Promise<Products> => {
  const headers = {
    Authorization: sessionStorage.getItem("authToken"),
    "Content-Type": "application/json",
  };

  try {
    const response = await axios.get<{ products: Products }>(ARL_ENDPOINT, {
      headers,
    });

    return response.data.products;
  } catch (error) {
    console.error("Error fetching data: ", error);
    throw error;
  }
};
