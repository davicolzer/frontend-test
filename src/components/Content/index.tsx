import { Box, BoxProps } from "@chakra-ui/react";
import Head from "next/head";
import { ReactNode } from "react";

interface ContentProps extends BoxProps {
  titlePage: string;
  children: ReactNode;
}

export default function Content({
  titlePage,
  children,
  ...rest
}: ContentProps) {
  return (
    <>
      <Head>{!!titlePage && <title>{`Bought_it | ${titlePage}`}</title>}</Head>
      <Box
        flex={1}
        maxWidth={1480}
        px={6}
        mx={"auto"}
        {...rest}
      >
        {children}
      </Box>
    </>
  );
}
