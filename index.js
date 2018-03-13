
process.stdin.setEncoding('Utf-8');
var fs = require('fs');
var colors = require('colors');


/*
fs.readFile('./tekst.txt', 'utf-8', function(err, data) {
    console.log('Dane przed zapisem!'.blue);
    console.log(data);
    fs.appendFile('./tekst.txt','\nA tak wyglądaja po zapisie', function(err) {
        if (err) throw err; // jeśli pojawi się błąd, wyrzuć wyjątek
        console.log('Zapisano!'.blue);
        fs.readFile('./tekst.txt', 'utf-8', function(err,data){
            console.log('Dane po zapisie'.blue)
            console.log(data);
        });
    });   
});
*/

fs.readdir('./','utf-8', function(err, files){
    console.log('Pliki katalogu zadanie_13_7:'.green);
    console.log(files);

    fs.writeFile('./lista.txt','\n'+files,function(err){
        console.log('Zapisono w pliku lista.txt'.red)
    })
});




