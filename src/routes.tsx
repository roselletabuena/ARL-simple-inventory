import { handleFetchToken } from "./api/auth/tokenApp";
import { getProducts } from "./api/products";
import Root from "./pages/Root";
import ErrorPage from "./pages/ErrorPage";
import { createBrowserRouter } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import ProductsPage from "./pages/ProductsPage";

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
        path: "/products",
        loader: getProducts,
        element: <ProductsPage />,
      },
    ],
  },
]);

export default router;
