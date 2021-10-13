import Head from "next/head";
import {
  Center,
  Heading,
  Tooltip,
  Box,
  Stack,
  Flex,
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

      <Stack h="88vh" direction={["column", "column", "row"]} spacing="10px">
        <Center w={{ base: "100%", md: "40%" }} h="100%">
          <Box
            //boxShadow="dark-lg"
            w={200}
            h={200}
            //transition="border-radius 1s ease-out 100ms"
            //         borderRadius="xl"
            rounded="100%"
            // roundedTopEnd={50}
            //  roundedBottomStart={30}
            // roundedTopEnd={300}
            overflow="hidden"
            //_hover={{ rounded: "0%" }}
          >
            <img
              src="/Dev.jpg"
              alt=""
              //layout="fixed"
              //objectFit="cover"
              //priority={true}
              style={{
                objectFit: "cover",
                width: "200px",
                height: "200px",
                transform: "scale(1.1)",
              }}
            />
          </Box>
        </Center>

        <Flex w={{ base: "100%", md: "60%" }} alignItems="center" h="100%">
          <Stack
            spacing={{ base: 5, md: 8 }}
            textAlign={{
              base: "center",
              md: "start",
            }}
          >
            <Heading
              fontFamily="Tahoma"
              size="lg"
              mt={{ base: "20px", md: null }}
              fontSize={["20px", "23px", "26px", "40px"]}
              mr="10px"
            >
              {englishIntroTitle}
            </Heading>
            <Text
              fontSize="md"
              lineHeight="190%"
              color="#4c4c4c"
              fontFamily="comic Sans MS"
            >
              {englishIntroduction}
            </Text>
            <HStack
              align="center"
              spacing="15px"
              justify={{ base: "center", md: "flex-start" }}
              mb={{ base: "25px", md: null }}
            >
              <IconButton
                as="a"
                rel="noopener"
                href="https://github.com/Nouhack"
                target="_blank"
                variant="outline"
                aria-label="Call Sage"
                fontSize="20px"
                icon={<AiFillGithub />}
              />
              <IconButton
                as="a"
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
          </Stack>
        </Flex>
      </Stack>
    </>
  );
}
