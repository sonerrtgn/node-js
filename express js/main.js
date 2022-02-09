const express = require('express')

const app = express()



const port = 8080

app.get('/', (req, res) => {
  res.send(req.query.name);
})

//How to get url parametrs.
app.get('/api-test/v1/print/:userId/comment/:commentId', (req, res) => {
      res.send("User Id: "+req.params.userId+" \n "+"Comment Id: "+req.params.commentId);
})

//How to set header values and http code
app.get('/api-test/v1/setHeader', (req, res) => {
      res.setHeader("Content-Type","application/json");
      res.statusCode = 250;
      res.send("test");
})

//how to get 'get methods values'
app.get('/api-test/v1/getValues', (req, res) => {
      res.send("Get Values name = "+req.query.name);
})

//how to get post body:
app.post('/api-test/v1/postValues', (req, res) => {
      console.log(req.body);
      res.send(req.body);
})

app.get('/api-test/v1/printJSON',(req,res) => {
      res.setHeader("Content-Type","text/json");
      var myObject = {
            "id" : 18997,
            "name" : "car"
      };
      res.send(myObject);
});





/*
Routing Method:

app.get('/', function (req, res) {
  res.send('Hello World!')
})

app.post('/', function (req, res) {
  res.send('Got a POST request')
})

app.put('/user', function (req, res) {
  res.send('Got a PUT request at /user')
})

app.delete('/user', function (req, res) {
  res.send('Got a DELETE request at /user')
})

*/

app.listen(port, () => {
  console.log(`this app runing. runing port: ${port}`)
})

