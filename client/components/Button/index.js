import React, { Component } from 'react';
import s from './styles.scss';
class Button extends Component {
  render() {
    return (
      <a className={s.button} onClick={this.props.onClick}>
        {this.props.children}
      </a>
    );
  }
}

export default Button;
