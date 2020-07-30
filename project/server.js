var express = require('express')

var app=express()

app.use(express.static(__dirname))

var messages =[
    {name:"Tim", message:"Hi"},
    {name:"James",message:"Hello"}
]

app.get('/messages', (req,res) =>{
    res.send(messages)
})

var server=app.listen(3000, () => {
    console.log('server is running on port', server.address().port)
})