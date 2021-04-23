import { createAction } from '@reduxjs/toolkit';
// import types from '../action-types';

// без redux toolkit
// const addContact = ({ id, name, number }) => ({
//   type: types.ADD_CONTACT,
//   payload: {
//     id: id,
//     name: name,
//     number: number,
//   },
// });

// const deleteContact = id => ({
//   type: types.DELETE_CONTACT,
//   payload: {
//     id,
//   },
// });

const addContact = createAction('ADD_CONTACT');
const deleteContact = createAction('DELETE_CONTACT');

export default { addContact, deleteContact };