import './contact-us.scss';

export const ContactUs = () => {
  return (
    <div className='contact-us-wrapper'>
      <div className='inner'>
        <div className='title'>CONTACT US</div>
        <div className='divider'></div>
        <div className='sub-title'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </div>

        <form className='form'>
          <div className='input-group'>
            <div className='form-input'>
              <input placeholder='Name' />
            </div>
            <div className='form-input'>
              <input placeholder='Email' />
            </div>
            <div className='form-input'>
              <input placeholder='Subject' />
            </div>
          </div>
          <div className='form-input text-area'>
            <textarea placeholder='Message' />
          </div>
        </form>
      </div>
    </div>
  );
};
