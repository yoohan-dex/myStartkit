import React, { Component } from 'react';
import s from './styles.scss';

import Button from '../Button';
class Debut extends Component {
  constructor() {
    super();
    this.state = {
      open: false,
    };
    this.open = this.open.bind(this);
  }
  open() {
    console.log('yes');
    this.setState({
      open: true,
    });
  }
  render() {
    const svgUrl = 'images/logo.svg';
    return (
      <div className={`${s.debut} ${this.state.open ? s.open : ''}`}>
        <header className={s.header}>
          <span className={s.logo}><img src={svgUrl} alt="" /></span>
          <h1>Good blog</h1>
          <p>Just another free, fully responsive site template<br />
            built by <a href="https://twitter.com/ajlkn">@ajlkn</a> for <a href="https://html5up.net">HTML5 UP</a>.</p>
          <p onClick={this.open}>Just some technology article</p>
          <Button onClick={this.open}>start</Button>
        </header>
      </div>
    );
  }
}

export default Debut;
