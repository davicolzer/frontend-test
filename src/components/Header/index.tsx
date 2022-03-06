import { Flex, Text } from "@chakra-ui/react";
import Logo from "./Logo";

export default function Header() {
  return (
    <Flex
      as="header"
      w="100%"
      my="4"
      px="6"
      align="center"
    >
      <Logo />
    </Flex>
  );
}
