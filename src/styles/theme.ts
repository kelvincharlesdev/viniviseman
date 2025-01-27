import { DefaultTheme } from 'styled-components';

export const theme: DefaultTheme = {
  colors: {
    neutral: {
      lightest: '#FFFFFF',
      light: '#CAF0F8',
      medium: '#0077B6',
      gray: '#939AA6',
      black: '#000000'
    },
    background: {
      dark: '#011627'
    }
  },
  fonts: {
    family: 'Roboto, sans-serif',
    weight: {
      light: 300,
      regular: 400,
      medium: 500,
      bold: 700
    },
    size: {
      nano: '0.75rem', //12px
      micro: '0.875rem', //14px
      base: '1rem', //16px
      xxs: '1.125rem', //18px
      xs: '1.25rem', //20px
      sm: '1.375rem', //22px
      md: '1.5rem', //24px
      lg: '1.625rem', //26px
      xl: '1.75rem', //28px
      xxl: '1.875rem', //30px
      xxxl: '2rem', //32px
      giant: '2.125rem', //34px
      huge: '2.25rem', //36px
      xhuge: '3rem' //48px
    }
  }
};
