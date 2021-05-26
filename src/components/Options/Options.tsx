import { FC } from 'react';
import { Tab, Tabs as TabsComponent, TabList, TabPanel } from 'react-tabs';
import iconShare from '../../assets/images/share-gray-s.svg';
import iconAdd from '../../assets/images/add-gray-s.svg';
import iconRec from '../../assets/images/rec-gray-s.svg';
import iconSad from '../../assets/images/sad-gray-w.svg';
import iconLogo from '../../assets/images/logo-telecine.svg';
import './styles.scss';

export const Options: FC = () => {
  return (
    <div className="options">
      <TabsComponent>
        <TabList>
          <Tab>GENERAL</Tab>
          <Tab>ELENCO</Tab>
          <Tab disabled>PRINCIPALES PREMIOS</Tab>
        </TabList>
        <TabPanel>
          <div className="options__general general">
            <div className="general__items">
              <div className="general__item">
                <img src={iconAdd} alt="icon" />
                <span>Mi Lista</span>
              </div>

              <div className="general__item">
                <img src={iconSad} alt="icon" />
                <span>Evaluar</span>
              </div>

              <div className="general__item">
                <img src={iconRec} alt="icon" />
                <span>Grabar</span>
              </div>

              <div className="general__item">
                <img src={iconShare} alt="icon" />
                <span>Compartir</span>
              </div>
            </div>

            <div className="general__info">
              <h4>Sinopse</h4>
              <p>
                Contos de personagens clássicos como Drácula, Frankenstein e
                Dorian Gray estão reunidos nesta série de terror ambientada nas
                ruas da Londres vitoriana.
              </p>
            </div>
          </div>
        </TabPanel>
        <TabPanel>Body 2 </TabPanel>
        <TabPanel></TabPanel>
      </TabsComponent>
      <img className="options__logo" src={iconLogo} alt="icon logo" />
    </div>
  );
};
