import { Flex, FlexProps } from "@chakra-ui/react";
import { ReactNode } from "react";

interface MainProps extends FlexProps {
  children?: ReactNode;
}

export default function Main({ children,...rest }: MainProps) {
  return (
    <Flex
      as={"main"}
      flex={1}
      maxWidth={1480}
      bg={"white"}
      px={6}
      my={6}
      borderRadius={8}
      mx={"auto"}
      {...rest}
    >
      {children}
    </Flex>
  );
}
