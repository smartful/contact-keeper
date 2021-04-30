import React, { useState, useContext } from 'react';
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
  const { addContact } = useContext(ContactContext);

  const handleChange = (e) => setContact({ ...contact, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    addContact(contact);
    setContact(initialContact);
  }

  return (
    <form onSubmit={handleSubmit}>
      <h3 className="text-primary">Add Contact</h3>
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
        <input type="submit" value="Add Contact" className="btn btn-primary btn-block" />
      </div>
    </form>
  );
}

export default ContactForm;