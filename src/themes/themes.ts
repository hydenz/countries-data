import { DefaultTheme } from 'styled-components';

export const lightTheme: DefaultTheme = {
  colors: {
    main: 'hsl(0, 0%, 98%)',
    secondary: 'hsl(0, 0%, 100%)',
    font: 'hsl(200, 15%, 8%)',
  },
  smallBorderRadius: '2px',
  borderRadius: '6px',
  lightBoxShadow: 'rgba(99, 99, 99, 0.1) 0px 2px 8px 0px',
  mediumBoxShadow: 'rgba(100,100,111,0.25) 0px 0px 5px 1px',
};

export const darkTheme: DefaultTheme = {
  colors: {
    main: 'hsl(207, 26%, 17%)',
    secondary: 'hsl(209, 23%, 22%)',
    font: 'hsl(0, 0%, 100%)',
  },
  smallBorderRadius: '2px',
  borderRadius: '6px',
  lightBoxShadow: 'rgba(99, 99, 99, 0.1) 0px 2px 8px 0px;',
  mediumBoxShadow: 'rgba(100,100,111,0.25) 0px 0px 5px 1px',
};
