import { createBrowserRouter } from "react-router-dom";
import { Home } from "../pages/Home";
import { Form } from "../pages/Form";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/form",
    element: <Form />,
  },
]);
