import { Card, Title, Badge } from "@tremor/react";
import PropTypes from "prop-types";

const DetailComp = ({ name, last_name }) => {
  return (
    <Card>
      <Title>Detalles del Pastor</Title>
      <Card>
        <Title>Nombre: {name}</Title>
        <Title>Nombre: {last_name}</Title>
      </Card>
    </Card>
  );
};
DetailComp.propTypes = {
  name: PropTypes.string.isRequired,
  last_name: PropTypes.string.isRequired,
};
export default DetailComp;
