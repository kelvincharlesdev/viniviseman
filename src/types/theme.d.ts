import 'styled-components';

type ColorNeutral = {
  lightest: string;
  light: string;
  medium: string;
  gray: string;
  black: string;
};

type BackgroundColor = {
  lightest: string;
  medium: string;
  dark: string;
};

type FontFamily = {
  default: string;
};

type FontWeight = {
  light: number;
  regular: number;
  medium: number;
  bold: number;
};

type FontSize = {
  nano: string;
  micro: string;
  base: string;
  xxs: string;
  xs: string;
  sm: string;
  md: string;
  lg: string;
  xl: string;
  xxl: string;
  xxxl: string;
  giant: string;
  huge: string;
  xhuge: string;
};

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      neutral: ColorNeutral;
      background: BackgroundColor;
    };
    fonts: {
      family: string;
      weight: FontWeight;
      size: FontSize;
    };
  }
}
