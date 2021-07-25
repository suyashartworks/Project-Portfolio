const express = require('express');
const app = express();
const port = 3000;

// Define the static file path
app.use('/images/carousel',express.static(__dirname+'/images/carousel'));

app.get('/home', function (req, res) {
  res.sendFile(__dirname + '/htmlFiles/home.html');
})

app.get('/courses', function (req,res){
  res.sendFile(__dirname + '/htmlFiles/courses.html');
})

app.listen(port, () => console.log('The server running on Port '+port));