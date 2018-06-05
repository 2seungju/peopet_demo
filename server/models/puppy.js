const mongoose = require('mongoose')

mongoose.Promise = require('bluebird')

const Schema = mongoose.Schema

const Puppy = new Schema({
  breed: { type: String },
  puppyiage: { type: String },
  sex: { type: String },
  birth: { type: String },
  detail: { type: String },
  breeder: { type: String },
  location: { type: String },
  description: { type: String },
  parents: { type: String }
})

module.exports = mongoose.model('Puppy', Puppy)
