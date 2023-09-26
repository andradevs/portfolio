import styled from 'styled-components';
import { Outlet } from 'react-router-dom';

const Login = () => {
  return (
    <Container>
      <Outlet />
    </Container>
  );
};

const Container = styled.div`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  & > h1 {
    ${({ theme }) => theme['headline3']};
    color: ${({ theme }) => theme['onPrimary']};
  }
`;

export default Login;
