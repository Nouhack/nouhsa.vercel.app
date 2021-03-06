import {
  Spacer,
  Flex,
  Center,
  Button,
  Stack,
  IconButton,
  Slide,
  Text,
  useColorMode,
  useDisclosure,
  Box,
  Badge,
  Switch,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon, SunIcon, MoonIcon } from "@chakra-ui/icons";
import { useState, useEffect } from "react";
import Link from "next/link";

import { useRouter } from "next/router";

import {
  arAbout,
  enAbout,
  arCareer,
  enCareer,
  arProjects,
  enProjects,
  arSkills,
  enSkills,
} from "../data/Titles";

export default function Header() {
  const { colorMode, toggleColorMode } = useColorMode();
  const { isOpen, onToggle } = useDisclosure();
  const [localValue, setlocalValue] = useState("en-US");
  const router = useRouter();

  useEffect(() => {
    router.push(router.pathname, router.pathname, {
      locale: localValue,
    });
  }, [localValue]);

  return (
    <>
      <Flex bg="transparent" h="12vh">
        <Center p="5" pl="5">
          {colorMode === "light" ? (
            <MoonIcon onClick={toggleColorMode} />
          ) : (
            <SunIcon onClick={toggleColorMode} />
          )}
          <Center ml="30px" mt="5px">
            <Text mr="5px">en</Text>
            <Switch
              size="md"
              colorScheme="none"
              onChange={(event) => {
                localValue === "en-US"
                  ? setlocalValue("ar-DZ")
                  : setlocalValue("en-US");
                console.log(router.pathname);
              }}
            />
            <Text ml="5px">ar</Text>
          </Center>
        </Center>
        <Spacer />
        <Center
          p="5"
          h="100%"
          display={{ base: "none", lg: "inherit" }}
          //  bg="red"
        >
          <Stack direction="row" spacing="10px">
            <Link href="/skills">
              <Button
                size="sm"
                bg="transparent"
                _focus={{ outline: "none" }} //colorScheme="white"

                //  color="black"
              >
                <Text>{router.locale === "en-US" ? enSkills : arSkills} </Text>
                <Badge colorScheme="purple" ml={1}>
                  {router.locale === "en-US" ? "new" : "جديد"}
                </Badge>
              </Button>
            </Link>

            <Link href="/projects">
              <Button
                size="sm"
                bg="transparent"
                _focus={{ outline: "none" }} //colorScheme="white"

                //  color="black"
              >
                <Text>
                  {router.locale === "en-US" ? enProjects : arProjects}
                </Text>
              </Button>
            </Link>

            <Link href="/career">
              <Button
                size="sm"
                bg="transparent"
                _focus={{ outline: "none" }} //colorScheme="white"

                //    color="black"
              >
                <Text>{router.locale === "en-US" ? enCareer : arCareer}</Text>
              </Button>
            </Link>
            <Link href="/">
              <Button
                size="sm"
                ///   colorScheme="twitter"
                _focus={{ outline: "none" }} //colorScheme="white"
              >
                <Text>{router.locale === "en-US" ? enAbout : arAbout}</Text>
              </Button>
            </Link>
          </Stack>
        </Center>
        {/*  ----------------------- mobile header ---------------------------*/}
        <Center p="5" display={{ base: "inherit", lg: "none" }}>
          <IconButton
            onClick={onToggle}
            aria-label="Search database"
            _focus={{ outline: "none" }} //colorScheme="white"
            bg="transparent"
            p="6"
            // color="black"
            borderRadius="20px"
            icon={isOpen ? null : <HamburgerIcon w={6} h={6} />}
          />
        </Center>
      </Flex>
      {/*  pos="sticky"
          top="12vh"*/}

      <Slide direction="bottom" bg="red" in={isOpen} style={{ zIndex: 10 }}>
        <Box
          w="100%"
          h="100vh"
          bg="rgba(0, 0, 0, 0.60)"
          display={{ base: "inherit", lg: "none" }}
        >
          <Flex width="100%" h="12vh" justifyContent="center" p={10}>
            <Button onClick={onToggle} bg="transparent">
              <CloseIcon w={4} h={4} color="white" />
            </Button>
          </Flex>
          <Center w="100%" h="88vh">
            <Stack direction="column" spacing="25px" p="20" w="100%">
              <Link href="/">
                <Button
                  colorScheme="transparent"
                  onClick={onToggle}
                  color="white"
                  _focus={{ outline: "none" }} //colorScheme="white"
                >
                  {router.locale === "en-US" ? enAbout : arAbout}
                </Button>
              </Link>

              <Link href="/career">
                <Button
                  onClick={onToggle}
                  colorScheme="transparent"
                  color="white"
                  _focus={{ outline: "none" }} //colorScheme="white"
                >
                  {router.locale === "en-US" ? enCareer : arCareer}
                </Button>
              </Link>
              <Link href="/projects">
                <Button
                  onClick={onToggle}
                  colorScheme="transparent"
                  color="white"
                  _focus={{ outline: "none" }} //colorScheme="white"
                >
                  {router.locale === "en-US" ? enProjects : arProjects}
                </Button>
              </Link>

              <Link href="/skills">
                <Button
                  onClick={onToggle}
                  colorScheme="transparent"
                  color="white"
                  _focus={{ outline: "none" }} //colorScheme="white"
                >
                  {router.locale === "en-US" ? enSkills : arSkills}
                  <Badge colorScheme="purple" ml={1}>
                    {router.locale === "en-US" ? "new" : "جديد"}
                  </Badge>
                </Button>
              </Link>
            </Stack>
          </Center>
        </Box>
      </Slide>
    </>
  );
}

/*
<Stack direction={["column", "row"]} spacing="25px">
            <Button colorScheme="blue">Home</Button>
            <Button colorScheme="blue">How it Works</Button>
            <Button colorScheme="blue">Features</Button>
            <Button colorScheme="blue">Pricing</Button>
            <Button colorScheme="blue">Create Account</Button>
          </Stack>



          2021 ===> next js and prisma chakra ui
          2020 ===> react js and react native bootstrap + graduated as a senior technician specializing in database option 
          2019 ===> java SE 
          2018 ===> Django
          2017 ===> python
          2014 - 2017
          2014 ===> Obtaining a baccalaureate degree
*/
