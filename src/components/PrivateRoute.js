import { useSelector } from 'react-redux';
import { authSelectors } from '../redux/auth';
import { Navigate } from 'react-router-dom';

export const PrivateRoute = ({ component: Component, redirectedTo="/" }) => {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  const isFetchingCurrent = useSelector(authSelectors.getIsFetchingCurrent);
  const shouldRedirect = !isLoggedIn && !isFetchingCurrent;

  return shouldRedirect ? <Navigate to={redirectedTo} /> : <Component />;
 }


