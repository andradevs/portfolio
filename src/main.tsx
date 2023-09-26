import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './main.css';

import Main from './pages/Main';
import { ThemeProvider } from './contexts/ThemeProvider';
import Login from './pages/Login';
import LoginForm from './components/forms/Login';
import SignIn from './components/forms/SignIn';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
    children: [],
  },
  {
    path: '/login',
    element: <Login />,
    children: [
      { path: '/login', element: <LoginForm /> },
      { path: '/login/signin', element: <SignIn /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider>
      <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>,
);
