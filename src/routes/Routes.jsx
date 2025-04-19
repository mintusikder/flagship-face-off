import React from "react";
import { createBrowserRouter } from "react-router";
import Home from "../pages/Home";
import Root from "../root/Root";
import Favorites from "../pages/Favorites";
import About from "../pages/About";
import ErrorPages from "../pages/ErrorPages";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPages></ErrorPages>,
    children: [
      {
        index: true,
        Component: Home,
        loader: () => fetch("phones.json"),
      },
      {
        path: "/favorites",
        Component: Favorites,
      },
      {
        path: "/about",
        Component: About,
      },
    ],
  },
]);
