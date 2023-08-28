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
import KpiCard from "../kpiCard/KpiCard";
import date from "../../../data/data.json";

const Overview = () => {
  return (
    <main>
      <Title style={{ color: "black", fontWeight: "bold" }}>Dashboard</Title>
      <Text>tabla de detalles de ingresos</Text>
      <TabGroup className="mt-6">
        <TabList>
          <Tab>Overview</Tab>
          <Tab>Details</Tab>
        </TabList>
        <TabPanels style={{ padding: "10px" }}>
          <TabPanel>
            <Grid numItemsMd={2} numItemsLg={3} className="gap-3 mt-6">
              {date.map(({ id, metric, target, progress, deltaType }) => (
                <KpiCard
                  key={id}
                  metric={metric}
                  target={target}
                  progress={progress}
                  deltaType={deltaType}
                />
              ))}
            </Grid>
            <div className="mt-6">
              <Card>
                <div className="h-80" />
              </Card>
            </div>
          </TabPanel>
          <TabPanel>
            <div className="mt-6">
              <Card>
                <div className="h-96" />
              </Card>
            </div>
          </TabPanel>
        </TabPanels>
      </TabGroup>
    </main>
  );
};

export default Overview;
