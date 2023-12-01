process.env.STAGE = process.env.STAGE || 'alpha';
process.env.PORT = process.env.PORT || 8080;

const fs = require('fs');

module.exports = fs.existsSync(__dirname + '/' + process.env.npm_package_name)
        ? require(`./${ process.env.npm_package_name }`)
        : {};
