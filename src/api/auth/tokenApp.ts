import { fetchAuthSession } from "aws-amplify/auth";

export const handleFetchToken = async () => {
  try {
    const session = await fetchAuthSession();

    if (!sessionStorage.getItem("authToken")) {
      sessionStorage.setItem(
        "authToken",
        session.tokens?.idToken?.toString() || ""
      );
    }

    return {
      email: session.tokens?.idToken?.payload.email,
    };
  } catch (error) {
    console.error("Error fetching token:", error);
  }
};
