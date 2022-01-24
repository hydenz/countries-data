import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      main: string;
      secondary: string;
      font: string;
    };
    smallBorderRadius: string;
    borderRadius: string;
    lightBoxShadow: string;
    mediumBoxShadow: string;
  }
}
