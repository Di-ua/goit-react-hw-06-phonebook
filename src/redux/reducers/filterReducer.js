// import types from '../action-types';
import { createReducer } from '@reduxjs/toolkit';
import filterContacts from '../actions/filterAction';

// без redux toolkit
// const filterReducer = (state = '', { type, payload }) => {
//   switch (type) {
//     case types.FILTER_CONTACTS:
//       return payload;

//     default:
//       return state;
//   }
// };

const filterReducer = createReducer('', {
  [filterContacts]: (_, action) => action.payload,
});

export default filterReducer;