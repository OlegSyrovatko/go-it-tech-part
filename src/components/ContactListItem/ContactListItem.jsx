import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contacts/operations';

import { Li, P, Button } from './ContactListItem.styled';

const ContactListItem = ({ id, name, number }) => {
  const dispatch = useDispatch();

  const handleDelete = () => dispatch(deleteContact(id));

  return (
    <Li key={id}>
      <P>{name}</P>
      <P>{number}</P>
      <Button
        onClick={() => {
          handleDelete(id);
        }}
      >
        Delete
      </Button>
    </Li>
  );
};
export default ContactListItem;
