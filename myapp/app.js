const express = require('express')
const app = express()
const port = 3000

app.get('/',function(req,res){
  res.send('hello word')
})

app.post('/',function(req,res){
 res.send('hello POST')
})

app.all('/secret',function(req,res,next){
 console.log('Access the secret section ...')
 next()
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
