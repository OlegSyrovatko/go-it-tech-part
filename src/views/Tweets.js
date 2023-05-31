// import React, { useEffect } from 'react';
// import { useSelector, useDispatch } from 'react-redux';

// import  ContactList    from 'components/ContactList';

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

        <Button type="button" >
          Back 
        </Button>
    
    
      {/* <ContactList/> */}
    {/* </Book> */}
  </>

 );
};
export default Tweets;

