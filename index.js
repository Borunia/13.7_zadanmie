process.stdin.setEncoding('Utf-8');
var fs = require('fs');
var colors = require('colors');

fs.readdir('./','utf-8', function(err, files){
    console.log('Pliki katalogu zadanie_13_7:'.green);
    console.log(files);

    fs.writeFile('./lista.txt','\n'+files,function(err){
        console.log('Zapisono w pliku lista.txt'.red)
    })
});