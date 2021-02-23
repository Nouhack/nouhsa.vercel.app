import {
  Stack,
  Divider,
  Text,
  Center,
  Heading,
  List,
  ListItem,
  ListIcon,
  Container,
} from "@chakra-ui/react";
import Head from "next/head";

import { InfoIcon } from "@chakra-ui/icons";
export default function career() {
  return (
    <>
      <Head>
        <title>Developer carrer</title>
      </Head>
      <Container maxWidth={{ base: "100%", lg: "45em" }}>
        <Stack h="100vh" direction="column" spacing="50px">
          <Center>
            <Heading
              mt={50}
              fontFamily="mono"
              size="lg"
              fontSize={["20px", "23px", "26px", "40px"]}
              mr="10px"
            >
              Timeline
            </Heading>
          </Center>
          <Stack direction="row" p={4} spacing={2}>
            <Divider orientation="vertical" />
            <Stack direction="column">
              <Text fontSize={20}>2021</Text>
              <List spacing={3} pl={10}>
                <ListItem>
                  <ListIcon as={InfoIcon} color="green.500" mb="3px" />
                  Im still improving My nextJS skills as a React FullStack
                  developer
                </ListItem>

                <ListItem>
                  <ListIcon as={InfoIcon} color="green.500" mb="3px" />
                  Learn how to implement cloudinary as a third party persistent
                  file storage service
                </ListItem>
                <ListItem>
                  <ListIcon as={InfoIcon} color="green.500" mb="3px" />
                  Learn better way for styling components in react so i went
                  with chakra-ui library by the way this portfolio is styled
                  using chakra-ui
                </ListItem>
                <ListItem>
                  <ListIcon as={InfoIcon} color="green.500" mb="3px" />
                  Learn how to implement Authentication to nextJS projects , so
                  i did it using NextAuth Library for both JWT Auth or DataBase
                  Session
                </ListItem>
                <ListItem>
                  {" "}
                  <ListIcon as={InfoIcon} color="green.500" mb="3px" />
                  Learn Prisma ORM
                </ListItem>
                {/* You can also use custom icons from react-icons */}
                <ListItem>
                  {" "}
                  <ListIcon as={InfoIcon} color="green.500" mb="3px" />
                  Learn next js framwork
                </ListItem>
              </List>
              <Text fontSize={20}>2020</Text>

              <List spacing={3} pl={10}>
                <ListItem>
                  <ListIcon as={InfoIcon} color="green.500" mb="3px" />
                  Developing mobile app with react native was a nightmare for my
                  pc because is so week 😑 6gb memory i3 2cores 😑 so i focused
                  to improve the web side skills.
                </ListItem>

                <ListItem>
                  <ListIcon as={InfoIcon} color="green.500" mb="3px" />
                  Learning react js without adding react native was a waste of
                  power for me so i jumped into react native i learned both with
                  EXPO or with pure CLI
                </ListItem>
                <ListItem>
                  <ListIcon as={InfoIcon} color="green.500" mb="3px" />
                  Learn how to integrade and add some backend services for my
                  react web apps where i went with firebase
                </ListItem>

                <ListItem>
                  <ListIcon as={InfoIcon} color="green.500" mb="3px" />I spended
                  a lot of time learning javascript and React js library, css ,
                  html ,bootstrap every day for almost 7 hours per day.
                </ListItem>
                <ListItem>
                  <ListIcon as={InfoIcon} color="green.500" mb="3px" />
                  After my graduation i falled in love with React after reading
                  and understanding the workflow of that library i was like damn
                  that my future 😆.
                </ListItem>
                <ListItem>
                  <ListIcon as={InfoIcon} color="green.500" mb="3px" />I forgot
                  to mention that I was a promotion major all the years and i
                  was able to get the highest degree for my end of studies
                  project -- where i got 17/20 points
                </ListItem>
                <ListItem>
                  <ListIcon as={InfoIcon} color="green.500" mb="3px" />
                  Created end of studies project Application with java and MySQL
                  database based on the thesis where the app was management of
                  the documentation generation
                </ListItem>
                <ListItem>
                  <ListIcon as={InfoIcon} color="green.500" mb="3px" />
                  Created end of studies project thesis using my knowledge that
                  i got from my last training where i uses UML for modeling
                </ListItem>
                <ListItem>
                  <ListIcon as={InfoIcon} color="green.500" mb="3px" />
                  This year was the turning point of my career where i done many
                  great things
                </ListItem>
                {/* You can also use custom icons from react-icons */}
                <ListItem>
                  <ListIcon as={InfoIcon} color="green.500" mb="3px" />I
                  attended a one-week professional training about object
                  oriented analysis and design Using Uml at IT-COMP company
                </ListItem>
              </List>
              <Text fontSize={20}>2019</Text>
              <List spacing={3} pl={10}>
                <ListItem>
                  <ListIcon as={InfoIcon} color="green.500" mb="3px" />
                  learning how to create desktop app using javaFx and i created
                  some Application consuming free apis
                </ListItem>
                <ListItem>
                  <ListIcon as={InfoIcon} color="green.500" mb="3px" />2 years
                  passed and i i'm still unstable searching my comfort area in
                  tech and that time i choosed java SE
                </ListItem>
              </List>
              <Text fontSize={20}>2018</Text>
              <List spacing={3} pl={10}>
                {/* You can also use custom icons from react-icons */}
                <ListItem>
                  <ListIcon as={InfoIcon} color="green.500" mb="3px" />I decided
                  to move on and learn something heavy, i took the challenge and
                  went with Django
                </ListItem>

                <ListItem>
                  <ListIcon as={InfoIcon} color="green.500" mb="3px" />I joined
                  professional formation center and subscribe for computer
                  science and database option specialty
                </ListItem>
              </List>
              <Text fontSize={20}>2017</Text>
              <List spacing={3} pl={10}>
                <ListItem>
                  <ListIcon as={InfoIcon} color="green.500" mb="3px" />
                  Create some beginner Desktop Projects using Tkinter Library
                  and kivy for mobile apps
                </ListItem>

                {/* You can also use custom icons from react-icons */}
                <ListItem>
                  <ListIcon as={InfoIcon} color="green.500" mb="3px" />
                  My self learning begin with learning python fundamentals
                </ListItem>
              </List>
              <Text fontSize={20}>2014 - 2017</Text>
              <List spacing={3} pl={10}>
                <ListItem>
                  <ListIcon as={InfoIcon} color="green.500" mb="3px" />I
                  Abandoned université because my injury and because my
                  université spacialité that i didn't like and it was science of
                  matter
                </ListItem>
                {/* You can also use custom icons from react-icons */}
                <ListItem>
                  <ListIcon as={InfoIcon} color="green.500" mb="3px" />
                  Worst years of my life where i got sick with hernia discal
                </ListItem>
              </List>
              <Text fontSize={20}>2014</Text>
              <List spacing={3} pl={10}>
                <ListItem>
                  {" "}
                  <ListIcon as={InfoIcon} color="green.500" mb="3px" />
                  Obtaining my baccalaureate Degree
                </ListItem>
              </List>
            </Stack>
          </Stack>
        </Stack>
      </Container>
    </>
  );
}
