

var crypto = require('crypto');

var key = '아무도 알지못하는 비밀 키';
var input = 'what the fuck';

//암호화
var cipher = crypto.createCipher('aes192', key);
cipher.update(input, 'utf8', 'base64');
var cipherOutput = cipher.final('base64');

//암호화 해제
var decipher = crypto.createDecipher('aes192', key);
decipher.update(cipherOutput, 'base64', 'utf8');
var decipherOutput = decipher.final('utf8');

console.log('원래 : ' + input);
console.log('암호화 : ' + cipherOutput);
console.log('암호화해제 : ' + decipherOutput);
