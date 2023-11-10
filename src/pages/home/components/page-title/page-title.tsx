import axitLogo from '../../../../assets/logo_axit.png';
import './page-title.scss';

export const PageTitle = () => {
  return (
    <div className='page-title-wrapper'>
      <div>
        <img className='logo' src={axitLogo} />
        <div className='title'>
          MODERN AXURE TEMPLATE FOR BEAUTIFUL PROTOTYPES
        </div>
        <div className='divider'></div>
        <div className='sub-title'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
          euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan
          et vierra justo commodo
        </div>
        <button className='download-btn'>Download</button>
      </div>
      <div className='register-container'>
        <div className='register-title'>
          Try Your <span className=''>FREE</span> Trial Today
        </div>

        <form>
          <div className='input-group'>
            <div className='form-input'>
              <input placeholder='Name' />
            </div>
            <div className='form-input'>
              <input placeholder='Email' />
            </div>
            <div className='form-input'>
              <input placeholder='Password' />
            </div>
          </div>

          <button className='submit-btn'>Get Started</button>
        </form>
      </div>
    </div>
  );
};
