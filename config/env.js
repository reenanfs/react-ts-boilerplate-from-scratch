const dotenv = require('dotenv');
const env = dotenv.config().parsed;
exports.envKeys = Object.keys(env).reduce((prev, next) => {
  prev[`process.env.${next}`] = JSON.stringify(env[next]);
  return prev;
}, {});
