import { FC } from 'react';
import iconPlay from '../../assets/images/play-small-player-w.svg';
import { EpisodeDTO } from './interfaces';
import './styles.scss';

export const Episode: FC<EpisodeDTO | any> = ({ episodeData }) => {
  console.log('Title: ', episodeData);
  return (
    <div className="episodes__item">
      <span className="episodes__title">
        {episodeData?.EpisodeNumber} {''}
        {episodeData?.Title}
      </span>
      <img src={iconPlay} alt="Icon Play" />
    </div>
  );
};
