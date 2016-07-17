import React, { Component } from 'react';
import { Layout } from 'react-toolbox';
import { Panel } from 'react-toolbox/lib/layout/Panel.js';
import layoutTheme from './layout-theme.scss';

class Container extends Component {
  render() {
    return (
      <Layout theme={layoutTheme}>
        <Panel theme={layoutTheme}>
          {this.props.children}
        </Panel>
      </Layout>
    );
  }
}

export default Container;
