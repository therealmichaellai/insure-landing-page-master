import React from 'react';
import './App.css';
import Nav from './components/Nav';
import Body from './components/Body';
import Footer from './components/Footer';
import styled from 'styled-components';

const maxWidth = '749px';
const minWidth = '750px';

const Container = styled.div`
  @media screen and (max-width: ${maxWidth}) {
  }
`;

const App = () => {
  return (
    <Container>
      <Nav />
      <Body />
      <Footer />
    </Container>
  );
};

export default App;
