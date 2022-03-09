import { Box, Flex, ListItem, UnorderedList } from "@chakra-ui/react";
import { Logo } from "../Logo";

export function Sidebar() {
  return (
    <Box w={"300px"}>
      <Logo my={10}/>
      <UnorderedList>
        <ListItem>Dashboard</ListItem>
      </UnorderedList>
    </Box>
  );
}
