import Head from "next/head";
import {
  Center,
  Heading,
  Tooltip,
  Box,
  Stack,
  Flex,
  Container,
  Text,
  HStack,
  IconButton,
  useToast,
} from "@chakra-ui/react";
import { AiFillGithub } from "react-icons/ai";
import { IoLogoTwitter } from "react-icons/io";
import { SiGmail } from "react-icons/si";
import { BsDownload } from "react-icons/bs";

import {
  englishIntroduction,
  englishIntroTitle,
} from "../data/DeveloperIntroduction";

export default function Home() {
  const toast = useToast();

  return (
    <>
      <Head>
        <title>About Developer</title>
        <meta name="description" content="Self Taugth fullstack developer" />
      </Head>

      <Container
        display="flex"
        alignItems="center"
        justifyContent="center"
        flexDir="column"
        h="88vh"
        maxWidth={{ base: "100%", lg: "45em" }}
      >
        <Stack
          //          h="88vh"
          direction={["column", "column", "row"]}
          spacing="10px"
        >
          <Flex w={{ base: "100%", md: "60%" }} alignItems="center" h="100%">
            <Stack
              spacing={{ base: 5, md: 2 }}
              textAlign={{
                base: "center",
                md: "start",
              }}
            >
              <Heading
                letterSpacing={-1}
                mt={{ base: "20px", md: null }}
                fontSize={["25px", "28px", "30px", "40px"]}
                fontWeight="bold"
                mr="10px"
              >
                {englishIntroTitle}
              </Heading>
              <Text
                fontSize="md"
                lineHeight="190%"
                color="#4c4c4c"
                // fontFamily="comic Sans MS"
              >
                {englishIntroduction}
              </Text>
            </Stack>
          </Flex>

          <Center w={{ base: "100%", md: "40%" }} h="100%">
            <Box
              rounded="100%"
              overflow="hidden"
              style={{
                position: "relative",
                background:
                  "linear-gradient(to right, #6ee7b7 ,#3b82f6, #9333ea)",
                padding: 7,
              }}
            >
              <Box
                w={170}
                h={170}
                rounded="100%"
                overflow="hidden"
                style={{
                  position: "relative",
                  background:
                    "linear-gradient(to right, #fde68a ,#fca5a5, #fecaca)",
                  padding: 7,
                }}
                transition={"width 250ms , height 250ms"}
                _hover={{ width: 200, height: 200 }}
              >
                <img
                  src="/Dev.jpg"
                  alt=""
                  style={{
                    borderRadius: "100%",
                    objectFit: "cover",
                    width: "100%",
                    height: "100%",
                  }}
                />
              </Box>
            </Box>
          </Center>
        </Stack>

        <HStack
          align="center"
          spacing="15px"
          mt={10}
          justify={{ base: "center", md: "center" }}
          mb={{ base: "25px", md: null }}
        >
          <IconButton
            as="a"
            size="lg"
            rel="noopener"
            _hover={{
              bg: "linear-gradient(to right, #6ee7b7 ,#3b82f6, #9333ea)",
              color: "white",
            }}
            href="https://github.com/Nouhack"
            target="_blank"
            rounded={100}
            variant="outline"
            aria-label="Call Sage"
            fontSize="20px"
            icon={<AiFillGithub />}
          />
          <IconButton
            as="a"
            size="lg"
            rounded={100}
            _hover={{
              bg: "linear-gradient(to right, #6ee7b7 ,#3b82f6, #9333ea)",
              color: "white",
            }}
            rel="noopener"
            href="https://twitter.com/nouhack_saiche"
            target="_blank"
            variant="outline"
            aria-label="Call Sage"
            fontSize="20px"
            icon={<IoLogoTwitter />}
          />
          <IconButton
            variant="outline"
            size="lg"
            rounded={100}
            _hover={{
              bg: "linear-gradient(to right, #6ee7b7 ,#3b82f6, #9333ea)",
              color: "white",
            }}
            aria-label="Call Sage"
            fontSize="20px"
            icon={<SiGmail />}
            onClick={() =>
              toast({
                position: "top",
                title: "Contact me.",
                description: "nouh.saiche@gmail.com",
                status: "info",
                bg: "red",
                duration: 9000,
                isClosable: true,
              })
            }
          />

          <Tooltip label="Telecharger Le CV En Francais" fontSize="md">
            <IconButton
              as="a"
              rounded={100}
              _hover={{
                bg: "linear-gradient(to right, #6ee7b7 ,#3b82f6, #9333ea)",
                color: "white",
              }}
              size="lg"
              rel="noopener"
              target="_blank"
              download={true}
              href="/2022.png"
              //href="https://drive.google.com/file/d/1PL2kt--nW-8-cLxVZE5XWrjoXrb9pC89/view?usp=sharing"
              variant="outline"
              aria-label="Call Sage"
              fontSize="20px"
              icon={<BsDownload />}
            />
          </Tooltip>
        </HStack>
      </Container>
    </>
  );
}

/* 

        <HStack
          align="center"
          spacing="15px"
          justify={{ base: "center", md: "center" }}
          mb={{ base: "25px", md: null }}
        >
          <IconButton
            as="a"
            rel="noopener"
            href="https://github.com/Nouhack"
            target="_blank"
            rounded={100}
            borderColor="blue"
            borderWidth={2}
            variant="outline"
            aria-label="Call Sage"
            fontSize="20px"
            icon={<AiFillGithub />}
          />
          <IconButton
            as="a"
            rounded={100}
            borderColor="blue"
            borderWidth={2}
            rel="noopener"
            href="https://twitter.com/nouhack_saiche"
            target="_blank"
            variant="outline"
            aria-label="Call Sage"
            fontSize="20px"
            icon={<IoLogoTwitter />}
          />
          <IconButton
            variant="outline"
            rounded={100}
            borderColor="blue"
            borderWidth={2}
            aria-label="Call Sage"
            fontSize="20px"
            icon={<SiGmail />}
            onClick={() =>
              toast({
                position: "top",
                title: "Contact me.",
                description: "nouh.saiche@gmail.com",
                status: "info",
                bg: "red",
                duration: 9000,
                isClosable: true,
              })
            }
          />

          <Tooltip label="View My resume" fontSize="md">
            <IconButton
              as="a"
              rounded={100}
              borderColor="blue"
              borderWidth={2}
              rel="noopener"
              target="_blank"
              href="https://drive.google.com/file/d/1PL2kt--nW-8-cLxVZE5XWrjoXrb9pC89/view?usp=sharing"
              variant="outline"
              aria-label="Call Sage"
              fontSize="20px"
              icon={<BsDownload />}
            />
          </Tooltip>
        </HStack>

*/
