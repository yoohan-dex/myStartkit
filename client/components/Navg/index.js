import React from 'react';
import { Tab, Tabs } from 'react-toolbox';

class TabsTest extends React.Component {
  constructor() {
    super();
    this.state = {
      index: 1,
    };
    this.handleTabChange = this.handleTabChange.bind(this);
  }
  handleTabChange(index) {
    this.setState({ index });
  }

  handleActive() {
    console.log('Special one activated');
  }

  render() {
    return (
      <Tabs index={this.state.index} onChange={this.handleTabChange}>
        <Tab label="Primary"><small>Primary content</small></Tab>
        <Tab label="Secondary" onActive={this.handleActive}><small>Secondary content</small></Tab>
        <Tab label="Third" disabled><small>Disabled content</small></Tab>
        <Tab label="Fourth" hidden><small>Fourth content hidden</small></Tab>
        <Tab label="Fifth"><small>Fifth content</small></Tab>
      </Tabs>
    );
  }
}

export default TabsTest;
