import React from 'react';
import './Header.css';

function Header() {
  return (
    <header className="header">
      <div className="header-nav">
        <a href="#about">À Propos de Moi</a>
        <a href="#projects">Mes Projets</a>
        <a href="#contact">Contactez-moi</a>
      </div>
      <div className="header-content">
        <h1>Jérémy Mallet</h1>
        <p>Développeur Web Junior</p>
      </div>
    </header>
  );
}

export default Header;
