import { useEffect } from 'react';
import { RootStateOrAny, useDispatch, useSelector } from 'react-redux';
import { Creators as PreviewCreators } from 'store/ducks/preview';
import { Options, Asside } from '../../components';

export const Details: React.FC = () => {
  const { previewData } = useSelector((state: RootStateOrAny) => state.preview);
  console.log('previewData: ', previewData);
  const dispatch = useDispatch();
  const { getMoviePreview } = PreviewCreators;

  useEffect(() => {
    dispatch(getMoviePreview());
  }, []);

  return (
    <main
      className="preview"
      style={{
        backgroundImage: `linear-gradient(to right, transparent, #000000), url('${previewData.Images.Background}')`,
      }}
    >
      <div className="preview__wrapper">
        <div className="preview__content container">
          <div className="preview__header">
            <h1 className="preview__title">Penny Dreadful</h1>
            <span className="preview__headline">
              80% indicado / ciencia ficcion / 2015 / eua / 14
            </span>
          </div>

          <div className="preview__asside">
            <Asside />
          </div>
        </div>

        <div className="preview__options">
          <div className="container">
            <Options />
          </div>
        </div>
      </div>
    </main>
  );
};
