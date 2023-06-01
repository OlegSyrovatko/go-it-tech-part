import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import Container from './Container';

import HomeView from '../views/HomeView';
import SharedLayout from './SharedLayout';
const Tweets = lazy(() => import('../views/Tweets'));

export default function App() {
  return (
    <Container>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<HomeView />} />
          <Route path="/tweets" element={<Tweets />} />
        </Route>
      </Routes>
    </Container>
  );
}
