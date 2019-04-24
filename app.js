const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.static('public'));


app.get('/', (request, response, next) => {
  response.sendFile(__dirname + '/public/views/index.html');
});



app.get('/about', (request, response, next) => {
  response.sendFile(__dirname + '/public/views/about.html');
});

app.get('/photo-gallery', (request, response, next) => {
  response.sendFile(__dirname + '/public/views/photo-gallery.html');
});

app.get('/*', (request, response, next) => {
  response.sendFile(__dirname + '/public/views/404.html');
});


app.listen(PORT, () => {
  console.log('My fist express up is running');
});