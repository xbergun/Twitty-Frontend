import { extendTheme } from 'native-base';

export const theme = extendTheme({
    colors: {
      mode: {
        light: {
          primary: 'white',
          secondary: 'white',
          background: 'black',
          text: 'black',
        },
        dark: {
          primary: 'black',
          secondary: 'black',
          background: 'black',
          text: 'white',
        },
      },
    },
  });