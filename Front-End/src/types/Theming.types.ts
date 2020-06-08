export interface Palette {
  black: string;
  white: string;
  disabled: string;
  error: string;
  success: string;
  info: string;
  primary: string;
  warning: string;
  alt: string;
  ok: string;
}

export interface FontFace {
  main: string;
  alt?: string;
}

export interface FontSize {
  xs: string;
  sm: string;
  md: string;
  lg: string;
  xl: string;
}

export interface FlexCenter {
  all: string;
  vert: string;
  horiz: string;
}

export type ThemeType = {
  palette: Palette;
  typography: {
    fontFace: FontFace;
    size: FontSize;
  };
  animation: {
    transition: string;
  };
  alignment: {
    flex: {
      center: FlexCenter;
    };
  };
};
