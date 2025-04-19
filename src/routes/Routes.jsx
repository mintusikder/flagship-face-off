import React from 'react';
import { createBrowserRouter } from 'react-router';
import Home from '../pages/Home';
import Root from '../root/Root';

export const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      errorElement : <p>Error 404</p>,
      children :[
        {
          index : true,
          Component : Home
        }
      ]
    },
  ]);