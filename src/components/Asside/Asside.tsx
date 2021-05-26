import { FC } from 'react';
import { Tab, Tabs as TabsComponent, TabList, TabPanel } from 'react-tabs';
import { RootStateOrAny, useSelector } from 'react-redux';
import { Episode } from 'components';

import './styles.scss';

export const Asside: FC = () => {
  const { episodes } = useSelector((state: RootStateOrAny) => state.episodes);
  console.log('episodes: ', episodes);

  return (
    <div className="asside">
      <TabsComponent>
        <TabList>
          <Tab>T1</Tab>
          <Tab>T2</Tab>
          <Tab>T3</Tab>
        </TabList>
        <TabPanel>
          <div className="episodes">
            <div className="episodes__items">
              {episodes &&
                episodes.map(
                  (item: any) =>
                    item && <Episode key={item.ID} episodeData={item} />,
                )}
            </div>
          </div>
        </TabPanel>
        <TabPanel>Body 2 </TabPanel>
        <TabPanel>Body 3</TabPanel>
      </TabsComponent>
    </div>
  );
};
