const mongoose = require('mongoose');

const { ObjectID } = mongoose.Schema;

const productCartSchema = new mongoose.Schema({
  products: {
    type: ObjectID,
    ref: 'Product',
  },
  name: String,
  count: Number,
  price: Number,
});

const productCart = mongoose.model('ProductCart', productCartSchema);

const orderSchema = new mongoose.Schema(
  {
    products: [productCartSchema],
    transaction_id = {},
    amount: { type: Number },
    address: String,
    updated: Date,
    user: {
      type: ObjectID,
      ref: 'User',
    },
  },
  { timestamps: true }
);

const order = mongoose.model('Order', orderSchema);

module.exports = { order, productCart };
