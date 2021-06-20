import './App.css';
import Nav from './components/Nav';
import Body from './components/Body';
import Footer from './components/Footer';
import styled from 'styled-components';

const Container = styled.div`
  @media screen and (max-width: 999px) {
    background-color: lightgreen;
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
