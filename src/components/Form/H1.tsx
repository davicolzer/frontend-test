import { Text, TextProps } from "@chakra-ui/react";
import { ReactNode } from "react";

interface H1Props extends TextProps{
  children: ReactNode;
}

export function H1({ children, ...rest }: H1Props) {
  return (
    <Text as={"h1"} fontSize={["2xl", "3xl"]} fontWeight="bold" my={2} {...rest}>
      {children}
    </Text>
  );
}
