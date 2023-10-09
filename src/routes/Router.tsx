import { Routes, Route } from 'react-router-dom';
import Main from '../pages/Main';
import Login from '../pages/Login';
import SignUp from '../components/forms/SignUp';
import LoginForm from '../components/forms/Login';

import Analytics from '../pages/Analytics';
import PrivateRouter from './PrivateRouter';
import React from 'react';

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/login" element={<Login />}>
        <Route path="" element={<LoginForm />} />
        <Route path="signup" element={<SignUp />} />
      </Route>
      <Route path="/analytics" element={<PrivateRouter />}>
        <Route path="" element={<Analytics />} />
      </Route>
    </Routes>
  );
};

export default React.memo(Router);
