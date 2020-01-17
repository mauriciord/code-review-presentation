import { code as theme } from 'mdx-deck/themes'

console.log('theme', theme);

export const defaultTheme = {
  ...theme,
  colors: {
    background: '#ffffff',
    text: '#212121',
    primary: '#2596D3',
  },
  googleFont: 'Fira Mono',
  text: {
    heading: {
      color: '#2596D3',
    }
  },
};
