import { extendTheme } from '@chakra-ui/react'

const fonts = {
  heading: 'Roboto, sans-serif',
  body: 'Roboto, sans-serif',
}

const colors = {
  primary: "#2B2142",
  artist: "#e1e1e6ae",
  bg: "#100C16"
}

const theme = extendTheme({ fonts, colors })

export default theme