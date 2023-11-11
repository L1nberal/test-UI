import standartPicture from '../../../../assets/standard-image.png';
import './standard-picture.scss';

export const StandardPicture = () => {
  return (
    <div className='standard-picture-wrapper'>
      <div className='inner'>
        <div className='content'>
          <div className='title'>Standard Picture Section</div>
          <div className='divider'></div>
          <div className='paragraph'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
            Lorem Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Aenean ipsum Lorem ipsum dolor sit amet, consectetur adipiscing
            elit.
          </div>

          <div className='paragraph'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
            Lorem ipsum dolor sit amet.
          </div>
        </div>

        <div>
          <img className='standard-image' src={standartPicture} />
        </div>
      </div>
    </div>
  );
};
