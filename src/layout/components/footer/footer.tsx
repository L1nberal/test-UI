import socialIcons from '../../../assets/social-icons.png';
import './footer.scss';

export const Footer = () => {
  return (
    <div className='footer-wrapper'>
      <div>
        <img className='social-icons' src={socialIcons} />
      </div>
      <div className='copyright'>© 2021 Axure Themes</div>
    </div>
  );
};
