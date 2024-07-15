import React from 'react';
import footerLogo from '../Images/footer-logo.png';
import './Footer.scss'; 

const Footer = () => {
    return (
        <footer>
            <img src={footerLogo}/>
            <p>© 2020 Kasa. All rights reserved</p>
        </footer>
    );
}

export default Footer;