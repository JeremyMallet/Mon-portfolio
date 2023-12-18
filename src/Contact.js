import React, { useState } from 'react';
import './Contact.css';

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
    console.log(formData);
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
