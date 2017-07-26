console.time('a');

var output = 1;
for (var i = 1; i <= 10; i++) {
        output *= i;
}

console.log('\u001b[31m', 'Result: ', output);

console.timeEnd('a');

console.log('\u001b[0m');
