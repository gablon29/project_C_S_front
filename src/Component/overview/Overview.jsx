import React from "react";
import {
  Card,
  Grid,
  Title,
  Text,
  Tab,
  TabList,
  TabGroup,
  TabPanel,
  TabPanels,
} from "@tremor/react";

const Overview = () => {
  return (
    <main>
      <Title>Dashboard</Title>
      <Text>tabla de detalles de ingresos</Text>
      <TabGroup className="mt-6"></TabGroup>
    </main>
  );
};

export default Overview;
