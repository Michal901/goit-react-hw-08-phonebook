import PropTypes from 'prop-types';
import styles from './ContactList.module.css';

const ContactList = ({ contacts, onDeleteContact }) => {
  if (!contacts) {
    return <p>Loading...</p>; // lub inny komunikat ładowania
  }

  return (
    <ul className={styles.contactList}>
      {contacts.map(contact => (
        <li key={contact.id}>
          <p>
            <strong>{contact.name}: </strong>
            {contact.phone}
          </p>
          <button
            className={styles.customBtn}
            onClick={() => onDeleteContact(contact.id)}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.array,
  onDeleteContact: PropTypes.func.isRequired,
};

export default ContactList;
