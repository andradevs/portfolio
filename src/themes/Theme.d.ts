import 'styled-components';
// import { Font } from './Font';

type Theme = {
  primary: string;
  onPrimary: string;
  secondary: string;
  onSecondary: string;
  gradient: string;
  headline1: Font;
  headline2: Font;
  headline3: Font;
  headline4: Font;
  headline5: Font;
  display1: Font;
  display2: Font;
  paragraph1: Font;
  paragraph2: Font;
  paragraph3: Font;
  title: Font;
  menu: Font;
};

declare module 'styled-components' {
  export interface DefaultTheme extends Theme {}
}
