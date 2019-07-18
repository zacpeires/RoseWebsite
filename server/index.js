const express = require('express');
const app = express();
const morgan = require('morgan');
const path = require('path');
const bodyParser = require('body-parser');

app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/api', require('./apiRoutes'))

app.use(express.static(path.join(__dirname, '..',  '/public')));
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '..', '/public/index.html'))
})

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Your server, listening on port ${port}`)
});
