import { styled } from 'styled-components';
import Flags from './Flags';
import { Button } from './ui/StyledButton';
import { useTranslation } from 'react-i18next';
const Navbar = () => {
  const { t } = useTranslation();
  return (
    <Wrapper>
      <Icon onClick={() => console.log('HAHAHA')}>
        <span>ANDRADEVS.</span>
      </Icon>
      <NavItens>
        <li>
          <span>{t('Home')}</span>
        </li>
        <li>
          <span>{t('Projects')}</span>
        </li>
        <li>
          <span>{t('Blog')}</span>
        </li>
        <li>
          <span>{t('About')}</span>
        </li>
      </NavItens>
      <Contact>
        <Button>{t("LET'S TALK")}</Button>
      </Contact>
      <Flags />
    </Wrapper>
  );
};

export default Navbar;

const Wrapper = styled.nav`
  display: grid;
  padding: 0px 15px;
  grid-template-columns: 20% 1fr auto auto;
  width: 100%;
  height: 80px;
  justify-content: center;
  align-items: center;
`;

const Icon = styled.div`
  cursor: pointer;
  display: flex;
  justify-content: start;
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
    color: ${({ theme }) => theme['primary']};
    background-color: ${({ theme }) => theme['onPrimary']};
    ${({ theme }) => theme['menu']};

    &:hover {
      background: ${({ theme }) => theme['onPrimary']}
        radial-gradient(circle, transparent 1%, ${({ theme }) => theme['onPrimary']} 1%) center/15000%;
    }

    &:active {
      background-color: ${({ theme }) => theme['onSecondary']};
    }
  }
`;
