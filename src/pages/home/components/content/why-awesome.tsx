import circleImage from '../../../../assets/circle.png';
import bulbImage from '../../../../assets/bulb.png';
import './why-awesome.scss';

export const WhyAwesome = () => {
  return (
    <div className='why-awesome-wrapper'>
      <div className='inner'>
        <div className='title'>WHY THIS IS AWESOME</div>

        <div className='divider'></div>

        <div className='sub-title'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </div>

        <ul className='reasons-list'>
          <li className='list-item'>
            <div>
              <img className='circle-image' src={circleImage} />
              <img className='icon' src={bulbImage} />
            </div>

            <div className='item-title'>Thoughtful Design</div>

            <div className='paragraph'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem
              ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum
              dolor sit amet.
            </div>
          </li>
          <li className='list-item'>
            <div>
              <img className='circle-image' src={circleImage} />
              <img className='icon' src={bulbImage} />
            </div>

            <div className='item-title'>Well Crafted</div>

            <div className='paragraph'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem
              ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum
              dolor sit amet.
            </div>
          </li>
          <li className='list-item'>
            <div>
              <img className='circle-image' src={circleImage} />
              <img className='icon' src={bulbImage} />
            </div>

            <div className='item-title'>Easy To Customize</div>

            <div className='paragraph'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem
              ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum
              dolor sit amet.
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};
