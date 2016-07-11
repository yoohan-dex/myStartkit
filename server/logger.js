/* eslint-disable no-console */
import chalk from 'chalk';
import ip from 'ip';


const divider = chalk.gray('\n-----------------------------------');

const logger = {
  error: err => {
    console.error(chalk.red(err));
  },

  appStarted: (port, tunnelStarted) => {
    console.log(`Server started ${chalk.green('✓')}`);

    if (tunnelStarted) {
      console.log(`Tunnel initialised ${chalk.green('✓')}`);
    }

    console.log(`
    ${chalk.bold('Access URLs:')}${divider}
    Localhost: ${chalk.magenta(`http://localhost:${port}`)}
          LAN: ${chalk.magenta(`http://${ip.address()}:${port}`) +
        (tunnelStarted ? `\n    Proxy: ${chalk.magenta(tunnelStarted)}` : '')}${divider}
    `);
  },
};

export default logger;

