fs = require('fs');

//Eski icerik silinir.
fs.writeFile('createDirectory/newFile.txt', 'Hello World! ss s s', function (err) {
  if (err) return console.log(err);
  console.log('komut satırı islevi Hello World > helloworld.txt, >> degil verileril siler :D');
});

  
  
fs.appendFile("createDirectory/newFile.txt", "append data", (err) => {
  if (err) {
    console.log(err);
    return ;
  }
  console.log("append data >> createDirectory/newFile.txt");


});