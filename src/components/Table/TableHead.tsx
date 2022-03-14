import { Th, Thead, Tr } from "@chakra-ui/react";

interface TableHeadProps{
  columns?: Array<string>;
}

export function TableHead({columns}: TableHeadProps) {
  return (
    <Thead>
      <Tr>
        <Th>Nome do item</Th>
        <Th>Solicitante</Th>
        <Th>Prazo</Th>
        <Th>Valor</Th>
        <Th></Th>
      </Tr>
    </Thead>
  );
}
