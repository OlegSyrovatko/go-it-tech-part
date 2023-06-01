// import React, { useEffect } from 'react';
// import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
// import  ContactList    from 'components/ContactList';
import Filter from 'components/Filter';
// import { fetchContacts } from 'redux/contacts/operations';
// import { selectLoading } from 'redux/contacts/selectors';

// import { Loading } from 'notiflix/build/notiflix-loading-aio';


// import  ContactForm from '../components/ContactForm';
import {
//   Book,
  Button,
//   CloseButton,
//   ModalBlock,
//   ModalItems,
  // ContactsHead,
} from './Tweets.styled';


const Tweets = () => {

//   const isLoading = useSelector(selectLoading);
//   useEffect(() => {
//     if (isLoading) Loading.circle('Loading...')
//     else Loading.remove()
      
//   }, [isLoading]);
  

//   useEffect(() => {
//     dispatch(fetchContacts());
//   }, [dispatch]);

return (
  <>
    {/* <Book> */}
        <Link to='/'><Button type="button" >
           Back
        </Button></Link><br /><br />
        <Filter />
    
    
      {/* <ContactList/> */}
    {/* </Book> */}
  </>

 );
};
export default Tweets;

