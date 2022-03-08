import { Text } from "@chakra-ui/react";
import { ReactNode } from "react";

interface H2Props {
  children: ReactNode;
}

export function H2({ children }: H2Props) {
  return (
    <Text as={"h1"} fontSize={["lg", "xl"]} fontWeight="bold" my={2}>
      {children}
    </Text>
  );
}
