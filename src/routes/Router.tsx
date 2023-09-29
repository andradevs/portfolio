import { Routes, Route } from 'react-router-dom';
import Main from '../pages/Main';
import Login from '../pages/Login';
import SignUp from '../components/forms/SignUp';
import LoginForm from '../components/forms/Login';

import Analytics from '../pages/Analytics';
import PrivateRouter from './PrivateRouter';
import React from 'react';
// import GlobalSpiner from '../components/GlobalSpiner';

const Router = () => {
  //   const { currentUser } = useContext(AuthContext);
  //   const nav = useNavigation();

  //   const privateRouter = (path: string, rule: boolean) => {
  //     if (rule) {
  //       console.log('teste' + path);
  //       throw redirect(path);
  //     }
  //     return null;
  //   };

  //   const router = createBrowserRouter([
  //     {
  //       path: '/',
  //       element: <Main />,
  //     },
  //     {
  //       path: '/login',
  //       element: <Login />,
  //       loader: () => privateRouter('/', currentUser),
  //       children: [
  //         { path: '/login', element: <LoginForm /> },
  //         { path: '/login/signup', element: <SignUp /> },
  //       ],
  //     },
  //     {
  //       path: '/analytics',
  //       element: <Analytics />,
  //       loader: () => privateRouter('/login', currentUser == null),
  //     },
  //   ]);

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
