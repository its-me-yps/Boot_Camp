const mongoose = require('mongoose');
const stockSchema = new mongoose.Schema({
    symbol: String,
    open: Number,
    dayHigh: Number,
    dayLow: Number,
    lastPrice: Number,
    previousClose: Number,
    yearHigh: Number,
    yearLow: Number,
    lastUpdateTime: String,
  });
  

const Stock = mongoose.model('Stock', stockSchema);

module.exports = Stock;