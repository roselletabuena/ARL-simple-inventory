import { ThemeProvider } from "@emotion/react";
import theme from "./theme";
import { RouterProvider } from "react-router-dom";
import "@aws-amplify/ui-react/styles.css";
import router from "./routes";

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <RouterProvider router={router} />
      </ThemeProvider>
    </>
  );
}

export default App;
