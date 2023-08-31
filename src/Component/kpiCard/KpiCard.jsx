import {
  BadgeDelta,
  Card,
  Flex,
  Metric,
  ProgressBar,
  Text,
} from "@tremor/react";
import PropTypes from "prop-types";

// eslint-disable-next-line react/prop-types
const KpiCard = ({ id, metric, target, progress, deltaType }) => {
  const trunctate = (metric, target) => {
    let valor = (parseInt(metric) * 100) / parseInt(target);
    return valor;
  };
  const valorTruncate = trunctate(metric, target);

  return (
    <Card key={id}>
      <Flex alignItems="start">
        <div>
          <Text>Sales</Text>
          <Metric>{metric}</Metric>
        </div>
        <BadgeDelta deltaType={deltaType}>{progress}</BadgeDelta>
      </Flex>
      <Flex className="mt-4">
        <Text className="truncate">
          {valorTruncate}% ({metric})
        </Text>
        <Text>${target}</Text>
      </Flex>
      <ProgressBar value={valorTruncate} className="mt-2"></ProgressBar>
    </Card>
  );
};

KpiCard.propTypes = {
  id: PropTypes.string.isRequired,
  metric: PropTypes.string.isRequired,
  target: PropTypes.string.isRequired,
  progress: PropTypes.string.isRequired,
  deltaType: PropTypes.string.isRequired,
};

export default KpiCard;
