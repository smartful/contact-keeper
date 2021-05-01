import React, { Fragment, useContext } from 'react';
import ContactContext from '../../context/contact/ContactContext';
import ContactItem from './ContactItem';

function Contacts() {
  const { contacts, filtered } = useContext(ContactContext);

  if (contacts.length === 0) {
    return <h4>Please add a contact !</h4>;
  }

  return (
    <Fragment>
      {filtered !== null ? 
        filtered.map(contact => (<ContactItem key={contact.id} contact={contact} />)) :
        contacts.map(contact => <ContactItem key={contact.id} contact={contact} />)
      }
    </Fragment>
  );
}

export default Contacts;