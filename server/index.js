import express from 'express';
import path from 'path';

import webpack from 'webpack';
import frontendMiddles from './middlewares/frontend';
import webpackConfig from '../webpack.config.dev';
const app = express();

app.use(frontendMiddles(webpackConfig));
// app.get('/*', (req, res) => {
//   res.sendFile(path.join(__dirname, './index.html'));
// });
app.listen(3333, () => console.log('Running on localhost 3333'))
;
