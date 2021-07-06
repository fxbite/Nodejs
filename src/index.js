const express = require('express');
const morgan = require('morgan');
const exphbs  = require('express-handlebars');
const path = require('path');
const app = express();
const port = 3000;
 
// HTTP logger
app.use(morgan('combined'));

// Templates Engine
app.engine('hbs', exphbs({
  extname: '.hbs'
}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources/views'));

// Route
app.get('/', function (req, res) {
  res.render('home');
})

app.get('/news', function (req, res) {
  res.render('news');
})
 
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
  })