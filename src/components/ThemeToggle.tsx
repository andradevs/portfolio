import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useThemeContext } from '../contexts/ThemeProvider';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';
import styled from 'styled-components';

const themeIcon = {
  light: faMoon,
  dark: faSun,
};

const ThemeToggle = () => {
  const { toggleTheme, theme } = useThemeContext();
  return (
    <Wrapper onClick={toggleTheme}>
      <div>
        <FontAwesomeIcon icon={themeIcon[theme] || faMoon} />
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  bottom: 20px;
  right: 20px;
  padding: 10px 10px;
  border-radius: 50%;
  font-size: 1.5rem;
  box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.2);
  cursor: pointer;

  &:hover {
    transform: scale(1.1);
    transition: transform 300ms ease-in;
    background-color: ${({ theme }) => theme['onPrimary']};
    color: ${({ theme }) => theme['primary']};
  }

  & div {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 1.5rem;
  }

  background-color: ${({ theme }) => theme['onPrimary']};
  color: ${({ theme }) => theme['primary']};
`;

export default ThemeToggle;
