import { ChakraProvider, Container } from "@chakra-ui/react";
import Header from "../components/Header";

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
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
