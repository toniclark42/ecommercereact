// // cd mongo/bin
// // mongod -dbpath ~/mongo-data

// const mongoose = require('mongoose'); //npm install --save mongoose

// //tell mongoose we watnt to use promises instead of callbacks
// mongoose.Promise = global.Promise;

// //('will create database', will make error go away)
// mongoose.connect('mongodb://localhost:27107/ProductList', { useNewUrlParser: true });

// module.exports = {
//     mongoose
// };

var mongoose = require("mongoose");

mongoose.Promise = global.Promise;
mongoose.connect(
  "mongodb://localhost:27017/ProductModel",
  { useNewUrlParser: true }
);

module.exports = { mongoose };