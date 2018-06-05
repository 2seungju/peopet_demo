const Puppy = require('../models/puppy')

exports.onePuppyGet = (req, res) => {
  const { id } = req.params

  Puppy.find({ _id: id }, (err, data) => {
    if (err) res.send(err)
    return res.json(data)
  })
}

exports.allPuppyGet = (req, res) => {
  Puppy.find({})
    .sort({ number: 1 })
    .then(data => res.json(data))
    .catch(err => res.send(err))
}

exports.savePuppy = (req, res) => {
  const { breed, puppyimage, sex, birth, breeder, location, description, parents } = req.body

  const puppy = new Puppy({
    breed,
    puppyimage,
    sex,
    birth,
    breeder,
    location,
    description,
    parents
  })

  return puppy
    .save()
    .then(data => res.json(data))
    .catch(err => res.send({ err }))
}

exports.saveOnePuppy = (req, res) => {
  const { breed, puppyimage, sex, birth, breeder, location, description, parents } = req.body

  const puppy = new Puppy({
    breed,
    puppyimage,
    sex,
    birth,
    breeder,
    location,
    description,
    parents
  })

  return puppy
    .save()
    .then(data => res.json(data))
    .catch(err => res.send({ err }))
}
