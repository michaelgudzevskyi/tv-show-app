import { FC } from 'react';
import { Tab, Tabs as TabsComponent, TabList, TabPanel } from 'react-tabs';
import { RootStateOrAny, useSelector } from 'react-redux';
import { Episode } from 'components';

import './styles.scss';

export const Asside: FC = () => {
  const { episodes } = useSelector((state: RootStateOrAny) => state.episodes);

  const filterSeasons = (season: number) =>
    episodes
      .filter((e: any) => e?.SeasonNumber === season)
      .map((item: any) => item && <Episode key={item.ID} episodeData={item} />);

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
            <div className="episodes__items">{filterSeasons(1)}</div>
          </div>
        </TabPanel>
        <TabPanel>
          <div className="episodes">
            <div className="episodes__items">{filterSeasons(2)}</div>
          </div>
        </TabPanel>
        <TabPanel>
          <div className="episodes">
            <div className="episodes__items">{filterSeasons(3)}</div>
          </div>
        </TabPanel>
      </TabsComponent>
    </div>
  );
};
