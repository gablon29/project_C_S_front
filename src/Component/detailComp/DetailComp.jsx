import { Card, Title } from "@tremor/react";
import PropTypes from "prop-types";
import data from "../../../data/data.json";

const DetailComp = ({ id }) => {
  const pastor = data.filter((pastor) => pastor.id === id);
  return (
    <Card>
      <Title>Detalles del Pastor</Title>

      {pastor.map((pastor) => (
        <Card key={pastor.id}>
          <Title>Nombre: {pastor.name}</Title>
          <Title>Apellido: {pastor.last_name}</Title>
          <Title>Email: {pastor.email}</Title>
          <Title>Status: {pastor.status}</Title>
        </Card>
      ))}
    </Card>
  );
};
DetailComp.propTypes = {
  id: PropTypes.string.isRequired,
};
export default DetailComp;
