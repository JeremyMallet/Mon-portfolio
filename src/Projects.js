import React, { useState } from 'react';
import './Projects.css';
import Modal from './Modal'; 

function Projects() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const openModal = (project) => {
    setSelectedProject(project);
    setModalOpen(true);
  };

  const projects = [
    {
      name: "AGM Verrières",
      description: "Site de vente de verrières sur mesure, incluant un configurateur de projet, authentification, paiement via Stripe et gestion back-end avec Strapi.",
      technologies: ["React", "Node", "Strapi", "Stripe"],
      link: "https://agm-verrieres.fr",
      image: "/AGMLogo.png"
    },
    {
      name: "Autre Projet",
      description: "Blablabla",
      technologies: ["Technologie 1", "Technologie 2"],
      link: "lien-vers-autre-projet",
      image: "/chemin-vers-logo-autre-projet.png"
    },
  ];

  return (
    <div className="projects" id="projects">
      <h2>Mes Projets</h2>
      {projects.map((project, index) => (
        <div key={index} className="project-item" onClick={() => openModal(project)}>
          <img src={project.image} alt={`Logo de ${project.name}`} />
        </div>
      ))}

      {modalOpen && <Modal project={selectedProject} closeModal={() => setModalOpen(false)} />}
    </div>
  );
}

export default Projects;
