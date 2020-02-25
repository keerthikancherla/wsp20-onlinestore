const functions = require('firebase-functions');
const express = require('express')
const app = express()

exports.httpReq= functions.https.onRequest(app)

app.get('/', (req,res) => {
    res.send('<h1>My Store (from backend) </h1>')
})

function frontendhandler(req,res){
    res.sendFile(__dirname + '/prodadmin/prodadmin.html')
}

app.get('/login', frontendhandler);
app.get('/home', frontendhandler);
app.get('/add', frontendhandler);
app.get('/show', frontendhandler);
