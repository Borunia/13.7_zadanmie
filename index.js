

var fs = require('fs');
var colors = require('colors');



fs.readFile('./tekst.txt', 'utf-8', function(err, data) {
    console.log('Dane przed zapisem!'.blue).
    console.log(data);
});

fs.writeFile('./tekst.txt', 'Tekst, który zapiszemy w pliku tekst.txt', function(err) {
    if (err) throw err; // jeśli pojawi się błąd, wyrzuć wyjątek
    console.log('Zapisano!');
});