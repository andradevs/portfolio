import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './main.css';

import Main from './pages/Main';
import { ThemeProvider } from './contexts/ThemeProvider';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider>
      <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>,
);
