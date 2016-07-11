import React, { Component } from 'react';
import { connect } from 'react-redux';
class Content extends Component {
  render() {
    return (
      <div>
        <h1>I'm content page</h1>
        <article>{this.props.article}</article>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    article: state.contentReducer.article,
  };
}

export default connect(mapStateToProps)(Content);
