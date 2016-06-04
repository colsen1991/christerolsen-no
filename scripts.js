const fs = require('fs-extra');

const script = process.argv[2];

function build() {
  fs.removeSync(`${__dirname}/build/`);
  fs.copySync(`${__dirname}/server/`, `${__dirname}/build/server`);
  fs.copySync(`${__dirname}/web/`, `${__dirname}/build/web`);
}

switch (script) {
  case 'build':
    build();
    break;
  default:
    throw new Error('You must pass in a script to run...');
}
