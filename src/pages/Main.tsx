import { styled } from 'styled-components';

import GlobalStyles from '../GlobalStyles';
import Navbar from '../components/Navbar';
import Bio from '../components/Bio';

const Main = () => {
  return (
    <Wrapper>
      <Navbar />
      <Bio />
      <GlobalStyles />
    </Wrapper>
  );
};

export default Main;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  align-items: center;
  min-height: 100vh;
  background-color: ${(props) => props.theme['primary']};
`;
