const express = require('express')
const app = express()
const port = 3000

//single callback
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

app.get('/users/:userId/books/:bookId', function (req, res) {
  res.send(req.params)
})

//multi callbacks
app.get('/example/b',function (req,res,next){
  console.log('the response will be sent by the next function ...')
  next()
}, function (req,res){
  res.send('Hello from B!')
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))


