import React, { Component } from 'react';
import { CardMedia, CardText, CardActions, Button } from 'react-toolbox';
import { Card } from 'react-toolbox/lib/card/Card.js';
import { CardTitle } from 'react-toolbox/lib/card/CardTitle';
import s from './styles.scss';
class Item extends Component {
  render() {
    const dummyText = 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.';
    return (
      <Card theme={s}>
        <CardMedia
          aspectRatio="wide"
          image="https://placeimg.com/800/450/nature"
        />
        <CardTitle
          theme={s}
          title="Title goes here"
        />
        <CardText>{dummyText}</CardText>
      </Card>
    );
  }
}

export default Item;
