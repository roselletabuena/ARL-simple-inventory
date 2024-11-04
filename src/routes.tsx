import Root from "./pages/Root";
import ErrorPage from "./pages/ErrorPage";
import { createBrowserRouter } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import ProductsPage from "./pages/ProductsPage";
import InvoiceBuilderPage from "./pages/InvoiceBuilderPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "",
        element: <Dashboard />,
      },
      {
        path: "/invoice_builder",
        element: <InvoiceBuilderPage />,
      },
      {
        path: "/products",
        element: <ProductsPage />,
      },
    ],
  },
]);

export default router;
