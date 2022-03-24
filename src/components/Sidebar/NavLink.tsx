import Link from "next/link";
import { Icon, Text, Link as ChakraLink, LinkProps } from "@chakra-ui/react";
import { ElementType, ReactNode } from "react";

interface NavLinkProps extends LinkProps {
  children: ReactNode;
  icon: ElementType;
  href: string;
  isMenuOpen: boolean;
}

export function NavLink({
  children,
  href,
  icon,
  isMenuOpen = false,
  ...rest
}: NavLinkProps) {
  return (
    <Link href={href} passHref>
      <ChakraLink
        display={"flex"}
        alignItems={"center"}
        fontWeight={"bold"}
        fontSize={"md"}
        color={"purple.700"}
        p={5}
        borderRadius={"md"}
        _hover={{ bg: "purple.50" }}
        {...rest}
      >
        <Icon as={icon} fontSize={"2xl"} />
        <Text ml={4} display={isMenuOpen? "block": "none"}>
          {children}
        </Text>
      </ChakraLink>
    </Link>
  );
}
