import { extendTheme } from '@chakra-ui/react'

export const theme = extendTheme({
    colors: {
        gray: {
            "600": "#47585B",
            "450": "#999999",
            "200": "#DADADA",
            "50": "#F5F8FA"
        }
    },
    fonts: {
        heading: 'Poppins',
        body: 'Poppins'
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