import { useEffect, lazy } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';

import AppBar from './AppBar';
import Container from './Container';

import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';
import { authOperations, authSelectors } from '../redux/auth';

const HomeView = lazy(() => import('../views/HomeView'));
const RegisterView = lazy(() => import('../views/RegisterView'));
const LoginView = lazy(() => import('../views/LoginView'));
const ContactsView = lazy(() => import('../views/ContactsView'));

export default function App() {
  const dispatch = useDispatch();
  const isFetchingCurrentUser = useSelector(authSelectors.getIsFetchingCurrent);

  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser());
  }, [dispatch]);

  return (
    <Container>
      {isFetchingCurrentUser ? (
        <h2>Waiting for user...</h2>
      ) : (
        <Routes>
          <Route path="/" element={<AppBar />}>
            <Route index element={<HomeView />} />
            <Route
              path="/login"
              element={
                <PublicRoute
                  component={LoginView}
                  redirectedTo="/contacts"
                ></PublicRoute>
              }
            />
            <Route
              path="/register"
              element={
                <PublicRoute
                  component={RegisterView}
                  redirectedTo="/contacts"
                ></PublicRoute>
              }
            />
            <Route
              path="/contacts"
              element={
                <PrivateRoute
                  component={ContactsView}
                  redirectedTo="/login"
                ></PrivateRoute>
              }
            />
          </Route>
        </Routes>
      )}
    </Container>
  );
}
