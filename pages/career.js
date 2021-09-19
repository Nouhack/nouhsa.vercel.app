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
import { useRouter } from "next/router";

import * as item from "../data/CareerIntroduction";

export default function career() {
  const router = useRouter();

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
              {router.locale === "en-US" ? item.enVarTitle : item.arVarTitle}
            </Heading>
          </Center>
          <Stack direction="row" p={4} spacing={2}>
            <Divider orientation="vertical" />
            <Stack direction="column">
              <Text fontSize={18}>2021</Text>
              <List spacing={5} pl={10}>
                <ItemWrapper
                  value={
                    router.locale === "en-US" ? item.enVar25 : item.arVar25
                  }
                />

                <ItemWrapper
                  value={
                    router.locale === "en-US" ? item.enVar24 : item.arVar24
                  }
                />
                <ItemWrapper
                  value={
                    router.locale === "en-US" ? item.enVar23 : item.arVar23
                  }
                />
                <ItemWrapper
                  value={
                    router.locale === "en-US" ? item.enVar22 : item.arVar22
                  }
                />
                <ItemWrapper
                  value={
                    router.locale === "en-US" ? item.enVar21 : item.arVar21
                  }
                />
                {/* You can also use custom icons from react-icons */}
                <ItemWrapper
                  value={
                    router.locale === "en-US" ? item.enVar20 : item.arVar20
                  }
                />
              </List>
              <Text fontSize={18}>2020</Text>

              <List spacing={5} pl={10}>
                <ItemWrapper
                  value={
                    router.locale === "en-US" ? item.enVar19 : item.arVar19
                  }
                />

                <ItemWrapper
                  value={
                    router.locale === "en-US" ? item.enVar17 : item.arVar18
                  }
                />
                <ItemWrapper
                  value={
                    router.locale === "en-US" ? item.enVar16 : item.arVar16
                  }
                />

                <ItemWrapper
                  value={
                    router.locale === "en-US" ? item.enVar15 : item.arVar15
                  }
                />
                <ItemWrapper
                  value={
                    router.locale === "en-US" ? item.enVar14 : item.arVar14
                  }
                />
                <ItemWrapper
                  value={
                    router.locale === "en-US" ? item.enVar13 : item.arVar13
                  }
                />

                <ItemWrapper
                  value={
                    router.locale === "en-US" ? item.enVar12 : item.arVar12
                  }
                />

                <ItemWrapper
                  value={
                    router.locale === "en-US" ? item.enVar11 : item.arVar11
                  }
                />
                {/* You can also use custom icons from react-icons */}
                <ItemWrapper
                  value={
                    router.locale === "en-US" ? item.enVar10 : item.arVar10
                  }
                />
              </List>
              <Text fontSize={18}>2019</Text>
              <List spacing={5} pl={10}>
                <ItemWrapper
                  value={router.locale === "en-US" ? item.enVar9 : item.arVar9}
                />
                <ItemWrapper
                  value={router.locale === "en-US" ? item.enVar8 : item.arVar8}
                />
              </List>
              <Text fontSize={18}>2018</Text>
              <List spacing={3} pl={10}>
                {/* You can also use custom icons from react-icons */}
                <ItemWrapper
                  value={router.locale === "en-US" ? item.enVar7 : item.arVar7}
                />

                <ItemWrapper
                  value={router.locale === "en-US" ? item.enVar6 : item.arVar6}
                />
              </List>
              <Text fontSize={18}>2017</Text>
              <List spacing={5} pl={10}>
                <ItemWrapper
                  value={router.locale === "en-US" ? item.enVar5 : item.arVar5}
                />

                {/* You can also use custom icons from react-icons */}
                <ItemWrapper
                  value={router.locale === "en-US" ? item.enVar4 : item.arVar4}
                />
              </List>
              <Text fontSize={18}>2014 - 2017</Text>
              <List spacing={5} pl={10}>
                <ItemWrapper
                  value={router.locale === "en-US" ? item.enVar3 : item.arVar3}
                />
                {/* You can also use custom icons from react-icons */}
                <ItemWrapper
                  value={router.locale === "en-US" ? item.enVar2 : item.arVar2}
                />
              </List>
              <Text fontSize={18}>2014</Text>
              <List spacing={5} pl={10}>
                <ItemWrapper
                  value={router.locale === "en-US" ? item.enVar1 : item.arVar1}
                />
              </List>
            </Stack>
          </Stack>
        </Stack>
      </Container>
    </>
  );
}
