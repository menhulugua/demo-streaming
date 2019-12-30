import React from 'react';
import { Link } from 'react-router-dom';
import appStoreImg from './images/app-store.svg';
import playStoreImg from './images/play-store.svg';
import windowsStoreImg from './images/windows-store.svg';

const Footer = () => {
  return (
    <div className="footer">
      <div className="content">
        <div className="footerLinks">
          <Link to="/">Home</Link> |
          <Link to="/terms-and-conditions">Terms and Conditions</Link> |
          <Link to="/privacy-policy">Privacy Policy</Link> |
          <Link to="/collection-statement">Collection Statement</Link> |
          <Link to="help">Help</Link> |
          <Link to="manage-account">Manage Account</Link>
        </div>
        <div className="copyRight">Copyright &#9400; {(new Date()).getFullYear()} DEMO Streaming. All Rights Reserved</div>
        <div className="footerButtons">
          <div className="socialNetworkLinks">
            <div className="facebook"></div>
            <div className="twitter"></div>
            <div className="instagram"></div>
          </div>
          <div className="storeLinks">
            <img src={appStoreImg} alt="app store"/>
            <img src={playStoreImg} alt="play store"/>
            <img src={windowsStoreImg} alt="windows store"/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
