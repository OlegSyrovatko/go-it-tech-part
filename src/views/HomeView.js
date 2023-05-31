import React from 'react';

const styles = {
  container: {
    minHeight: 'calc(100vh - 50px)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    marginTop: 100,
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
      Welcome to our user-friendly app designed to simplify your life! With our intuitive interface and powerful features, you can effortlessly manage your tasks, stay organized, and boost your productivity. Say goodbye to chaos and hello to efficiency as you streamline your daily routine. Let our app be your trusted companion on your journey towards success. Get started today and experience the convenience and ease our app brings to your fingertips.
    </div>
  </div>
);

export default HomeView;