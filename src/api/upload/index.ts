import axios from "axios";

const ARL_ENDPOINT = import.meta.env.VITE_ARL_ENDPOINT + "/images";

export const postImage = async (imageFile: FormData): Promise<any> => {
  const headers = {
    Authorization: sessionStorage.getItem("authToken"),
  };

  try {
    const response = await axios.post(ARL_ENDPOINT, imageFile, { headers });

    return response.data;
  } catch (error) {
    console.error("Error posting image: ", error);
    throw error;
  }
};
