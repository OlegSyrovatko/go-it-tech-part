import React from 'react';

const styles = {
  container: {
    minHeight: 'calc(100vh - 50px)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    marginTop: 50,
    fontWeight: 500,
    fontSize: 48,
    textAlign: 'center',
  },
  description: {
    marginTop: 100,
    fontSize: 24,
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    border: 'solid', 
    padding: 20, 
    margin: 50,
    backgroundColor: 'lightgrey'
  },
};

const HomeView = () => (
  <div style={styles.container}>

    <h1 style={styles.title}>
      Place for Your advertisment :){' '}
      <span role="img" aria-label="Hi">
        💁‍♀️
      </span>
    </h1>

    <div style={styles.description} >
      Introducing "TestApp," your ultimate social networking platform that revolutionizes the way you connect and share. Experience the power of seamless communication, express yourself freely with short and impactful messages, and build a vibrant community around your interests. Welcome to TestApp, where every moment is an opportunity to engage, discover, and connect with the world. Join us today and embark on a journey of limitless possibilities!
    </div>
  </div>
);

export default HomeView;