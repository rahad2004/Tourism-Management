import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router";
import Routes from "./Routes/Routes.jsx";
import AuthContextProvider from "./Contex/AuthContextProvider.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthContextProvider>
      <RouterProvider router={Routes}></RouterProvider>
    </AuthContextProvider>
  </StrictMode>
);
