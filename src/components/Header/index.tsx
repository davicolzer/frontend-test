import { Flex, Text } from "@chakra-ui/react";
import { Logo } from "./Logo";

interface HeaderProps {
  titlePage: string;
}

export function Header({ titlePage }: HeaderProps) {
  return (
    <Flex as="header" w="100%" my="4" align="center">
      <Text as={"h1"} fontSize={["2xl", "3xl"]} fontWeight="bold" my={2}>
        {titlePage}
      </Text>
    </Flex>
  );
}
