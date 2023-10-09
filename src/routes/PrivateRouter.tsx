import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useAuthContext } from '../contexts/AuthProvider';
import GlobalSpiner from '../components/GlobalSpiner';

const PrivateRouter = () => {
  const { loading, signed } = useAuthContext();
  return loading ? <GlobalSpiner /> : signed ? <Outlet /> : <Navigate to="/login" />;
};

export default React.memo(PrivateRouter);
