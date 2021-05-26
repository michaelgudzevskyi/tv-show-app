import { FC } from 'react';
import Slider from 'react-slick';
import { CustomNextArrow } from 'components';
import './styles.scss';

export const Actors: FC<any> = ({ cast }) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 800,
    slidesToShow: cast?.length > 6 ? 6 : cast?.length,
    slidesToScroll: 2,
    initialSlide: 0,
    nextArrow: <CustomNextArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="actors">
      <Slider {...settings}>
        {cast?.map((actor: any, index: number) => (
          <div className="actor" key={index}>
            <div className="actor__wrapper">
              <p className="actor__name">{actor.Name}</p>
              <p className="actor__role">Atriz ou Ator</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};
