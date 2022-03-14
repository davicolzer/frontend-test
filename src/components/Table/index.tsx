import {
  Table as ChakraTable,
  TableProps as ChakraTableProps,
} from "@chakra-ui/react";
import { Card } from "../Card";
import { TableBody } from "./TableBody";
import { TableHead } from "./TableHead";

interface TableProps extends ChakraTableProps {
  columns?: string[] ;
  rows?: {}[];
}

export function Table({ columns, rows }: TableProps) {
 
  return (
    <Card as={"div"}>
      <ChakraTable colorScheme={"purple"}>
        <TableHead columns={columns}/>
        <TableBody rows={rows}/>
      </ChakraTable>
    </Card>
  );
}
