const mongoose = require('mongoose')

mongoose.Promise = require('bluebird')

const Schema = mongoose.Schema

const Breeder = new Schema({
  // dog: {
  //   type: Schema.Types.ObjectId,
  //   ref: 'Dog',
  // },
  rank: { type: Number },
  label: { type: String },
  breederImage: { type: String },
  breederName: { type: String },
  breederDescription: { type: String },
  nameImage: { type: String },
  kannelName: { type: String },
  kannelDescription: { type: String },
  kannelLocation: { type: String },
  kannelManage: { type: String },
  kannelBreed: { type: String },
  kannelColor: { type: String },
  kannelImage: [{
    type: String,
  }],
  question_start: { type: String },
  question_manage: { type: String },
  question_mind: { type: String },
  question_word: { type: String },
  dogImage: [{
    type: String,
  }],
  dogWord: { type: String },
  dogDescription: { type: String },
  puppyImage: [{
    type: String,
  }],
  puppyList: [{
    puppyId: {
      type: Schema.Types.ObjectId,
      ref: 'Puppy',
    }
  }],
})

module.exports = mongoose.model('Breeder', Breeder)

