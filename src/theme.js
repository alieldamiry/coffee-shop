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
    MuiInputLabel: {
      // shrink: ,
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
      },
    },
    MuiTableCell: {
      body: {
        color: '#fff',
      },
      head: {
        color: '#fff',
      },
    },
    MuiOutlinedInput: {
      notchedOutline: {
        borderColor: '#272727',
      },
      root: {
        '&:hover $notchedOutline': {
          borderColor: '#4b4b4b',
        },
      },
    },
    MuiSelect: {
      icon: {
        fill: '#272727',
      },
    },
  },
  // shadows: ["none"],
});

export default theme;
