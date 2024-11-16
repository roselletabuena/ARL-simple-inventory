import axios from "axios";

const ARL_ENDPOINT = import.meta.env.VITE_ARL_ENDPOINT;

const headers = {
  Authorization: sessionStorage.getItem("authToken"),
  "Content-Type": "application/json",
};

console.log(sessionStorage.getItem("authToken"));

export const getProducts = async (): Promise<any> => {
  try {
    const response = await axios.get<any>(ARL_ENDPOINT, { headers });
    return response.data.products;
  } catch (error) {
    console.error("Error fetching data: ", error);
    throw error;
  }
};
