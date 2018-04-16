var fs = require('fs'); //módulo filesystem

// execução assíncrona

console.log('asy before');

fs.readFile('./files/Chewbacca.jpg', function(err, data) { //callback
  if(err) {
    throw err;
  }

  console.log('asy executed');
});

console.log('asy after'); 

// execução síncrona

console.log('sy before');

 var data = fs.readFileSync('./files/Chewbacca.jpg');
 console.log(data, 'sy executed');

console.log('sy after'); 