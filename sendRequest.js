const axios = require('axios')

axios
  .post('https://www.google.com/')
  .then(res => {
    console.log(`statusCode: ${res.status}`)
    console.log(res)
  })
  .catch(error => {
    console.error(error)
  })