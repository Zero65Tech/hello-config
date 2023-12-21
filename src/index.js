const fs = require('fs');

process.env.STAGE = process.env.STAGE || 'alpha';
process.env.PORT = process.env.PORT || 8080;

const zero65  = { '@zero65tech' : require('./@zero65tech') };
const package = fs.existsSync(__dirname + '/' + process.env.npm_package_name)
        ? require(`./${ process.env.npm_package_name }`)
        : {};

module.exports = { ...zero65, ...package };
