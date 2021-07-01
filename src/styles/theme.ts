import { extendTheme } from '@chakra-ui/react'

export const theme = extendTheme({
    colors: {
        gray: {
            "600": "#47585B",
            "450": "#999999",
            "200": "#DADADA",
            "50": "#F5F8FA"
        },
        yellow: {
            "50": "#FFBA08"
        }
    },
    fonts: {
        heading: 'Poppins',
        body: '"Poppins", Barlow'
    },
    styles: {
        global: {
            body: {
                bg: 'gray.50',
                color: 'gray.600'
            }
        }
    }
})