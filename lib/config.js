// config.js
const ConfigStore = require('configstore');
const pkg = require('../package.json');

const config = new ConfigStore(pkg.name);

module.exports = config;
