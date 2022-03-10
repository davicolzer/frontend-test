import Link, { LinkProps } from "next/link"
import { Link as ChakraLink } from "@chakra-ui/react";
import { ReactNode } from "react"

interface NavLinkProps extends LinkProps{
  children: ReactNode
  href: string;
}

export function NavLink({children, href}:NavLinkProps){
  return(
    <Link href={href} passHref>
      <ChakraLink>
        {children}
      </ChakraLink>
    </Link>
  )
}