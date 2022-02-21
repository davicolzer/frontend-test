import { Flex, Text } from "@chakra-ui/react";
import { Card } from "../Card";
import Logo from "./Logo";

export default function Header() {
  return (
    <Flex
    as="header"
    color={"white"}
    w="100%"
    maxWidth="1480"
    mx="auto"
    mt="4"
    px="6"
    align="center"
    >
      <Logo />
    </Flex>
  );
}
