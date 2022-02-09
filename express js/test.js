
var express = require('express');
var app = express(); 
var port = 3000;
  
// For parsing application/json
app.use(express.json());
  
// For parsing application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));
  

//get body values type is json.
app.post('/profile', function (req, res) {
  console.log(req.body);
  res.send(req.body.name);
});


app.listen(port, () => {
      console.log(`Example app listening on port ${port}`)
    })
    
    