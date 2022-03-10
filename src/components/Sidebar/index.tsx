import { Box, Flex, Stack, Text } from "@chakra-ui/react";
import Link from "next/link";
import { Logo } from "../Logo";
import { NavLink } from "./NavLink";
import { NavSection } from "./NavSection";

export function Sidebar() {
  return (
    <Box as={"nav"} w={230} px={6}>
      <Logo my={6} />
      <NavSection>
        <NavLink href={"/dashboard"}>Dashboard</NavLink>
        <NavLink href={"/compras"}>Compras</NavLink>
      </NavSection>
    </Box>
  );
}
