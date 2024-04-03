import { createTheme } from '@mui/material'


export const theme = createTheme({
    palette: {
        text: {
            primary: "#40403f",
        },
        primary: {
            main: "#DDDDDD"
        },
        secondary: {
            main: "#121212"
        },
    },
    components: {
        MuiTypography: {
            defaultProps: {
                variantMapping: {
                    h1: 'h2',
                    h2: 'h2',
                    h3: 'h2',
                    h4: 'h2',
                    h5: 'h2',
                    h6: 'h2',
                    subtitle1: 'h2',
                    subtitle2: 'h2',
                    body1: 'span',
                    body2: 'span',
                },
            },
        },
    },
    dot: {
        backgroundColor: 'red',
        '&.active': {
            backgroundColor: 'blue',
        },
    },
    typography: {
        primary: {
            fontSize: 14,

        },
        footerItem: {
            color: ' #121212',

            fontSize: '0.8rem',
        }
    },
})

