import { Text, TextProps } from "@chakra-ui/react";
import { ReactNode } from "react";

interface H2Props extends TextProps{
  children: ReactNode;
}

export function H2({ children, ...rest }: H2Props) {
  return (
    <Text as={"h1"} fontSize={["lg", "xl"]} fontWeight="bold" my={2} {...rest}>
      {children}
    </Text>
  );
}
