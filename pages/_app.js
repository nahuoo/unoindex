import { ChakraProvider, extendTheme } from "@chakra-ui/react"
import Footer from '../components/Footer'

const theme = extendTheme({
  fonts: {
    body: "system-ui, sans-serif",
    heading: "Georgia, serif",
    mono: "Menlo, monospace",
  },
  global:{
    html: {scrollbehavior: 'inside'}
  },
  colors: {
    transparent: "transparent",
    red:{ 
      base:"#C60B0B",
      hover:"#940E0E"
    },
    verde:'#43C7DA',
  },
})

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
      <Footer />
    </ChakraProvider>
  )
}

export default MyApp