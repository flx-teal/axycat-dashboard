import React from 'react';
import './FooterComponent.scss';
import '../../img/facebook-icon.png';

function FooterComponent() {
  return (
    <footer className='footer-section'>
      <div className='footer-section_body'>
        <div className='footer-section_contacts'>
          <h4>Contact us</h4>
          <div className='contacts-data'>
            <p>AxyCat@skype</p>
            <p>AxyCat@email.com</p>
            <p>UA +380 322 333 33 33</p>
          </div>
        </div>
        <div className='footer-section_sitemap'>
          <h4>Sitemap</h4>
          <div className='sitemap-nav'>
            <a href='#'>Home</a>
            <a href='#'>About</a>
            <a href='#'>Contacts</a>
            <a href='#'>Login</a>
          </div>
        </div>
        <div className='footer-section_social'>
          <h4>We are in social media</h4>
          <div className='icon-container'>
            <a href='https://facebook.com/'>
              <img
                className='facebook-icon'
                src='https://image.flaticon.com/icons/svg/145/145802.svg'
                alt='facebook'
              />
            </a>
            <a href='https://www.linkedin.com/'>
              <img
                className='linkedin-icon'
                src='https://image.flaticon.com/icons/svg/145/145807.svg'
                alt='linkedin'
              />
            </a>
            <a href='https://www.instagram.com/'>
              <img
                className='instagram-icon'
                src='https://image.flaticon.com/icons/svg/179/179328.svg'
                alt='instagram'
              />
            </a>
          </div>
        </div>
      </div>
      <div className='footer-privacy'>
        <p className='copyright'>Copyright &#9400; All rights reserved</p>
        <p className='privacy-policy'>Privacy Policy</p>
      </div>
    </footer>
  );
}

export default FooterComponent;
