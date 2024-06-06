import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addContact } from '../../redux/contacts/operations';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = event => {
    event.preventDefault();

    const newContact = { name, number };
    console.log('Submitting contact:', newContact);

    if (!name || !number) {
      console.error('Missing required fields');
      return;
    }

    dispatch(addContact(newContact))
      .unwrap()
      .then(response => {
        console.log('Contact added:', response);
      })
      .catch(error => {
        console.error('Error adding contact:', error);
      });

    setName('');
    setNumber('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input
          type="text"
          value={name}
          onChange={e => setName(e.target.value)}
        />
      </label>
      <label>
        Phone:
        <input
          type="text"
          value={number}
          onChange={e => setNumber(e.target.value)}
        />
      </label>
      <button type="submit">Add Contact</button>
    </form>
  );
};

export default ContactForm;
