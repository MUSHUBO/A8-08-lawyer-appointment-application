import React from 'react';
import {
    createBrowserRouter,
  } from "react-router";
import Root from '../pages/Root/Root';
import Error from '../pages/Error/Error';
import Home from '../pages/Home/Home';
import About from '../pages/About/About';
import LawyerDetails from '../pages/LawyerDetails/LawyerDetails';
import Booking from '../pages/Booking/Booking';
import Blogs from '../pages/Blogs/Blogs';

export const router = createBrowserRouter([
    {
      path: "/",
      Component: Root,
      // errorElement: <Error></Error>,
      children: [
        {
            index: true,
            path: '/',
            loader: ()=> fetch('/lawyersData.json'),
            Component: Home
        },
        {
            path: '/about',
            Component: About
        },
        {
          path: '/booking',
          loader: ()=> fetch('/lawyersData.json'),
          Component: Booking
        },
        {
          path: '/blogs',
          loader: ()=> fetch('/blogs.json'),
          Component: Blogs
        },
        {
          path: '/lawyerDetails/:id',
          loader: ()=> fetch('/lawyersData.json'),
          Component: LawyerDetails
        },
        {
          path: '/error',
          Component: Error
        }
      ]
    },
  ]);