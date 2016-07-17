import React from 'react';
import { Link } from 'react-router';
import Container from '../../components/Container';
import NavBar from '../../components/NavBar';
import Item from '../../components/Item';
class App extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <Container>
        <NavBar />
        <Item />
        <Item />
        <Item />
        <Item />
      </Container>
    );
  }
}


export default App;
