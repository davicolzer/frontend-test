import { Text } from "@chakra-ui/react";
import { ReactNode } from "react";

interface H1Props {
  children: ReactNode;
}

export function H1({ children }: H1Props) {
  return (
    <Text as={"h1"} fontSize={["2xl", "3xl"]} fontWeight="bold" my={2}>
      {children}
    </Text>
  );
}
