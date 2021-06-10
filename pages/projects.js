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
  Button,
  ListIcon,
  ListItem,
  List,
  HStack,
} from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import { RiGitRepositoryLine } from "react-icons/ri";
import { useState } from "react";
import { InfoIcon } from "@chakra-ui/icons";
import { dumData } from "../data/projectsData";
import { useRouter } from "next/router";

export default function career() {
  const [data, setdata] = useState(dumData);
  const [searchField, setsearchField] = useState("");
  const router = useRouter();

  return (
    <>
      <Head>
        <title>Developer projects</title>
      </Head>
      <Container maxWidth={{ base: "100%", lg: "45em" }}>
        <Stack direction="column" spacing="50px">
          <Center>
            <InputGroup size="md" w={{ base: "100%", md: "50%" }} mt={20}>
              <Input
                //
                placeholder={
                  router.locale === "en-US" ? "Search project" : "ابحث عن مشروع"
                }
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
                return router.locale === "en-US"
                  ? item.title.includes(searchField)
                  : item.atTitle.includes(searchField);
              })
              .map((it) => {
                return (
                  <a href={it.githubLink} target="_blank">
                    <Stack direction="column" spacing={3}>
                      <Stack direction={{ base: "column", md: "row" }}>
                        <Box w={{ base: "100%", md: "80%" }}>
                          <List spacing={3}>
                            <ListItem>
                              <Text>
                                <ListIcon
                                  as={RiGitRepositoryLine}
                                  color="green.500"
                                />
                                {router.locale === "en-US"
                                  ? it.title
                                  : it.atTitle}
                              </Text>
                            </ListItem>
                          </List>
                        </Box>
                        <Spacer display={{ base: "none", md: null }} />
                        <Flex
                          justifyContent={{ base: "flex-start", md: "center" }}
                          w={{ base: "100%", md: "20%" }}
                        >
                          <Text color="grey">{it.technology} </Text>
                        </Flex>
                      </Stack>
                      <Box w="90%">
                        {" "}
                        <Text color="grey">{it.body}</Text>
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
