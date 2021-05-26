import { FC } from 'react';
import Collapsible from 'react-collapsible';
import iconPlay from 'assets/images/play-small-player-w.svg';
import { Player } from 'components';
import { EpisodeDTO } from './interfaces';
import './styles.scss';

export const Episode: FC<EpisodeDTO | any> = ({ episodeData }) => {
  return (
    <Collapsible
      open={false}
      trigger={
        <div className="episodes__item">
          <span className="episodes__title">
            {episodeData?.EpisodeNumber} {''}
            {episodeData?.Title}
          </span>
          <img src={iconPlay} alt="Icon Play" />
        </div>
      }
    >
      <Player src={episodeData?.Image} info={episodeData?.Synopsis} />
    </Collapsible>
  );
};
