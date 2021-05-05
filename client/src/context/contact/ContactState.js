import React, { useReducer } from 'react';
import axios from 'axios';
import ContactContext from './ContactContext';
import ContactReducer from './ContactReducer';
import {
  ADD_CONTACT,
  DELETE_CONTACT,
  UPDATE_CONTACT,
  SET_CURRENT,
  CLEAR_CURRENT,
  FILTER_CONTACTS,
  CONTACT_ERROR,
  CLEAR_FILTER
} from '../types';

const ContactState = ({ children }) => {
  const initialState = {
    contacts: [],
    current: null,
    filtered: null,
    error: null,
  };
  const [state, dispatch] = useReducer(ContactReducer, initialState);

  const addContact = async (contact) => {
    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    };

    try {
      const res = await axios.post('/api/contacts', contact, config);
      dispatch({ type: ADD_CONTACT, payload: res.data });
    } catch (error) {
      dispatch({ type: CONTACT_ERROR, payload: error.response.msg});
    }
  }

  const deleteContact = id => dispatch({ type: DELETE_CONTACT, payload: id });

  const setCurrent = contact => dispatch({ type: SET_CURRENT, payload: contact });

  const clearCurrent = () => dispatch({ type: CLEAR_CURRENT });

  const updateContact = (contact) => dispatch({ type: UPDATE_CONTACT, payload: contact });

  const filterContacts = (text) => dispatch({ type: FILTER_CONTACTS, payload: text });

  const clearFilter = () => dispatch({ type: CLEAR_FILTER });

  return (
    <ContactContext.Provider
      value={{
        contacts: state.contacts,
        current: state.current,
        filtered: state.filtered,
        error: state.error,
        addContact,
        deleteContact,
        updateContact,
        setCurrent,
        clearCurrent,
        filterContacts,
        clearFilter,
      }}
    >
      {children}
    </ContactContext.Provider>
  );
}

export default ContactState;