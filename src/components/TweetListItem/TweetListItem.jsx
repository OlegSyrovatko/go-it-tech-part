// import { useDispatch } from 'react-redux';
// import { deleteContact } from 'redux/contacts/operations';

import { Li, P, Button } from './TweetListItem.styled';

const TweetListItem = ({ id, user, avatar, tweets, followers }) => {
  //   const dispatch = useDispatch();

  //   const handleDelete = () => dispatch(deleteContact(id));

  return (
    <Li key={id}>
      <P>{user}</P>
      <P>{avatar}</P>
      <P>{tweets}</P>
      <P>{followers}</P>
      <Button
        onClick={() => {
          //   handleDelete(id);
        }}
      >
        Follow
      </Button>
    </Li>
  );
};
export default TweetListItem;
