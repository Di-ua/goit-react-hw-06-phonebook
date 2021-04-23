// import types from '../action-types';
import { createReducer } from '@reduxjs/toolkit';
import actions from '../actions/contactsAction';

const INITIAL_STATE = JSON.parse(localStorage.getItem('contacts')) || [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];

// без redux toolkit
// const contactReducer = (state = INITIAL_STATE, { type, payload }) => {
//   switch (type) {
//     case types.ADD_CONTACT:
//       const newContacts = [...state, payload];
//       localStorage.setItem('contacts', JSON.stringify(newContacts));
//       return newContacts;

//     case types.DELETE_CONTACT:
//       const renewedContacts = state.filter(
//         contact => contact.id !== payload.id,
//       );
//       localStorage.setItem('contacts', JSON.stringify(renewedContacts));
//       return renewedContacts;
//     default:
//       return state;
//   }
// };

const addContact = (state, action) => {
  const newContacts = [...state, action.payload];
  localStorage.setItem('contacts', JSON.stringify(newContacts));
  return newContacts;
};

const deleteContact = (state, action) => {
  const renewedContacts = state.filter(
    contact => contact.id !== action.payload,
  );
  localStorage.setItem('contacts', JSON.stringify(renewedContacts));
  return renewedContacts;
};

const contactReducer = createReducer(INITIAL_STATE, {
  [actions.addContact]: addContact,
  [actions.deleteContact]: deleteContact,
});

export default contactReducer;