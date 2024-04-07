import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import routes from "./routes/Routes";
import ContextProvider from "./providers/ContextProvider/ContextProvider";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ContextProvider>
    <RouterProvider router={routes} />
    </ContextProvider>
  </React.StrictMode>
);
