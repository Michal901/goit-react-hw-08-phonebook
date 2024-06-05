import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts, deleteContact } from '../../redux/contacts/operations';
import ContactList from '../ContactList/ContactList';

const Contacts = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts.contacts);
  const error = useSelector(state => state.contacts.error);
  const status = useSelector(state => state.contacts.status);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  if (status === 'loading') {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div>
      <h1>Your Contacts</h1>
      <ContactList
        contacts={contacts}
        onDeleteContact={id => dispatch(deleteContact(id))}
      />
    </div>
  );
};

export default Contacts;
