import { useEffect } from "react";
import { ThemeProvider } from "@emotion/react";
import theme from "./theme";
import { RouterProvider } from "react-router-dom";
import "@aws-amplify/ui-react/styles.css";
import router from "./routes";
import { handleFetchToken } from "./api/auth/tokenApp";
import { Hub } from "aws-amplify/utils";

function App() {
  useEffect(() => {
    const hubListenerCancelToken = Hub.listen("auth", async (data) => {
      if (data.payload.event === "signedOut") {
        sessionStorage.removeItem("authToken");
      }
    });

    handleFetchToken();
    return () => hubListenerCancelToken();
  }, []);

  return (
    <>
      <ThemeProvider theme={theme}>
        <RouterProvider router={router} />
      </ThemeProvider>
    </>
  );
}

export default App;
