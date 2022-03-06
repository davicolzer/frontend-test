import { Flex, FlexProps } from "@chakra-ui/react";
import { ReactElement, ReactNode } from "react";

interface CardProps extends FlexProps {
  children?: ReactNode;
}

export function Card({ children, ...rest }: CardProps) {
  return (
    <Flex
      borderRadius={8}
      p={8}
      {...rest}
    >
      {children}
    </Flex>
  );
}
