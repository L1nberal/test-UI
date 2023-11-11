import { useState } from 'react';
import axitLogo from '../../../assets/logo_axit.png';
import './header.scss';

export const Header = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  console.log(isOpen);

  return (
    <div className='header-wrapper'>
      <div className='inner'>
        <div className='logo-container'>
          <img className='logo' src={axitLogo} />
        </div>

        <div className='hamburger'>
          <button
            className='list-btn'
            id='list-btn'
            onClick={() => setIsOpen(true)}
          >
            &#9776;
          </button>
        </div>

        <div className='nav-bar' style={{ right: isOpen ? '0px' : '-300px' }}>
          <button className='close-btn' onClick={() => setIsOpen(false)}>
            x
          </button>

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
