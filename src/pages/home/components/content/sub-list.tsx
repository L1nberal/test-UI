import cityImage from '../../../../assets/city-image.png';
import circleImage from '../../../../assets/circle.png';
import uploadIcon from '../../../../assets/upload-icon.png';
import downloadIcon from '../../../../assets/download-icon.png';

export const SubList = () => {
  return (
    <div className='sub-list-wrapper'>
      <div className='inner'>
        <div>
          <img className='city-image' src={cityImage} />
        </div>
        <div className='content'>
          <div className='title'>Sub list section</div>
          <div className='divider'></div>

          <div className='paragraph'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenea Lorem
            ipsum dolor sit amet, consectetur adipiscing elit. Aenea consectetur
            adipiscing elit
          </div>

          <div className='sub-content'>
            <div className='image-group'>
              <img className='circle-image' src={circleImage} />
              <img className='icon' src={uploadIcon} />
            </div>

            <div>
              <div className='title'>Title</div>
              <div className='paragraph'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenea
                Lorem ipsum dolor sit amet.
              </div>
            </div>
          </div>

          <div className='sub-content'>
            <div className='image-group'>
              <img className='circle-image' src={circleImage} />
              <img className='icon' src={downloadIcon} />
            </div>

            <div>
              <div className='title'>Title</div>
              <div className='paragraph mb-0'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenea
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenea
                consectetur adipiscing elit
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
