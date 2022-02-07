import {
  Spacer,
  Flex,
  Center,
  Button,
  Stack,
  IconButton,
  Slide,
  Text,
  Link,
  useColorMode,
  useDisclosure,
  Box,
  Badge,
  Switch,
} from "@chakra-ui/react";
import NextLink from "./utils/NextLink";
import { useRouter } from "next/router";

import { HamburgerIcon, CloseIcon, SunIcon, MoonIcon } from "@chakra-ui/icons";

const colors = {
  selected: "tomato",

  notSelected: "transparent",
};

export default function Header() {
  const { colorMode, toggleColorMode } = useColorMode();
  const { isOpen, onToggle } = useDisclosure();
  const router = useRouter();

  return (
    <>
      <Flex bg="transparent" h="12vh">
        <Center p="5" pl="5">
          {colorMode === "light" ? (
            <MoonIcon onClick={toggleColorMode} />
          ) : (
            <SunIcon onClick={toggleColorMode} />
          )}
        </Center>
        <Spacer />
        <Center
          p="5"
          w="100%"
          h="100%"
          display={{ base: "none", lg: "inherit" }}
          //  bg="red"
        >
          <Stack direction="row" spacing="10px">
            <NextLink href="/skills">
              <Button
                size="sm"
                pt={1}
                bg="transparent"
                fontWeight="normal"
                borderBottomColor={
                  router.pathname === "/skills"
                    ? colors.selected
                    : colors.notSelected
                }
                color="unset"
                rounded={0}
                borderBottomWidth={4}
                _hover={{ bg: "transparent" }}
                _active={{ bg: "transparent" }}
                _focus={{ outline: "none" }} //colorScheme="white"

                //  color="black"
              >
                Skills
              </Button>
            </NextLink>

            <NextLink href="/projects">
              <Button
                size="sm"
                rounded={0}
                borderBottomWidth={4}
                bg="transparent"
                fontWeight="normal"
                borderBottomColor={
                  router.pathname === "/projects"
                    ? colors.selected
                    : colors.notSelected
                }
                _hover={{ bg: "transparent" }}
                _active={{ bg: "transparent" }}
                _focus={{ outline: "none" }} //colorScheme="white"

                //  color="black"
              >
                Projects
              </Button>
            </NextLink>

            <NextLink href="/career">
              <Button
                size="sm"
                bg="transparent"
                rounded={0}
                borderBottomWidth={4}
                borderBottomColor={
                  router.pathname === "/career"
                    ? colors.selected
                    : colors.notSelected
                }
                fontWeight="normal"
                _focus={{ outline: "none" }} //colorScheme="white"
                _hover={{ bg: "transparent" }}
                _active={{ bg: "transparent" }}

                //    color="black"
              >
                Career
              </Button>
            </NextLink>

            <NextLink href="/">
              <Button
                size="sm"
                fontWeight="normal"
                bg="transparent"
                rounded={0}
                borderBottomWidth={4}
                borderBottomColor={
                  router.pathname === "/" ? colors.selected : colors.notSelected
                }
                //colorScheme="twitter"

                _hover={{ bg: "transparent" }}
                _active={{ bg: "transparent" }}
                _focus={{ outline: "none" }} //colorScheme="white"
              >
                About
              </Button>
            </NextLink>
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
              <NextLink href="/">
                <Button
                  colorScheme="transparent"
                  onClick={onToggle}
                  color="white"
                  _focus={{ outline: "none" }} //colorScheme="white"
                >
                  About
                </Button>
              </NextLink>

              <NextLink href="/career">
                <Button
                  onClick={onToggle}
                  colorScheme="transparent"
                  color="white"
                  _focus={{ outline: "none" }} //colorScheme="white"
                >
                  Career
                </Button>
              </NextLink>

              <NextLink href="/projects">
                <Button
                  onClick={onToggle}
                  colorScheme="transparent"
                  color="white"
                  _focus={{ outline: "none" }} //colorScheme="white"
                >
                  Projects
                </Button>
              </NextLink>

              <NextLink href="/skills">
                <Button
                  onClick={onToggle}
                  colorScheme="transparent"
                  color="white"
                  _focus={{ outline: "none" }} //colorScheme="white"
                >
                  Skills
                  <Badge colorScheme="purple" ml={1}>
                    new
                  </Badge>
                </Button>
              </NextLink>
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
