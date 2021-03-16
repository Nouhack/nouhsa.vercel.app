import { ListItem, ListIcon, Box, HStack } from "@chakra-ui/react";
import { InfoIcon, ChevronRightIcon } from "@chakra-ui/icons";

export default function ItemWrapper({ value }) {
  return (
    <ListItem>
      <HStack alignItems="flex-start">
        <ListIcon as={ChevronRightIcon} color="green.500" mt={0.5} />
        <Box>{value}</Box>
      </HStack>
    </ListItem>
  );
}
