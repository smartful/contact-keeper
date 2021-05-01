import React, { useState, useEffect, useContext } from 'react';
import ContactContext from '../../context/contact/ContactContext';

function ContactForm() {
  const initialContact = {
    name: '',
    email: '',
    phone: '',
    type: 'personal'
  };
  const [contact, setContact] = useState(initialContact);
  const { name, email, phone, type } = contact;
  const { addContact, updateContact, clearCurrent, current } = useContext(ContactContext);

  useEffect(() => {
    if (current !== null) {
      setContact(current);
    } else {
      setContact(initialContact);
    }
  }, [current]);

  const handleChange = (e) => setContact({ ...contact, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (current === null) {
      addContact(contact);
    } else {
      updateContact(contact);
    }
    
    setContact(initialContact);
  }

  const clearAll = () => clearCurrent();

  return (
    <form onSubmit={handleSubmit}>
      <h3 className="text-primary">{current ? 'Edit Contact' : 'Add Contact'}</h3>
      <input
        type="text"
        placeholder="Name"
        name="name"
        value={name}
        onChange={handleChange}
      />
      <input
        type="text"
        placeholder="Email"
        name="email"
        value={email}
        onChange={handleChange}
      />
      <input
        type="text"
        placeholder="Phone"
        name="phone"
        value={phone}
        onChange={handleChange}
      />
      <h5>Contact Type</h5>
      <input
        type="radio"
        name="type"
        onChange={handleChange}
        value="personal"
        checked={type === "personal"} /> Personal {' '}
      <input
        type="radio"
        name="type"
        onChange={handleChange}
        value="professional"
        checked={type === "professional"} /> Professional
      <div>
        <input type="submit" value={current ? 'Update Contact' : 'Add Contact'} className="btn btn-primary btn-block" />
      </div>
      {current && <div>
        <button className="btn-light btn-block" onClick={clearAll}>Clear</button>
      </div>}
    </form>
  );
}

export default ContactForm;