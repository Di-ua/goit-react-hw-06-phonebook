import React from 'react';
import Title from './shared/Title';
import Form from './components/Form';
import ContactsList from './components/ContactsList';
import Filter from './components/Filter';
import './App.css';

const App = () => {
  return (
    <>
      <Title title="phonebook" />
      <Form />
      <Filter />
      <ContactsList />
    </>
  );
};

export default App;