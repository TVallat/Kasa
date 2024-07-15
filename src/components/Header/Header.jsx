import React, { useEffect } from 'react';
import logo from '../Images/kasa-logo.png';
import { useLocation } from 'react-router-dom';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

const Header = () => {

  const location = useLocation();

  useEffect(() => {
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
      link.classList.remove('active');
    });

    switch (location.pathname) {
      case '/':
        navLinks[0].classList.add('active');
        break;
      case '/about':
        navLinks[1].classList.add('active');
        break;
      default: break;
    }
  },[location]); // Ne se lance que si location change.

  return (
    <header className="app-header">
      <img src={logo} alt="Logo de Kasa" />
      <nav>
        <Link className="nav-link" to="/">Accueil</Link>
        <Link className="nav-link" to="/about">A propos</Link>
      </nav>
    </header>
  );
}

export default Header;