import { Card, Title, Badge } from "@tremor/react";

function DetailComp(props) {
  return (
    <Card>
      <Title>Detalles del Pastor</Title>
      <Card>
        <Title>Nombre: {props.name}</Title>
        <Title>Nombre: {props.last_name}</Title>
      </Card>
    </Card>
  );
}

export default DetailComp;
