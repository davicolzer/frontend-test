import { Stack } from "@chakra-ui/react";
import { ReactNode } from "react";

interface NavSectionProps{
  children: ReactNode;
}

export function NavSection({children}:NavSectionProps){
  return(
    <Stack spacing={4} align={"stretch"}>
      {children}
    </Stack>
  )
}