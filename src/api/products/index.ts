import axios from "axios";

const ARL_ENDPOINT = import.meta.env.VITE_ARL_ENDPOINT;

const headers = {
  Authorization: sessionStorage.getItem("authToken"),
  "Content-Type": "application/json",
};

export const getProducts = async () => {
  try {
    const response = await axios.get(ARL_ENDPOINT, { headers });
    return response.data.products;
  } catch (error) {
    console.error("Error fetching data: ", error);
    throw error;
  }
};