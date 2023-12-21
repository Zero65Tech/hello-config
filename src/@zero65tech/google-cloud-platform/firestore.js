const collections = {
  'hello-nodejs' : [ 'HELLO_FIRESTORE' ]
}

let service = process.env.npm_package_name;
if(!collections[service]) {
  module.exports = undefined;
  return;
}

module.exports = {
  project: 'zero65-test',
  collections: collections[ service ]
}
