import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setStatusModal } from 'redux/modalSlice';
import { getModal } from 'redux/selectors';
import  ContactList    from 'components/ContactList';

import { fetchContacts } from 'redux/contacts/operations';
import { selectLoading } from 'redux/contacts/selectors';

import { Loading } from 'notiflix/build/notiflix-loading-aio';

import Modal from '../components/Modal';
import  ContactForm from '../components/ContactForm';
import {
  Book,
  Button,
  CloseButton,
  ModalBlock,
  ModalItems,
  ContactsHead,
} from './ContactsView.styled';


const ContactsView = () => {
  const showModal = useSelector(getModal);
  const dispatch = useDispatch();
  const toggleModal = () => {
    dispatch(setStatusModal(!showModal));
  };

  const isLoading = useSelector(selectLoading);
  useEffect(() => {
    if (isLoading) Loading.circle('Loading...')
    else Loading.remove()
      
  }, [isLoading]);
  

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

return (
  <>
    <Book>
      <h1>Phonebook</h1>
      <ContactsHead>
        <Button type="button" onClick={toggleModal}>
          Add Contact
        </Button>
      </ContactsHead>
      {showModal && (
        <Modal>
          <ModalBlock>
            <ModalItems>
              <CloseButton type="button" onClick={toggleModal}>
                Close
              </CloseButton>
              <ContactForm />
            </ModalItems>
          </ModalBlock>
        </Modal>
      )}
      <ContactList/>
    </Book>
  </>

 );
};
export default ContactsView;

