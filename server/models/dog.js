const mongoose = require('mongoose')

mongoose.Promise = require('bluebird')

const Schema = mongoose.Schema

const Dog = new Schema({
  dogName: { type: String },
  titleImage: { type: String },
  description: { type: String },
  breederList: [{
    breederId: {
      type: Schema.Types.ObjectId,
      ref: 'Breeder',
    },
    breederImage: {
      type: String,
    },
  }],
  tag: [{
    type: String,
  }],
  active: { type: Boolean },
  number: { type: Number },
})

module.exports = mongoose.model('Dog', Dog)

