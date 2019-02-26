const INFO = require('./package');
const HELLO_USER = `Hello, ${INFO["author"]} [v${INFO["version"]}]`;
const { parsePolishNotation } = require('./polishNotation');

console.log(HELLO_USER);

module.exports = parsePolishNotation;