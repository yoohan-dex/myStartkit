import React from 'react';
import AppBar from 'react-toolbox/lib/app_bar';
import { Button, IconButton } from 'react-toolbox/lib/button';

const Appbar = () => (
  <div>
    <Button icon="bookmark" label="Bookmark" accent />
    <Button icon="bookmark" label="Bookmark" raised primary />
    <Button icon="inbox" label="Inbox" flat />
    <Button icon="add" floating />
    <Button icon="add" floating accent mini />
    <IconButton icon="favorite" accent />
    <IconButton primary>ff</IconButton>
    <Button icon="add" label="Add this" flat primary />
    <Button icon="add" label="Add this" flat disabled />
  </div>
);

export default Appbar;
