import React, { useReducer } from 'react';
import { v4 as uuidv4 } from 'uuid';
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
    ],
    current: null,
  };
  const [state, dispatch] = useReducer(ContactReducer, initialState);

  const addContact = contact => {
    contact.id = uuidv4();
    dispatch({ type: ADD_CONTACT, payload: contact });
  }

  const deleteContact = id => dispatch({ type: DELETE_CONTACT, payload: id });

  const setCurrent = contact => dispatch({ type: SET_CURRENT, payload: contact });

  const clearCurrent = () => dispatch({ type: CLEAR_CURRENT });

  const updateContact = (contact) => dispatch({ type: UPDATE_CONTACT, payload: contact });

  // Filter contacts

  // Clear filter

  return (
    <ContactContext.Provider
      value={{
        contacts: state.contacts,
        current: state.current,
        addContact,
        deleteContact,
        updateContact,
        setCurrent,
        clearCurrent,
      }}
    >
      {children}
    </ContactContext.Provider>
  );
}

export default ContactState;