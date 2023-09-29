import { styled } from 'styled-components';

import Navbar from '../components/Navbar';
import Bio from '../components/Bio';
import Skills from '../components/Skills';
import ThemeToggle from '../components/ThemeToggle';
import LoginToken from '../components/LoginToken';

const Main = () => {
  return (
    <Wrapper>
      <Container>
        <Navbar />
        <Bio />
        <Skills />
      </Container>
      <ThemeToggle />
      <LoginToken />
    </Wrapper>
  );
};

export default Main;

const Wrapper = styled.div`
  align-items: center;
  flex-direction: column;
  display: flex;
`;
const Container = styled.div`
  display: flex;
  max-width: 1440px;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
`;
