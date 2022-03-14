import { Stack } from "@chakra-ui/react";
import { Content } from "../../Templates/Content";
import { H2 } from "../../components/Form/H2";
import { Main } from "../../components/Main";
import { HomeButtons } from "../../components/DashboardButtons";
import { Table } from "../../components/Table";
import { useEffect, useState } from "react";

export default function Dashboard() {
  const [columns, setColumns] = useState<string[]>();
  const [data, setData] = useState<{}[]>();

  useEffect(()=>{
    setColumns([
      "Nome do item",
      "Solicitante",
      "Prazo",
      "Valor",
      "Ações"
    ])
    setData([
      {
        name: "Bolsa",
        requester: "Davi Colzer Lira",
        deadline: new Date(2022, 2, 28),
        valor: 50
      }
    ])

    
  },[])

  return (
    <Content titlePage={`Dashboard`}>
      <Main>
        <HomeButtons />
        <Stack>
          <H2>Compras Recentes</H2>
          <Table columns={columns} rows={data} />
        </Stack>
      </Main>
    </Content>
  );
}
