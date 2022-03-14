import { Collapse, Flex, IconButton } from "@chakra-ui/react";
import { Logo } from "../Logo";
import { NavLink } from "./NavLink";
import { NavSection } from "./NavSection";
import { RiDashboardFill } from "react-icons/ri";
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from "react-icons/fa";
import { BiLogOut } from "react-icons/bi";
import { FaBoxes } from "react-icons/fa";
import { useState } from "react";
import { OpenMenuIcon } from "./OpenMenuIcon";

export function Sidebar() {
  const [opened, setOpened] = useState(true);
  return (
    <Flex direction={"column"} as={"nav"} p={6} bg={"white"} h={"100vh"}>
        <Flex mb={4} alignItems={"center"} justifyContent={"space-between"}>
          <Logo showText={opened} />
          <OpenMenuIcon opened={opened} setOpened={setOpened} />
        </Flex>
        <NavSection>
          <NavLink
            isMenuOpen={opened}
            icon={RiDashboardFill}
            href={"/dashboard"}
          >
            Dashboard
          </NavLink>
          <NavLink isMenuOpen={opened} icon={FaBoxes} href={"/compras"}>
            Compras
          </NavLink>
        </NavSection>
        <NavSection mt={"auto"}>
          <NavLink isMenuOpen={opened} icon={BiLogOut} href={""}>
            Logout
          </NavLink>
        </NavSection>
    </Flex>
  );
}
