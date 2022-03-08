import { Box, BoxProps, Flex, Text } from "@chakra-ui/react";
import { ReactNode } from "react";

interface MainProps extends BoxProps {
  children?: ReactNode;
}

export function Main({ children, ...rest }: MainProps) {
  return (
    <Box as={"main"} m={4} {...rest}>
      {children}
    </Box>
  );
}
