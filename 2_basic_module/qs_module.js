var url = require('url');
var querystring = require('querystring');

var parsedObj = url.parse('http://www.hanb.co.kr/look.html?isbn=394-393-393-3');

console.log('qs use : ', querystring.parse(parsedObj.query));
console.log('url use : ', url.parse(parsedObj.query), true);
