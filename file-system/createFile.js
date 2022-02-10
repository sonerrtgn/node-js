var fs = require('fs');
 
// writeFile function with filename, content and callback function

//fs.writeFile parameter number is tree, first parameter is file name, second parameter is first string, thirdy paramater is function, this function first parameter is err info.
 fs.writeFile('createDirectory/newfile.txt', 'Learn Node FS module', function (err) {
  if (err) throw err;
  console.log('File is created successfully.');
});


//error example
fs.writeFile('okey/newfile.txt', 'Learn Node FS module', function (err) {
  if (err){
        console.log("File is not created succsessfully Error: ");
        console.log("----------File error---------");
        console.log(err);
        console.log("----------File error---------");
        return ;
  }
  console.log('File is created successfully.');
});



