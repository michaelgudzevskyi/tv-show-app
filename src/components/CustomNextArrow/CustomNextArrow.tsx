import { FC } from 'react';
import './styles.scss';

export const CustomNextArrow: FC = (props: any) => {
  const { onClick } = props;
  return (
    <div className="custom-slick-next" onClick={onClick} aria-hidden="true" />
  );
};
