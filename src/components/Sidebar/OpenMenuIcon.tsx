import { IconButton } from "@chakra-ui/react";
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";
interface OpenMenuIconProps{
  opened: boolean;
  setOpened: any ;
}

export function OpenMenuIcon({opened, setOpened}: OpenMenuIconProps) {
  return (
    <IconButton
      aria-label={"Open Sidebar"}
      as={opened ? FaArrowAltCircleLeft : FaArrowAltCircleRight}
      size={"sm"}
      color={"purple.500"}
      borderRadius={"full"}
      mr={-9}
      onClick={() => {
        setOpened(!opened);
      }}
      _hover={{
        cursor: "pointer",
      }}
    />
  );
}
