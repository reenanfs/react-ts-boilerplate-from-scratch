const dotenv = require('dotenv');
const env = dotenv.config().parsed;
const envKeys = {};

if (env) {
  envKeys = Object.keys(env).reduce((prev, next) => {
    prev[`process.env.${next}`] = JSON.stringify(env[next]);
    return prev;
  }, {});
}

exports.envKeys = envKeys;
