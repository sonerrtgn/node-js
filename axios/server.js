const { default: axios } = require('axios');
const acios = require('axios');


//Send get method request.
/*
axios.get("https://jsonplaceholder.typicode.com/posts/1").
      then(result => {
            var requestBody = result.data;
            console.log(requestBody.userId);
      });
*/

// send json data body values.
/*
axios({
      method: 'get',
      url: 'https://jsonplaceholder.typicode.com/todos/1',
      headers: { 'Application-Type': 'json/text' },

}).then(function (response) {
      console.log(response.data);
});

*/

axios({
      method: 'get',
      url: 'https://jsonplaceholder.typicode.com/comments',
      headers: { 'Application-Type': 'json/text' },
      params: {
            "postId": 1
      },
      data: {
            bodyDataOne: "testData"
      },

}).then(function (response) {
      console.log(response.data);
});