import { createContext, useContext, useState } from 'react';
import { ThemeProvider as Theme } from 'styled-components';
import themes from '../themes/themes';
import GlobalStyles from '../GlobalStyles';
import { getFromLS, setToLS } from '../utils/storage';

interface IContext {
  toggleTheme(): void;
  theme: 'light' | 'dark';
}

interface IProps {
  children: React.ReactElement;
}

export const ThemeContext = createContext<IContext | null>(null);

export const useThemeContext = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('component must be rendered as child of ThemeProvider');
  }
  return context;
};

export const ThemeProvider = ({ children }: IProps) => {
  const [theme, setTheme] = useState<'light' | 'dark'>(getFromLS('theme'));
  // const [icon, setIcon] = useState();

  const toggleTheme = () => {
    if (theme === 'light' || !theme) {
      setTheme('dark');
      setToLS('theme', 'dark');
    } else {
      setTheme('light');
      setToLS('theme', 'light');
    }
  };

  return (
    <ThemeContext.Provider value={{ toggleTheme, theme }}>
      <Theme theme={{ ...themes[theme], ...themes.fonts }}>
        {children}
        <GlobalStyles />
      </Theme>
    </ThemeContext.Provider>
  );
};
