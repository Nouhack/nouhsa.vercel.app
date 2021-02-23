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
} from "@chakra-ui/react";
import { AiFillGithub } from "react-icons/ai";
import { IoLogoTwitter } from "react-icons/io";
import { SiGmail } from "react-icons/si";
import { BsDownload } from "react-icons/bs";

import Image from "next/image";

export default function Home() {
  return (
    <>
      <Head>
        <title>About Developer</title>
      </Head>

      <Stack h="88vh" direction={["column", "column", "row"]} spacing="10px">
        <Center w={{ base: "100%", md: "40%" }} h="100%">
          <Box
            boxShadow="xl"
            w={300}
            h={300}
            borderRadius="xl"
            overflow="hidden"
          >
            <Image
              src="/Dev.jpg"
              alt=""
              layout="fixed"
              width={300}
              height={300}
              objectFit="cover"
              priority={true}
            />
          </Box>
        </Center>

        <Flex w={{ base: "100%", md: "60%" }} alignItems="center" h="100%">
          <Stack
            spacing={{ base: 5, md: 8 }}
            textAlign={{ base: "center", md: "start" }}
          >
            <Heading
              fontFamily="mono"
              size="lg"
              mt={{ base: "20px", md: null }}
              fontSize={["20px", "23px", "26px", "40px"]}
              mr="10px"
            >
              Hey, I’m Saiche Nouh
            </Heading>
            <Text fontSize="md" fontFamily="mono">
              Hi my name is Nouh Saiche, from Algeria exactly Living in Algiers
              I am a FullStack React self taught developer and also react native
              mobile developer, I'am obsessed with learning new things every day
              , I like to take on challenges and developing things is my hobby
              for all time and my dream is to join a company to face more
              challenges and improve my skills .
            </Text>
            <HStack
              align="center"
              spacing="15px"
              justify={{ base: "center", md: "flex-start" }}
              mb={{ base: "25px", md: null }}
            >
              <IconButton
                as="a"
                href="https://github.com/Nouhack"
                target="_blank"
                variant="outline"
                aria-label="Call Sage"
                fontSize="20px"
                icon={<AiFillGithub />}
              />
              <IconButton
                as="a"
                href="https://twitter.com/nouhack_saiche"
                target="_blank"
                variant="outline"
                aria-label="Call Sage"
                fontSize="20px"
                icon={<IoLogoTwitter />}
              />
              <Tooltip label="Send to : nouh.saiche@gmail.com" fontSize="md">
                <IconButton
                  variant="outline"
                  aria-label="Call Sage"
                  fontSize="20px"
                  icon={<SiGmail />}
                />
              </Tooltip>

              <Tooltip label="Download My resume" fontSize="md">
                <IconButton
                  as="a"
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
