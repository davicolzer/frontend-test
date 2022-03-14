import { HStack, Img, Text, StackProps } from "@chakra-ui/react";
import { LogoIcon } from "../../imagens";

interface LogoProps extends StackProps {
  showText?: boolean;
}

export function Logo({ showText = true, ...rest }: LogoProps) {
  console.log(LogoIcon);
  return (
    <HStack spacing={2} {...rest}>
      <Img src={LogoIcon.src} alt="bought_it" width={16} borderRadius={"xl"} />
      <Text
        display={showText ? "block" : "none"}
        fontSize={["2xl", "3xl"]}
        fontWeight="bold"
        letterSpacing="wide"
        color={"purple.500"}
        w={"64"}
      >
        Bought_it
      </Text>
    </HStack>
  );
}
