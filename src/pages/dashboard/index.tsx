import {
  Box,
  Button,
  Stack,
  Table,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import { Card } from "../../components/Card";
import { Content } from "../../Templates/Content";
import { H2 } from "../../components/Form/H2";
import { Main } from "../../components/Main";
import { Sidebar } from "../../components/Sidebar";

export default function Dashboard() {
  return (
    <Content titlePage={`Dashboard`}>
      <Main>
        <Stack>
          <H2>Compras Recentes</H2>
          <Card as={"div"}>
            <Table colorScheme={"purple"}>
              <Thead>
                <Tr>
                  <Th>Nome do item</Th>
                  <Th>Solicitante</Th>
                  <Th>Prazo</Th>
                  <Th>Valor</Th>
                  <Th></Th>
                </Tr>
              </Thead>
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
            </Table>
          </Card>
        </Stack>
      </Main>
    </Content>
  );
}
