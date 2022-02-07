import { ChakraProvider, Container } from "@chakra-ui/react";
import Header from "../components/Header";
import { mode } from "@chakra-ui/theme-tools";
import { extendTheme } from "@chakra-ui/react";
import "../styles/global.css";

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider
      theme={extendTheme({
        styles: {
          global: (props) => ({
            body: {
              bg: mode("#f9fafb", "#111")(props),
              color: mode("#111", "#f9fafb")(props),
            },
          }),
        },
      })}
    >
      <Container
        //   bg="red.500"
        id="container"
        maxWidth={{ base: "100%", lg: "62em" }}
        pos="relative"
      >
        <Header />
        <Component {...pageProps} />
      </Container>
    </ChakraProvider>
  );
}

export default MyApp;
