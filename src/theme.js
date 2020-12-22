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
    MuiInputLabel: {
      shrink: true,
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
    MuiFormLabel: {
      root: {
        color: '#eee',
      },
    },
    MuiInput: {
      underline: {
        '&:before': {
          borderBottom: '1px solid rgba(255,255,255,.3)',
        },
        '&:hover:not(.Mui-disabled):before': {
          borderBottom: '1px solid #c49b63',
        },
      },
    },
    MuiInputBase: {
      root: {
        color: '#fff',
        fontSize: '0.8rem',
      },
    },
  },
  // shadows: ["none"],
});

export default theme;
