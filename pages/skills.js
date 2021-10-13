import Head from "next/head";
import {
  Center,
  Box,
  Stack,
  Text,
  Divider,
  VStack,
  ListItem,
  List,
  ListIcon,
} from "@chakra-ui/react";
import { ChevronRightIcon } from "@chakra-ui/icons";
export default function Skills() {
  return (
    <>
      <Head>
        <title>Skills</title>
        <meta
          name="description"
          content="React js , React native , Express js , Node js , MongoDB , MySQL , Prisma ORM"
        />
      </Head>
      <Box
        h={{ base: "100%", lg: "88vh" }}
        d="flex"
        alignItems="center"
        justifyContent="center"
      >
        <Stack direction={{ base: "column", lg: "row" }} w="100%" spacing={0}>
          <VStack
            w="100%"
            textAlign="start"
            alignItems="flex-start"
            //    bg="blue"
            p={4}
            spacing={5}
          >
            <Center w="100%">
              <Text fontWeight="bold">Front End</Text>
            </Center>
            <List spacing={3} fontFamily="Comic Sans MS">
              <ListItem>
                <ListIcon as={ChevronRightIcon} color="green.500" />
                html
              </ListItem>
              <ListItem>
                <ListIcon as={ChevronRightIcon} color="green.500" />
                css
              </ListItem>
              <ListItem>
                <ListIcon as={ChevronRightIcon} color="green.500" />
                ejs
              </ListItem>
              <ListItem>
                <ListIcon as={ChevronRightIcon} color="green.500" />
                javascript
              </ListItem>
              {/* You can also use custom icons from react-icons */}
              <ListItem>
                <ListIcon as={ChevronRightIcon} color="green.500" />
                react js
              </ListItem>

              <ListItem>
                <ListIcon as={ChevronRightIcon} color="green.500" />
                redux
              </ListItem>

              <ListItem>
                <ListIcon as={ChevronRightIcon} color="green.500" />
                chakra-ui
              </ListItem>

              <ListItem>
                <ListIcon as={ChevronRightIcon} color="green.500" />
                bootstrap
              </ListItem>

              <ListItem>
                <ListIcon as={ChevronRightIcon} color="green.500" />
                figma
              </ListItem>
              <ListItem>
                <ListIcon as={ChevronRightIcon} color="green.500" />
                Framer
              </ListItem>
              <ListItem>
                <ListIcon as={ChevronRightIcon} color="green.500" />
                And more
              </ListItem>
            </List>
          </VStack>
          <Divider
            display={{ base: "none", lg: "block" }}
            orientation="vertical"
            height="auto"
          />

          {/*  ================= */}
          <VStack
            w="100%"
            textAlign="start"
            alignItems="flex-start"
            p={4}
            spacing={5}
          >
            <Center w="100%">
              {" "}
              <Text fontWeight="bold">Back End</Text>
            </Center>
            <List spacing={3} fontFamily="Comic Sans MS">
              <ListItem>
                <ListIcon as={ChevronRightIcon} color="green.500" />
                node js
              </ListItem>
              <ListItem>
                <ListIcon as={ChevronRightIcon} color="green.500" />
                Express js
              </ListItem>
              <ListItem>
                <ListIcon as={ChevronRightIcon} color="green.500" />
                next js
              </ListItem>

              <ListItem>
                <ListIcon as={ChevronRightIcon} color="green.500" />
                firebase
              </ListItem>

              <ListItem>
                <ListIcon as={ChevronRightIcon} color="green.500" />
                next-auth
              </ListItem>
              {/* You can also use custom icons from react-icons */}
              <ListItem>
                <ListIcon as={ChevronRightIcon} color="green.500" />
                cloudinary
              </ListItem>

              <ListItem>
                <ListIcon as={ChevronRightIcon} color="green.500" />
                SQL databases
              </ListItem>

              <ListItem>
                <ListIcon as={ChevronRightIcon} color="green.500" />
                unified modeling language
              </ListItem>

              <ListItem>
                <ListIcon as={ChevronRightIcon} color="green.500" />
                prisma ORM
              </ListItem>
              <ListItem>
                <ListIcon as={ChevronRightIcon} color="green.500" />
                MongoDB
              </ListItem>
              <ListItem>
                <ListIcon as={ChevronRightIcon} color="green.500" />
                Deploy to paas
              </ListItem>
              <ListItem>
                <ListIcon as={ChevronRightIcon} color="green.500" />
                And more
              </ListItem>
            </List>
          </VStack>
          <Divider
            display={{ base: "none", lg: "block" }}
            orientation="vertical"
            height="auto"
          />
          {/*  =============== */}
          <VStack
            w="100%"
            textAlign="start"
            spacing={5}
            alignItems="flex-start"
            p={4}
          >
            <Center w="100%">
              {" "}
              <Text fontWeight="bold">Mobile dev</Text>
            </Center>
            <List spacing={3} j fontFamily="Comic Sans MS">
              <ListItem>
                <ListIcon as={ChevronRightIcon} color="green.500" />
                expo framwork
              </ListItem>

              <ListItem>
                <ListIcon as={ChevronRightIcon} color="green.500" />
                react native CLI
              </ListItem>

              <ListItem>
                <ListIcon as={ChevronRightIcon} color="green.500" />
                react navigation
              </ListItem>
              <ListItem>
                <ListIcon as={ChevronRightIcon} color="green.500" />
                Add Third part libraries
              </ListItem>
              <ListItem>
                <ListIcon as={ChevronRightIcon} color="green.500" />
                And more
              </ListItem>
            </List>
          </VStack>
          <Divider
            display={{ base: "none", lg: "block" }}
            orientation="vertical"
            height="auto"
          />
          {/*  =============== */}
          <VStack
            w="100%"
            textAlign="start"
            spacing={5}
            alignItems="flex-start"
            p={4}
          >
            <Center w="100%">
              {" "}
              <Text fontWeight="bold">Tools</Text>
            </Center>
            <List spacing={3} fontFamily="Comic Sans MS">
              <ListItem>
                <ListIcon as={ChevronRightIcon} color="green.500" />
                Vscode
              </ListItem>

              <ListItem>
                <ListIcon as={ChevronRightIcon} color="green.500" />
                Vim
              </ListItem>

              <ListItem>
                <ListIcon as={ChevronRightIcon} color="green.500" />
                Android Studio
              </ListItem>
              <ListItem>
                <ListIcon as={ChevronRightIcon} color="green.500" />
                Eclipse
              </ListItem>
              <ListItem>
                <ListIcon as={ChevronRightIcon} color="green.500" />
                MySQL Workbench
              </ListItem>
              <ListItem>
                <ListIcon as={ChevronRightIcon} color="green.500" />
                Linux Sytlem (Debian or redHat)
              </ListItem>
              <ListItem>
                <ListIcon as={ChevronRightIcon} color="green.500" />
                Google dev Tools
              </ListItem>
              <ListItem>
                <ListIcon as={ChevronRightIcon} color="green.500" />
                GitHub
              </ListItem>
              <ListItem>
                <ListIcon as={ChevronRightIcon} color="green.500" />
                Postman
              </ListItem>
              <ListItem>
                <ListIcon as={ChevronRightIcon} color="green.500" />
                Prisma Studio
              </ListItem>
              <ListItem>
                <ListIcon as={ChevronRightIcon} color="green.500" />
                And more
              </ListItem>
            </List>
          </VStack>
        </Stack>
      </Box>
    </>
  );
}
