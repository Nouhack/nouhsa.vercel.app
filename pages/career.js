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
  Box,
  HStack,
} from "@chakra-ui/react";
import Head from "next/head";
import ItemWrapper from "../components/utils/ItemWrapper";
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
              <Text fontSize={18}>2021</Text>
              <List spacing={5} pl={10}>
                <ItemWrapper
                  value="Im still improving My nextJS skills as a React FullStack
                  developer"
                />

                <ItemWrapper
                  value="Learn how to implement cloudinary as a third party persistent
                  file storage service"
                />
                <ItemWrapper
                  value="Learn better way for styling components in react so i went
                      with chakra-ui library by the way this portfolio is styled
                      using chakra-ui"
                />
                <ItemWrapper
                  value="Learn how to implement Authentication to nextJS projects , so
                  i did it using NextAuth Library for both JWT Auth or DataBase
                  Session"
                />
                <ItemWrapper value="Learn Prisma ORM" />
                {/* You can also use custom icons from react-icons */}
                <ItemWrapper value="Learn next js framwork" />
              </List>
              <Text fontSize={18}>2020</Text>

              <List spacing={5} pl={10}>
                <ItemWrapper
                  value=" Developing mobile app with react native was a nightmare for my
                  pc because is so week 😑 6gb memory i3 2cores 😑 so i focused
                  to improve the web side skills."
                />

                <ItemWrapper
                  value="Learning react js without adding react native was a waste of
                  power for me so i jumped into react native i learned both with
                  EXPO or with pure CLI"
                />
                <ItemWrapper
                  value="Learn how to integrade and add some backend services for my
                  react web apps where i went with firebase"
                />

                <ItemWrapper
                  value="I spended
                  a lot of time learning javascript and React js library, css ,
                  html ,bootstrap every day for almost 7 hours per day."
                />
                <ItemWrapper
                  value="After my graduation i falled in love with React after reading
                  and understanding the workflow of that library i was like damn
                  that my future 😆."
                />
                <ItemWrapper
                  value="I forgot
                  to mention that I was a promotion major all the years and i
                  was able to get the highest degree for my end of studies
                  project -- where i got 17/20 points"
                />

                <ItemWrapper
                  value="Created end of studies project Application with java and MySQL
                  database based on the thesis where the app was management of
                  the documentation generation"
                />

                <ItemWrapper
                  value=" Created end of studies project thesis using my knowledge that
                  i got from my last training where i uses UML for modeling"
                />
                <ItemWrapper
                  value="This year was the turning point of my career where i done many
                  great things"
                />
                {/* You can also use custom icons from react-icons */}
                <ItemWrapper
                  value="I
                  attended a one-week professional training about object
                  oriented analysis and design Using Uml at IT-COMP company"
                />
              </List>
              <Text fontSize={18}>2019</Text>
              <List spacing={5} pl={10}>
                <ItemWrapper
                  value="learning how to create desktop app using javaFx and i created
                  some Application consuming free apis"
                />
                <ItemWrapper
                  value="2 years
                  passed and i i'm still unstable searching my comfort area in
                  tech and that time i choosed java SE"
                />
              </List>
              <Text fontSize={18}>2018</Text>
              <List spacing={3} pl={10}>
                {/* You can also use custom icons from react-icons */}
                <ItemWrapper
                  value="I decided
                  to move on and learn something heavy, i took the challenge and
                  went with Django"
                />

                <ItemWrapper
                  value="I joined
                  professional formation center and subscribe for computer
                  science and database option specialty"
                />
              </List>
              <Text fontSize={18}>2017</Text>
              <List spacing={5} pl={10}>
                <ItemWrapper
                  value="Create some beginner Desktop Projects using Tkinter Library
                  and kivy for mobile apps"
                />

                {/* You can also use custom icons from react-icons */}
                <ItemWrapper value="My self learning begin with learning python fundamentals" />
              </List>
              <Text fontSize={18}>2014 - 2017</Text>
              <List spacing={5} pl={10}>
                <ItemWrapper
                  value="I
                  Abandoned université because my injury and because my
                  université spacialité that i didn't like and it was science of
                  matter"
                />
                {/* You can also use custom icons from react-icons */}
                <ItemWrapper value="Worst years of my life where i got sick with hernia discal" />
              </List>
              <Text fontSize={18}>2014</Text>
              <List spacing={5} pl={10}>
                <ItemWrapper value=" Obtaining my baccalaureate Degree" />
              </List>
            </Stack>
          </Stack>
        </Stack>
      </Container>
    </>
  );
}
