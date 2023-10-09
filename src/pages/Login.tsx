import styled from 'styled-components';
import { Navigate, Outlet, Link } from 'react-router-dom';
import ThemeToggle from '../components/ThemeToggle';
import LoginToken from '../components/LoginToken';
import { AuthContext } from '../contexts/AuthProvider';
import React, { useContext } from 'react';
import Counter from '../components/Counter';

const Login = () => {
  const { currentUser } = useContext(AuthContext);
  return currentUser != null ? (
    <Navigate to="/" replace />
  ) : (
    <Container>
      <Link to={'/'}>Voltar</Link>
      <Outlet />
      <ThemeToggle />
      <LoginToken />
      <Counter />
    </Container>
  );
};

const Container = styled.div`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  & h1 {
    ${({ theme }) => theme['title']};
    color: ${({ theme }) => theme['menu']};
  }
`;

export default React.memo(Login);
