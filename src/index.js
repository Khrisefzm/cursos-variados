import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Home from "./Views/Home.jsx";
import reportWebVitals from "./reportWebVitals.js";
import { Category } from "./Views/Category.jsx";
import { Products } from "./Views/Products.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/categorias/:id",
    element: <Category />,
  },
  {
    path: "/cursos",
    element: <Products />,
  },
  {
    path: "/cursos/:id",
    element: <h1>Productos por id</h1>,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
