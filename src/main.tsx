import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { RootLayout } from './layout/RootLayout.tsx';
import App from './App.tsx';
import { NextUIProvider } from '@nextui-org/react';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <>Ooops, eroare</>,
    children: [
      {
        index: true,
        element: <App />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <NextUIProvider>
      <RouterProvider router={router} />
    </NextUIProvider>
  </React.StrictMode>
);
