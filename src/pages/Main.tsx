import { styled } from 'styled-components';

import GlobalStyles from '../GlobalStyles';
import Navbar from '../components/Navbar';

const Main = () => {
  return (
    <Wrapper>
      <Navbar />
      <div>Main</div>
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
