import { styled } from 'styled-components';

const Navbar = () => {
  return (
    <Wrapper>
      <Icon>
        <span>ANDRADEVS.</span>
      </Icon>
      <NavItens>
        <li>Home</li>
        <li>Projetos</li>
        <li>Sobre</li>
      </NavItens>
      <Contact>Vamos Conversar</Contact>
    </Wrapper>
  );
};

export default Navbar;

const Wrapper = styled.nav`
  display: flex;
  min-width: 1440px;
  height: 80px;
  justify-content: center;
  align-items: center;
`;

const Icon = styled.div`
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

const NavItens = styled.ul``;

const Contact = styled.button``;
