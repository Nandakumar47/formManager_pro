import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import {
  createBrowserRouter,
  Route,
  RouterProvider,
  createRoutesFromElements,
} from "react-router-dom";
import { AuthContextProvider } from "./contexts/authContext";
const root = ReactDOM.createRoot(document.getElementById("root"));
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route
      path="/*"
      element={
        <AuthContextProvider>
          <App />
        </AuthContextProvider>
      }
    ></Route>
  )
);
root.render(<RouterProvider router={router} />);
