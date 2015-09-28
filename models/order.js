var mongoose = require('mongoose');

var User = mongoose.model('User');

var orderSchema = new mongoose.Schema({
  price: String,
  createdAt: Date,
  adress: { street: String,
            postCode: String,
            town: String,
            country: String },
  products: { type: mongoose.Schema.ObjectId, ref: 'Product' },
  user: [User.schema]
})

var Order = mongoose.model('Order', orderSchema);

module.exports = Order;


// Products(Array of Product references)
// User(Embedded User)