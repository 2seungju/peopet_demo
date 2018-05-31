const mongoose = require('mongoose')

mongoose.Promise = require('bluebird')

const Schema = mongoose.Schema

const Review = new Schema({
  dogname: { type: String },
  breed: { type: String },
  review: { type: String },
  dogimage: { type: String }
})

module.exports = mongoose.model('Review', Review)
