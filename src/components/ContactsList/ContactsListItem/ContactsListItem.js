import React from 'react';
import { connect } from 'react-redux';
import contactAction from '../../../redux/actions/contactsAction';
import styles from './ContactListItem.module.css';

const ContactsListItem = ({ name, number, deleteContact }) => {
  return (
    <li className={styles.item}>
      <p className={styles.contact}>{name}</p>
      <p className={styles.contact}>{number}</p>
      <button type="button" className={styles.btn} onClick={deleteContact}>
        X
      </button>
    </li>
  );
};

const mapStateToProps = (state, ownProps) => {
  const item = state.contacts.find(item => item.id === ownProps.id);
  return {
    ...item,
  };
};
const mapDispatchToProps = (dispatch, ownProps) => ({
  deleteContact: () => dispatch(contactAction.deleteContact(ownProps.id)),
});
export default connect(mapStateToProps, mapDispatchToProps)(ContactsListItem);