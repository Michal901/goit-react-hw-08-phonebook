import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './ContactForm.module.css';

const ContactForm = ({ addContact }) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    addContact({ name, phone });
    setName('');
    setPhone('');
  };

  return (
    <form className={styles.contactForm} onSubmit={handleSubmit}>
      <label htmlFor="name">Name</label>
      <input
        type="text"
        id="name"
        value={name}
        onChange={e => setName(e.target.value)}
        required
      />
      <label htmlFor="phone">Phone</label>
      <input
        type="tel"
        id="phone"
        value={phone}
        onChange={e => setPhone(e.target.value)}
        required
      />
      <button type="submit">Add Contact</button>
    </form>
  );
};

ContactForm.propTypes = {
  addContact: PropTypes.func.isRequired,
};

export default ContactForm;
