const express = require('express');
const app = express();
const morgan = require('morgan');
const path = require('path');
const bodyParser = require('body-parser');
const db = require('./db');

app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/api', require('./apiRoutes'))

app.use(express.static(path.join(__dirname, '..',  '/public')));
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '..', '/public/index.html'))
})

const port = process.env.PORT || 3000;

db.sync()
  .then(function(){
    app.listen(port, function () {
      console.log(`Your server, listening on port ${port}`);
    })
  })