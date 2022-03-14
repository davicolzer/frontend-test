import { Stack, StackProps } from "@chakra-ui/react";
import { ReactNode } from "react";

interface NavSectionProps extends StackProps{
  children: ReactNode;
}

export function NavSection({children, ...rest}:NavSectionProps){
  return(
    <Stack spacing={2} {...rest}>
      {children}
    </Stack>
  )
}