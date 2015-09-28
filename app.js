var express = require('express');
var path = require('path');
var debug = require('debug');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var expressLayouts = require('express-ejs-layouts');
var app = express();
var router = express.Router();

mongoose.connect('mongodb://localhost/ecommerce_app');


var User = require('./models/user')




app.engine('ejs', require('ejs').renderFile);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// body parser config
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json())
app.use(expressLayouts);
// Overwrites POST forms to DELETE values or any other kind we pass in as method
app.use(methodOverride(function (req, res) {
  if (req.body && typeof req.body === 'object' && '_method' in req.body) {
    // look in urlencoded POST bodies and delete it
    var method = req.body._method;
    delete req.body._method;
    return method;
  }
}));



var user1 = new User({
  name: 'John Doe',
  gender: 'Male',
  dob: '01/01/2000'
})

user1.save(function(err, newUser) {
  if (err) console.log(err);
  console.log('User1 Saved!');
})










