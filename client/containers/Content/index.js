import React, { Component } from 'react';
import { connect } from 'react-redux';

import Appbar from '../../components/Appbar';
import selector from './selectors';
class Content extends Component {
  render() {
    return (
      <div>
        <Appbar />
        <h1>I'm content page</h1>
        <article>{this.props.article}</article>
      </div>
    );
  }
}

const mapStateToProps = selector();

export default connect(mapStateToProps)(Content);
