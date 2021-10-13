import { ChakraProvider, Container } from "@chakra-ui/react";
import Header from "../components/Header";
import { mode } from "@chakra-ui/theme-tools";
import { extendTheme } from "@chakra-ui/react";

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider
      theme={extendTheme({
        styles: {
          global: (props) => ({
            body: {
              bg: mode("#f9fafb", "black")(props),
              color: mode("black", "#f9fafb")(props),
            },
          }),
        },
      })}
    >
      <Container
        //   bg="red.500"
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
