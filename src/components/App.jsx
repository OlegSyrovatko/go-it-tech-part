// import { lazy } from 'react';
// import { Route, Routes } from 'react-router-dom';
import Container from './Container';

// const HomeView = import('../views/HomeView');
// const Tweets = import('../views/Tweets');

export default function App() {
  return (
    <Container>
      <>HomeView</>
      {/* <Routes>
        <Route path="/" element={<HomeView />} />
        <Route path="/tweets" element={<Tweets />} />
      </Routes> */}
    </Container>
  );
}
