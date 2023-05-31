import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from './App.styled';
import { authSelectors } from '../redux/auth';

const Navigation = () => {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  return (
    <nav>
      <Link to="/">
        Home
      </Link>

      {isLoggedIn && (
        <>
          <Link to="/contacts">
            Contacts
          </Link>

        </>
      )}
    </nav>
  );
};

export default Navigation;
