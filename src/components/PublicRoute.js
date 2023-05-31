import { useSelector } from 'react-redux';
import { authSelectors } from '../redux/auth';
import { Navigate } from 'react-router-dom';

export const PublicRoute = ({ component: Component, redirectedTo = "/" }) => {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  return isLoggedIn ? <Navigate to={redirectedTo} /> : <Component />;
 }
