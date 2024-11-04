import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { Amplify } from "aws-amplify";
import outputs from "../amplify_outputs.json";
import { Authenticator } from "@aws-amplify/ui-react";
import { QueryClient, QueryClientProvider } from "react-query";
import "@aws-amplify/ui-react/styles.css";

const queryClient = new QueryClient();
Amplify.configure(outputs);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Authenticator hideSignUp>
      <QueryClientProvider client={queryClient}>
        <App />
      </QueryClientProvider>
    </Authenticator>
  </React.StrictMode>
);
