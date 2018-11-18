const req = require('request')

req({url: 'http://localhost:3001/temperature', 
     json: true}, 
     function(req, res, body)
     {
        console.log(res.body)

     })