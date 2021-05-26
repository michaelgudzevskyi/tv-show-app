import { FC } from 'react';
import Image from 'react-image-webp';
import './styles.scss';

export const Player: FC<any> = ({ src, info }) => {
  return (
    <div className="player">
      <div className="player__preview">
        <Image src={src} webp={src} />
        <div className="player__progress" />
      </div>

      <div className="player__synopsis">{info}</div>
    </div>
  );
};
