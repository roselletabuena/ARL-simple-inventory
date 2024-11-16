import { useEffect, useState } from "react";
import { ThemeProvider } from "@emotion/react";
import theme from "./theme";
import { RouterProvider } from "react-router-dom";
import "@aws-amplify/ui-react/styles.css";
import router from "./routes";
import { handleFetchToken } from "./api/auth/tokenApp";
import { Hub } from "aws-amplify/utils";

function App() {
  const [loadApp, setIsLoadApp] = useState(false);

  useEffect(() => {
    handleFetchToken();

    const hubListenerCancelToken = Hub.listen("auth", async (data) => {
      if (data.payload.event === "signedIn") {
        handleFetchToken();

        setIsLoadApp(true);
      }
      if (data.payload.event === "signedOut") {
        sessionStorage.removeItem("authToken");

        setIsLoadApp(false);
      }
    });

    return () => hubListenerCancelToken();
  }, []);

  return (
    <>
      <ThemeProvider theme={theme}>
        {loadApp ? <div>Loading...</div> : <RouterProvider router={router} />}
      </ThemeProvider>
    </>
  );
}

export default App;
