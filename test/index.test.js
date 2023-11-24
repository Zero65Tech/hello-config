
test('hello-nodejs', () => {
  process.env.npm_package_name = 'hello-nodejs';
  expect(require('../src/index')).toStrictEqual({ "message": "Hello NodeJs !" });
});
