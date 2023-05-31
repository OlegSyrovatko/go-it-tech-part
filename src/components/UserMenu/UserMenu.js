import { useDispatch, useSelector } from 'react-redux';
import { authSelectors, authOperations } from '../../redux/auth';

import { Container, Button, Avatar, Name } from '../../views/ContactsView.styled';
import defaultAvatar from './default-avatar.jpg';

export default function UserMenu() {
  
  const name = useSelector(authSelectors.getUsername);
  const avatar = defaultAvatar;
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(authOperations.logOut());
  } 

  return (
    <Container>
      <Avatar src={avatar} alt="" width="32" />
      <Name>Wellcome, {name}</Name>
      <Button type="button" onClick={handleLogout}>
        Logout
      </Button>
    </Container>
  );
}