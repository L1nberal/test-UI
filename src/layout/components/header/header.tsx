import axitLogo from '../../../assets/logo_axit.png';
import './header.scss';

export const Header = () => {
  return (
    <div className='header-wrapper'>
      <div className='inner'>
        <div className='logo-container'>
          <img className='logo' src={axitLogo} />
        </div>
        <div className='nav-bar'>
          <ul className='nav-list'>
            <li className='nav-item'>Features</li>
            <li className='nav-item'>About</li>
            <li className='nav-item'>Pricing</li>
            <li className='nav-item'>Reviews</li>
            <li className='nav-item'>Contact</li>
          </ul>
        </div>
      </div>
    </div>
  );
};
