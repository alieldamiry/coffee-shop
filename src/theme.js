import { createMuiTheme } from '@material-ui/core';

const theme = createMuiTheme({
  // Palette
  palette: {
    primary: {
      main: '#c49b63',
    },
  },
  // Typography
  typography: {
    fontFamily: 'Poppins',
  },
  // Props
  props: {
    MuiLink: {
      underline: 'none',
    },
    MuiButton: {
      disableRipple: true,
    },
  },
  // Shape
  shape: {
    borderRadius: 0,
  },

  // Overrides
  overrides: {
    MuiPaper: {
      root: {
        color: '#ffffff',
        backgroundColor: '#0b0b0b',
      },
    },
    MuiButton: {
      root: {
        margin: 2,
        padding: 16,
        fontSize: 12,
      },
      outlined: {
        margin: 2,
        padding: 16,
        fontSize: 12,
      },
    },
  },
  // shadows: ["none"],
});

export default theme;
