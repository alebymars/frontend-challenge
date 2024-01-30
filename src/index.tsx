import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import ErrorPage from './screens/ErrorPage';
import FavoriteCats from './screens/FavoriteCats';
import { MainLayout } from './layout/MainLayout';
import AllCats from './screens/AllCats';

const router = createBrowserRouter([
  {
    path: "/frontend-challenge",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "favorite",
        element: <FavoriteCats />
      },
      {
        path: "all",
        element: <AllCats />
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
