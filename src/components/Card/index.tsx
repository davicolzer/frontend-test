import { Flex, FlexProps } from "@chakra-ui/react";
import { ReactElement, ReactNode } from "react";

interface CardProps extends FlexProps {
  children?: ReactNode;
}

export function Card({ children, ...rest }: CardProps) {
  return (
    <Flex
      boxShadow={"xl"}
      bg={"white"} 
      p={8}
      borderRadius={8}
      {...rest}
    >
      {children}
    </Flex>
  );
}
