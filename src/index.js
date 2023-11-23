const fs = require('fs');

module.exports = fs.existsSync(__dirname + '/src/' + process.env.npm_package_name)
        ? require(`./${ process.env.npm_package_name }`)
        : {};
