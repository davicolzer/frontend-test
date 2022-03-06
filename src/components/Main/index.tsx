import { Box, Flex, FlexProps, Text } from "@chakra-ui/react";
import { ReactNode } from "react";

interface MainProps extends FlexProps {
  children?: ReactNode;
  titlePage: string;
}

export default function Main({ children, titlePage, ...rest }: MainProps) {
  return (
    <Box as={"main"} m={4} {...rest}>
      <Text as={"h1"} fontSize={["2xl", "3xl"]} fontWeight="bold" my={2}>
        {titlePage}
      </Text>
      {children}
    </Box>
  );
}
