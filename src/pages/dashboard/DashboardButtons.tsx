import { Button, HStack, SimpleGrid, Text } from "@chakra-ui/react";
import { Card } from "../../components/Card";

export function HomeButtons() {
  return (
    <>
      <SimpleGrid flex={1} columns={2} gap={6} alignItems="flex-start">
        <Button colorScheme={"purple"}>Adicionar compra</Button>
        <Button colorScheme={"purple"}>Adicionar compra</Button>
      </SimpleGrid>
    </>
  );
}
