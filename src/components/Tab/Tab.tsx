import { FC } from 'react';
import { Tab, Tabs as TabsComponent, TabList, TabPanel } from 'react-tabs';

export const CustomTab: FC = () => {
  return (
    <TabsComponent>
      <TabList>
        <Tab>1</Tab>
        <Tab>2</Tab>
        <Tab>3</Tab>
      </TabList>
      <TabPanel>Body 1 </TabPanel>
      <TabPanel>Body 2 </TabPanel>
      <TabPanel>Body 3 </TabPanel>
    </TabsComponent>
  );
};
