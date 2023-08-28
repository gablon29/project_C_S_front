import {
  Card,
  Title,
  Text,
  Flex,
  Table,
  TableRow,
  TableCell,
  TableHead,
  TableHeaderCell,
  TableBody,
  Badge,
  Button,
} from "@tremor/react";
import data from "../../../data/data.json";
import { useEffect, useState } from "react";

const colors = {
  innactive: "rose",
  active: "emerald",
};

export default function Lista() {
  const [state, setState] = useState([]);
  useEffect(() => {
    setState(data);
  }, []);

  return (
    <Card>
      <Flex justifyContent="start" className="space-x-2">
        <Title>Purchases</Title>
        <Badge color="gray">{state.length}</Badge>
      </Flex>
      <Text className="mt-2">Overview of this month's purchases</Text>

      <Table className="mt-6">
        <TableHead>
          <TableRow>
            <TableHeaderCell>Name</TableHeaderCell>
            <TableHeaderCell>Predica</TableHeaderCell>
            <TableHeaderCell>Fecha</TableHeaderCell>
            <TableHeaderCell>Amount</TableHeaderCell>
            <TableHeaderCell>Status</TableHeaderCell>
            <TableHeaderCell>Link</TableHeaderCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {state.map((item) => (
            <TableRow key={item.id}>
              <TableCell>{item.name}</TableCell>
              <TableCell style={{ fontFamily: "cursive", fontWeight: "" }}>
                {item.predica}
              </TableCell>
              <TableCell>{item.fechaDeCulto}</TableCell>
              <TableCell>{item.amount}</TableCell>
              <TableCell>
                <Badge color={colors[item.status]} size="xs">
                  {item.status}
                </Badge>
              </TableCell>
              <TableCell>
                <Button size="xs" variant="secondary" color="gray">
                  See details
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Card>
  );
}
