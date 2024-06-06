import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  fetchContacts,
  deleteContact,
  addContact,
} from '../../redux/contacts/operations';
import ContactList from '../ContactList/ContactList';
import ContactForm from '../ContactForm/ContactForm';

const Contacts = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts.contacts);
  const error = useSelector(state => state.contacts.error);
  const status = useSelector(state => state.contacts.status);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const handleAddContact = contact => {
    dispatch(addContact(contact));
  };

  if (status === 'loading') {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div>
      <h1>Your Contacts</h1>
      <ContactForm addContact={handleAddContact} />
      <ContactList
        contacts={contacts}
        onDeleteContact={id => dispatch(deleteContact(id))}
      />
    </div>
  );
};

export default Contacts;
