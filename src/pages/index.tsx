import { Box, Button, Flex, FormLabel, Stack } from "@chakra-ui/react";
import { Card } from "../components/Card";
import { Input } from "../components/Form/Input";
import { Logo } from "../components/Header/Logo";

export default function Home() {
  return (
    <Flex w={"100vw"} h={"100vh"} align={"center"} justify={"center"}>
      <Card as={"form"} maxWidth={360} width={"100%"} flexDir={"column"} >
        <Stack spacing={6}>
        <Logo />
          <Input
            name={"email"}
            type={"email"}
            label={"E-mail"}
            variant={"flushed"}
          />
          <Input
            name={"password"}
            type={"password"}
            label={"Password"}
            variant={"flushed"}
          />
          <Button
            type={"submit"}
            size={"lg"}
            colorScheme={"purple"}
            // isLoading
          >
            Login
          </Button>
        </Stack>
      </Card>
    </Flex>
  );
}
