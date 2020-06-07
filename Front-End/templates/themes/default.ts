export default {
  palette: {
    black: '#000000',
    white: '#ffffff',
    disabled: '#c4c4c4',
    error: '#c20000',
    success: '#00c950',
    info: '#4bb5c1',
    primary: '#ff8598',
    warning: '#e6e2af',
    alt: '#9c8c72',
    ok: '#7d8a2e',
  },
  typography: {
    fontFace: {
      main: 'Roboto',
      alt: 'Righteous',
    },
    size: {
      xs: '16px',
      sm: '18px',
      md: '24px',
      lg: '26px',
      xl: '36px',
    },
  },
  animation: {
    transition: 'ease-in-out 0.5s all'
  },
  alignment: {
    flex: {
      center: {
        all: `
          display: flex;    
          align-items: center;
          justify-content: center;
        `,
        vert: `
          display: flex;
          align-items: center;
        `,
        horiz: `
          display: flex;
          justify-content: center;
        `,
      },
    },
  },
};
