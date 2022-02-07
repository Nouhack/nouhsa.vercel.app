import {
  Stack,
  Divider,
  Text,
  Center,
  Heading,
  List,
  Container,
} from "@chakra-ui/react";
import Head from "next/head";
import ItemWrapper from "../components/utils/ItemWrapper";

import * as item from "../data/CareerIntroduction";

export default function career() {
  return (
    <>
      <Head>
        <title>Developer carrer</title>
        <meta
          name="description"
          content="I attended a one-week professional training about object oriented analysis and design Using Uml at IT-COMP company
"
        />
      </Head>
      <Container maxWidth={{ base: "100%", lg: "45em" }}>
        <Stack h="100vh" direction="column" spacing="20px">
          <Stack direction="row" p={4} spacing={2}>
            <Stack direction="column">
              <Text
                fontSize={20}
                fontWeight="bold"
                style={{
                  textAlign: "center",
                  padding: 10,
                  borderBottom: "5px solid transparent",
                  borderImage:
                    "linear-gradient(to right, #6ee7b7 ,#3b82f6, #9333ea)",

                  borderImageSlice: 1,
                }}
              >
                2022
              </Text>
              <List spacing={5} pl={10} pt={8} textAlign="left">
                <ItemWrapper value={item.enVar32} />
                <ItemWrapper value={item.enVar31} />
                <ItemWrapper value={item.enVar30} />
              </List>

              <Text
                fontSize={20}
                fontWeight="bold"
                style={{
                  textAlign: "center",
                  padding: 10,
                  borderBottom: "5px solid transparent",
                  borderImage:
                    "linear-gradient(to right, #6ee7b7 ,#3b82f6, #9333ea)",

                  borderImageSlice: 1,
                }}
              >
                2021
              </Text>
              <List spacing={5} pl={10} pt={8} textAlign="left">
                <ItemWrapper value={item.enVar29} />
                <ItemWrapper value={item.enVar28} />
                <ItemWrapper value={item.enVar27} />
                <ItemWrapper value={item.enVar26} />
                <ItemWrapper value={item.enVar25} />
                <ItemWrapper value={item.enVar24} />
                <ItemWrapper value={item.enVar23} />
                <ItemWrapper value={item.enVar22} />
                <ItemWrapper value={item.enVar21} />
                {/* You can also use custom icons from react-icons */}
                <ItemWrapper value={item.enVar20} />
              </List>
              <Text
                fontSize={20}
                fontWeight="bold"
                style={{
                  textAlign: "center",
                  padding: 10,
                  borderBottom: "5px solid transparent",
                  borderImage:
                    "linear-gradient(to right, #6ee7b7 ,#3b82f6, #9333ea)",

                  borderImageSlice: 1,
                }}
              >
                2020
              </Text>

              <List spacing={5} pl={10} pt={8} textAlign="left">
                <ItemWrapper value={item.enVar19} />
                <ItemWrapper value={item.enVar17} />
                <ItemWrapper value={item.enVar16} />
                <ItemWrapper value={item.enVar15} />
                <ItemWrapper value={item.enVar14} />
                <ItemWrapper value={item.enVar13} />
                <ItemWrapper value={item.enVar12} />
                <ItemWrapper value={item.enVar11} />
                <ItemWrapper value={item.enVar10} />
              </List>

              <Text
                fontSize={20}
                fontWeight="bold"
                style={{
                  textAlign: "center",
                  padding: 10,
                  borderBottom: "5px solid transparent",
                  borderImage:
                    "linear-gradient(to right, #6ee7b7 ,#3b82f6, #9333ea)",

                  borderImageSlice: 1,
                }}
              >
                2019
              </Text>
              <List spacing={5} pl={10} pt={8} textAlign="left">
                <ItemWrapper value={item.enVar9} />
                <ItemWrapper value={item.enVar8} />
              </List>
              <Text
                fontSize={20}
                fontWeight="bold"
                style={{
                  textAlign: "center",
                  padding: 10,
                  borderBottom: "5px solid transparent",
                  borderImage:
                    "linear-gradient(to right, #6ee7b7 ,#3b82f6, #9333ea)",

                  borderImageSlice: 1,
                }}
              >
                2018
              </Text>
              <List spacing={3} pl={10} pt={8} textAlign="left">
                <ItemWrapper value={item.enVar7} />
                <ItemWrapper value={item.enVar6} />
              </List>

              <Text
                fontSize={20}
                fontWeight="bold"
                style={{
                  textAlign: "center",
                  padding: 10,
                  borderBottom: "5px solid transparent",
                  borderImage:
                    "linear-gradient(to right, #6ee7b7 ,#3b82f6, #9333ea)",

                  borderImageSlice: 1,
                }}
              >
                2017
              </Text>
              <List spacing={5} pl={10} pt={8} textAlign="left">
                <ItemWrapper value={item.enVar5} />
                <ItemWrapper value={item.enVar4} />
              </List>

              <Text
                fontSize={20}
                fontWeight="bold"
                style={{
                  textAlign: "center",
                  padding: 10,
                  borderBottom: "5px solid transparent",
                  borderImage:
                    "linear-gradient(to right, #6ee7b7 ,#3b82f6, #9333ea)",

                  borderImageSlice: 1,
                }}
              >
                2014 - 2017
              </Text>
              <List spacing={5} pl={10} pt={8} textAlign="left">
                <ItemWrapper value={item.enVar3} />
                <ItemWrapper value={item.enVar2} />
              </List>

              <Text
                fontSize={20}
                fontWeight="bold"
                style={{
                  textAlign: "center",
                  padding: 10,
                  borderBottom: "5px solid transparent",
                  borderImage:
                    "linear-gradient(to right, #6ee7b7 ,#3b82f6, #9333ea)",

                  borderImageSlice: 1,
                }}
              >
                2014
              </Text>
              <List spacing={5} pl={10} pt={8} textAlign="left">
                <ItemWrapper value={item.enVar1} />
              </List>
            </Stack>
          </Stack>
        </Stack>
      </Container>
    </>
  );
}
