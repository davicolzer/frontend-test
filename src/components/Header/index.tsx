import { Flex, Text } from "@chakra-ui/react";
import { H1 } from "../Form/H1";
import { Logo } from "../Logo";

interface HeaderProps {
  titlePage: string;
}

export function Header({ titlePage }: HeaderProps) {
  return (
    <Flex as="header" w="100%" my="4" align="center">
      <H1>
        {titlePage}
      </H1>
    </Flex>
  );
}
