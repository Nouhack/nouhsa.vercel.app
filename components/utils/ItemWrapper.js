import { ListItem, ListIcon, Box, HStack } from "@chakra-ui/react";
import { InfoIcon, ChevronRightIcon } from "@chakra-ui/icons";

import { useRouter } from "next/router";
export default function ItemWrapper({ value }) {
  const router = useRouter();
  return (
    <ListItem>
      <HStack alignItems="flex-start">
        <ListIcon as={ChevronRightIcon} color="green.500" mt={0.5} />
        <Box width="100%" color="#4c4c4c" fontFamily="comic Sans MS">
          {value}
        </Box>
      </HStack>
    </ListItem>
  );
}
