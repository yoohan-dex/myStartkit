import express from 'express';
import path from 'path';
import ngrok from 'ngrok';
import logger from './logger';
import frontendMiddles from './middlewares/frontend';
import webpackConfig from '../webpack.config.dev';

const isDev = process.env.NODE_ENV !== 'production';
const useTunnel = isDev && process.env.ENABLE_TUNNEL;
const app = express();
app.use(express.static(path.resolve(__dirname, '../client/static')));
app.use(frontendMiddles(webpackConfig));
// app.get('/*', (req, res) => {
//   res.sendFile(path.join(__dirname, './index.html'));
// });

const port = process.env.PORT || 2333;

app.listen(port, (err) => {
  if (err) {
    return logger.error(err.message);
  }

  if (isDev && useTunnel) {
    ngrok.connect(port, (innerErr, url) => {
      if (innerErr) {
        return logger.error(innerErr);
      }

      logger.appStarted(port, url);
      return 0;
    });
  } else {
    logger.appStarted(port);
    return 0;
  }

  return 0;
});
