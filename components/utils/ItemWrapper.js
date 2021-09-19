import { ListItem, ListIcon, Box, HStack } from "@chakra-ui/react";
import { InfoIcon, ChevronRightIcon } from "@chakra-ui/icons";

import { useRouter } from "next/router";
export default function ItemWrapper({ value }) {
  const router = useRouter();
  return (
    <ListItem>
      <HStack alignItems="flex-start">
        <ListIcon as={ChevronRightIcon} color="green.500" mt={0.5} />
        <Box
          fontFamily={
            router.locale === "en-US"
              ? "Montserrat , sans-serif"
              : "Tajawal, sans-serif"
          }
        >
          {value}
        </Box>
      </HStack>
    </ListItem>
  );
}
