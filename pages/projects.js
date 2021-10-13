import Head from "next/head";

import {
  Stack,
  InputGroup,
  Text,
  InputRightElement,
  Center,
  Input,
  Flex,
  Box,
  Spacer,
  Container,
  ListIcon,
  ListItem,
  List,
} from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import { RiGitRepositoryLine } from "react-icons/ri";
import { useState } from "react";
import { dumData } from "../data/projectsData";

export default function career() {
  const [data, setdata] = useState(dumData);
  const [searchField, setsearchField] = useState("");

  return (
    <>
      <Head>
        <title>Developer projects</title>
        <meta
          name="description"
          content="vision is a mobile cross platforme application made with react native cli"
        />
      </Head>
      <Container maxWidth={{ base: "100%", lg: "45em" }}>
        <Stack direction="column" spacing="50px">
          <Center>
            <InputGroup size="md" w={{ base: "100%", md: "50%" }} mt={20}>
              <Input
                //
                placeholder="Search project"
                size="md"
                onChange={(e) => setsearchField(e.target.value)}
              />

              <InputRightElement>
                <SearchIcon />
              </InputRightElement>
            </InputGroup>
          </Center>
          <Stack direction="column" mb={10} p={4} spacing={10}>
            {/* ========== */}
            {data
              .filter((item, key) => {
                return item.title.includes(searchField);
              })
              .map((it) => {
                return (
                  <a href={it.githubLink} target="_blank" rel="noopener">
                    <Stack direction="column" spacing={3}>
                      <Stack direction={{ base: "column", md: "row" }}>
                        <Box w={{ base: "100%", md: "80%" }}>
                          <List spacing={3}>
                            <ListItem>
                              <Text
                                fontFamily="Comic Sans MS"
                                fontWeight="bold"
                              >
                                <ListIcon
                                  as={RiGitRepositoryLine}
                                  color="green.500"
                                />
                                {it.title}
                              </Text>
                            </ListItem>
                          </List>
                        </Box>
                        <Spacer display={{ base: "none", md: null }} />
                        <Flex
                          justifyContent={{ base: "flex-start", md: "center" }}
                          w={{ base: "100%", md: "20%" }}
                        >
                          <Text color="#4c4c4c">{it.technology} </Text>
                        </Flex>
                      </Stack>
                      <Box w="90%">
                        {" "}
                        <Text color="#4c4c4c" fontFamily="Comic Sans MS">
                          {it.body}
                        </Text>
                      </Box>
                    </Stack>
                  </a>
                );
              })}

            {/* ========== */}
          </Stack>
        </Stack>
      </Container>
    </>
  );
}
