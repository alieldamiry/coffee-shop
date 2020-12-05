const { createMuiTheme } = require("@material-ui/core");
const theme = createMuiTheme({
    palette: {
        primary: {
            main: '#c49b63'
        },
    },
    props: {
        MuiLink: {
            underline: 'none'
        },
        MuiButton: {
            disableRipple: true
        }
    },
    typography: {
        fontFamily: 'Poppins'
    },
    shape: {
        borderRadius: 0
    },

    overrides: {
        MuiPaper: {
            root: {
                color: '#ffffff',
                backgroundColor: '#0b0b0b'
            }
        },
        MuiButton: {
            root: {
                margin: 2,
                padding: 16,
                fontSize:12
            },
            outlined: {
                margin: 2,
                padding: 16,
                fontSize:12
            },
        },
        // MuiButtonOutlined: {
        //     padding: 20
        // }
        // MuiButtonOutlined: {
        //     padding: 'unset'
        // }
    },
    shadows: ["none"],
})

export default theme;