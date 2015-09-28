/////////////////////
/// This is my Router
/////////////////////


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


var User = require('./models/user');
var Product = require('./models/product');
var Order = require('./models/order');


/////////////////////
/// This is my Router
/////////////////////

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
});

user1.save(function(err, newUser) {
  if (err) console.log(err);
  console.log('User1 Saved!');
})

var product1 = new Product({
  name: 'Carpet',
  price: 200,
  description: 'Red carpet for film events. Size large. Built in resistant materials'
});

product1.save(function(err, newProduct) {
  if(err) console.log(err);
  console.log('Product1 saved!');
})

var product2 = new Product({
  name: 'Chair',
  price: 160,
  description: 'Wooded chair for chairman. Wood from Africa'
});

product2.save(function(err, newProduct) {
  if(err) console.log(err);
  console.log('Product2 saved!');
})



var order1 = new Order({
  price: '360',
  createdAt: '30/09/2015',
  adress: { street: '38 Leyton Green Road',
            postCode: 'E10 6BF',
            town: 'Leyton',
            country: 'United Kingdom' },
  products: [product1, product2]
})

order1.user.push(user1);

order1.save(function(err, newOrder) {
  if(err) console.log(err);
  console.log('Order1 Saved!')
})








