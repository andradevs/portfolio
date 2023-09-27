import styled from 'styled-components';
import { Outlet } from 'react-router-dom';
import ThemeToggle from '../components/ThemeToggle';

const Login = () => {
  return (
    <Container>
      <Outlet />
      <ThemeToggle />
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

export default Login;
