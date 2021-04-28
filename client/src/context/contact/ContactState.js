import React, { useReducer } from 'react';
import uuid from 'uuid';
import ContactContext from './ContactContext';
import ContactReducer from './ContactReducer';
import {
  ADD_CONTACT,
  DELETE_CONTACT,
  UPDATE_CONTACT,
  SET_CURRENT,
  CLEAR_CURRENT,
  FILTER_CONTACTS,
  CLEAR_FILTER
} from '../types';

const ContactState = ({ children }) => {
  const initialState = {
    contacts: [
      {
        id: 1,
        name: "John Doe",
        email: "john.doe@gmail.com",
        phone: "111-111-111",
        type: "personal"
      },
      {
        id: 2,
        name: "Bill White",
        email: "bill.white@gmail.com",
        phone: "222-222-222",
        type: "personal"
      },
      {
        id: 3,
        name: "Sara Winston",
        email: "sara.winston@gmail.com",
        phone: "333-333-333",
        type: "professional"
      },
    ]
  }
  const [state, dispatch] = useReducer(ContactReducer, initialState);

  // Add contact

  // Delete contact

  // Set current contact

  // Clear current contact

  // Update contact

  // Filter contacts

  // Clear filter

  return (
    <ContactContext.Provider
      value={{
        contacts: state.contacts
      }}
    >
      {children}
    </ContactContext.Provider>
  );
}

export default ContactState;