import { Button, Tbody, Td, Tr } from "@chakra-ui/react";

interface TableBodyProps{
  rows?: {}[];
}
export function TableBody({rows}: TableBodyProps) {
  return (
    <Tbody>
      <Tr>
        <Td>Bolsa</Td>
        <Td>Davi Colzer Lira</Td>
        <Td>
          {new Date(2022, 2, 28).toLocaleDateString("pt-BR", {
            day: "2-digit",
            month: "2-digit",
            year: "numeric",
          })}
        </Td>
        <Td>
          {Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL",
          }).format(50)}
        </Td>
        <Td>
          <Button colorScheme={"purple"}>Editar</Button>
        </Td>
      </Tr>
    </Tbody>
  );
}
