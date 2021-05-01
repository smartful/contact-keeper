import React, { useContext, useRef, useEffect } from 'react';
import ContactContext from '../../context/contact/ContactContext';

function ContactFilter() {
  const { filtered, filterContacts, clearFilter } = useContext(ContactContext);
  const text = useRef('');

  useEffect(() => {
    if (filtered === null) {
      text.current.value = '';
    }
  });

  const handleChange = (e) => {
    if (text.current.value !== '') {
      filterContacts(e.target.value);
    } else {
      clearFilter();
    }
  };

  return (
    <form>
      <input ref={text} type="text" placeholder="Filter Contacts ..." onChange={handleChange} />
    </form>
  );
}

export default ContactFilter;