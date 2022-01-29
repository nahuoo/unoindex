import { background, ChakraProvider, extendTheme } from "@chakra-ui/react"
import Footer from '../components/Footer'
import { initializeApp } from "firebase/app";
import NavBar from "../components/navbar";

const theme = extendTheme({
  fonts: {
    body: "system-ui, sans-serif",
    heading: "Georgia, serif",
    mono: "Menlo, monospace",
  },
  global: {
    html: { scrollbehavior: "inside", background: "white" },
  },
  colors: {
    transparent: "transparent",
    red: {
      base: "#C60B0B",
      hover: "#940E0E",
    },
    white: "#F6F5F5",
    verde: "#43C7DA",
  },
});

function MyApp({ Component, pageProps }) {
  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: process.env.API_KEY,
    authDomain: process.env.AUTH_DOMAIN,
    databaseURL: process.env.DATABASE_URL,
    projectId: process.env.PROJECT_ID,
    storageBucket: process.env.STORAGE_BUCKET,
    messagingSenderId: process.env.MESSAGING_SENDER_ID,
    appId: process.env.APP_ID,
    measurementId: process.env.MEASUREMENT_ID,
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  
  return (
    <ChakraProvider theme={theme}>
      <NavBar />
      <Component {...pageProps} />
      <Footer />
    </ChakraProvider>
  );
}

export default MyApp