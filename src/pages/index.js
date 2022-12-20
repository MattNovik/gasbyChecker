import '../css/index.css';
import * as React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Main from '../components/Main';

const IndexPage = () => {
  return (
    <>
      <Header />
      <Main />
      <Footer />
    </>
  );
};

export default IndexPage;

export const Head = () => (
  <>
    <title>Home Page</title>
  </>
);
