// import { createStore, combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import contacts from './reducers/contactsReducer';
import filter from './reducers/filterReducer';

// без redux toolkit

// const rootReducer = combineReducers({
//   contacts: contactReducer,
//   filter: filterReducer,
// });

// const store = createStore(
//   rootReducer,
//   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
// );

const store = configureStore({
  reducer: {
    contacts,
    filter,
  },
});

export default store;