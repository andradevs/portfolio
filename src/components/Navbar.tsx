import { styled } from 'styled-components';

const Navbar = () => {
  return (
    <Wrapper>
      <Icon onClick={() => console.log('HAHAHA')}>
        <span>ANDRADEVS.</span>
      </Icon>
      <NavItens>
        <li>
          <span>Home</span>
        </li>
        <li>
          <span>Projetos</span>
        </li>
        <li>
          <span>Blog</span>
        </li>
        <li>
          <span>Sobre</span>
        </li>
      </NavItens>
      <Contact>
        <button>LET'S TALK</button>
      </Contact>
    </Wrapper>
  );
};

export default Navbar;

const Wrapper = styled.nav`
  display: grid;
  grid-template-columns: 20% 1fr auto;
  width: 100%;
  max-width: 1440px;
  height: 80px;
  justify-content: center;
  align-items: center;
`;

const Icon = styled.div`
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  color: ${({ theme }) => theme['onPrimary']};

  & span {
    ${({ theme }) => theme['headline3']};
    font-family: 'Bebas Neue', sans-serif;
    font-weight: 400;
    -webkit-user-select: none; /* Safari */
    -ms-user-select: none; /* IE 10 and IE 11 */
    user-select: none; /* Standard syntax */
  }
`;

const NavItens = styled.ul`
  display: flex;
  list-style-type: none;
  align-content: center;
  margin: 0;
  padding: 0;

  & li {
    display: flex;
    justify-content: center;
    padding: 0px 20px;
    align-items: center;
    height: 80px;
    color: ${({ theme }) => theme['onPrimary']};
    ${({ theme }) => theme['menu']};
  }
`;

const Contact = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0px 20px;

  & button {
    color: ${({ theme }) => theme['secondary']};
    background: ${({ theme }) => theme['onSecondary']};
    ${({ theme }) => theme['menu']};
  }
`;
