import React from 'react';
import './About.css';

function calculateAge(birthDate) {
  const today = new Date();
  const birthDateObj = new Date(birthDate);
  let age = today.getFullYear() - birthDateObj.getFullYear();
  const m = today.getMonth() - birthDateObj.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < birthDateObj.getDate())) {
    age--;
  }
  return age;
}

function About() {
  const age = calculateAge("1996-06-20");

  return (
    <div className="about" id="about">
    <h2>À Propos de Moi</h2>
    <p>Bonjour ! Je suis Jérémy Mallet, développeur web junior de {age} ans, passionné d'informatique depuis mon adolescence, époque où je construisais déjà mes propres PC. Après un début de carrière dans la banque, j'ai décidé de suivre ma passion en me réorientant vers le développement web. <br/>
    <br/>
    En 2023, j'ai complété une formation approfondie avec l'école O'Clock, me dotant des compétences nécessaires pour exceller dans ce domaine dynamique. Animé par un intérêt constant pour la culture web et une soif d'apprentissage, je suis toujours à la recherche de nouvelles technologies à maîtriser et de défis à relever. Mon objectif est de contribuer à des projets innovants où je peux mettre à profit ma curiosité naturelle et mes compétences techniques.</p>
    <h3>Compétences</h3>
    <ul>
    <li>HTML</li>
    <li>CSS</li>
    <li>JavaScript</li>
    <li>React</li>
    <li>Node.js</li>
    <li>Express</li>
    <li>SQL</li>
    <li>Git</li>
    <li>GitHub</li>
    <li>...</li>
    </ul>
    </div>
    );
  }
  
  export default About;
