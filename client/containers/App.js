import React from 'react';
import { Link } from 'react-router';
class App extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <h1>Hello my scaffold! ~~</h1>
        <Link to="/">index</Link>
        <Link to="content">content</Link>

        {this.props.children}
      </div>
    );
  }
}

export default App;
