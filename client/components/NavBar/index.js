import React, { Component } from 'react';
import { AppBar, IconButton, Tab, Tabs, Navigation } from 'react-toolbox';
import s from './styles.scss';

class NavBar extends Component {
  render() {
    return (
      <AppBar fixed theme={s}>
        <IconButton inverse ripple={false} icon="menu" />


      </AppBar>

    );
  }

}

export default NavBar;
