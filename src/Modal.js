import React from 'react';
import './Modal.css';

function Modal({ project, closeModal }) {
  return (
    <div className="modal-backdrop">
      <div className="modal">
        <h3>{project.name}</h3>
        <p>{project.description}</p>
        <div className="project-tech">
          {project.technologies.map(tech => <span key={tech}>{tech}</span>)}
        </div>
        <a href={project.link} target="_blank" rel="noopener noreferrer">Voir le site</a>
        <button onClick={closeModal}>Fermer</button>
      </div>
    </div>
  );
}

export default Modal;
