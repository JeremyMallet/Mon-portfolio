import React from 'react';
import './Footer.css'; 

function Footer() {
  return (
    <footer className="footer">
      <div>
      <a href="mailto:malletj1@outlook.fr">
          <img src="/emailLogo.png" alt="Email" />
        </a>
        <a href="https://twitter.com/GarubJerem" target="_blank" rel="noopener noreferrer">
          <img src="/twitterLogo.png" alt="Twitter" />
        </a>
        <a href="https://www.linkedin.com/in/j%C3%A9r%C3%A9my-mallet-882653137/" target="_blank" rel="noopener noreferrer">
        <img src="/linkedinLogo.png" alt="LinkedIn" />
        </a>
        <a href="https://github.com/JeremyMallet" target="_blank" rel="noopener noreferrer">
          <img src="/githubLogo.png" alt="GitHub" />
        </a>
      </div>
      <p>&copy; {new Date().getFullYear()} Jérémy Mallet. Tous droits réservés.</p>
    </footer>
  );
}

export default Footer;
