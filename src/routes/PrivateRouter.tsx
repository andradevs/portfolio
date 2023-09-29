import React, { useContext } from 'react';
import { AuthContext } from '../contexts/AuthProvider';
import { Navigate, Outlet } from 'react-router-dom';

const PrivateRouter = () => {
  const { currentUser } = useContext(AuthContext);
  console.log(currentUser, 'aaaa');
  return currentUser ? <Outlet /> : <Navigate to="/login" replace />;
};

export default React.memo(PrivateRouter);
