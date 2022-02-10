var fs = require('fs');


//first parameter is directory name, second parameter is pemission number(0777), third paramater is callback function.
fs.mkdir("createDirectory", "0777", function(error){
      if(error){
            console.log("Error: ");
            console.log(error);
            return ;
      }

      console.log("directory is created.");

});
