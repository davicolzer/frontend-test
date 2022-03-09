import { Text, TextProps } from "@chakra-ui/react";

interface LogoProps extends TextProps {}

export function Logo({ ...rest }: LogoProps) {
  return (
    <Text
      fontSize={["2xl", "3xl"]}
      fontWeight="bold"
      letterSpacing="wide"
      color={"purple.600"}
      w={"64"}
      {...rest}
    >
      Bought_it
    </Text>
  );
}
