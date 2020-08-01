var express = require('express')
var bodyparser= require('body-parser')
var app=express()
var http=require('http').Server(app)
var io=require('socket.io')(http)

app.use(express.static(__dirname))
app.use(bodyparser.json())
app.use(bodyparser.urlencoded({extended: false}))

var messages =[]

app.get('/messages', (req,res) =>{
    res.send(messages)
})

app.post('/messages', (req,res) =>{
    messages.push(req.body)
    io.emit('message',req.body)
    res.sendStatus(200)
})

io.on('connection', (socket)=>{
    console.log('a user connected')
})

var server=http.listen(3000, () => {
    console.log('server is running on port', server.address().port)
})