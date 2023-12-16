import React, { useState } from 'react';
import './Contact.css'; // Assurez-vous de créer ce fichier CSS

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Ici, vous pouvez gérer l'envoi des données du formulaire
    console.log(formData);
    // Réinitialiser le formulaire ou afficher un message de succès
  };

  return (
    <div className="contact" id="contact">
      <h2>Contactez-moi</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Votre nom" onChange={handleChange} />
        <input type="email" name="email" placeholder="Votre email" onChange={handleChange} />
        <input type="text" name="subject" placeholder="Sujet" onChange={handleChange} />
        <textarea name="message" placeholder="Votre message" onChange={handleChange}></textarea>
        <button type="submit">Envoyer</button>
      </form>
    </div>
  );
}

export default Contact;
