const Dog = require('../models/dog')

exports.oneDogGet = (req, res) => {
  const { id } = req.params

  Dog.find({ _id: id }, (err, data) => {
    if (err) res.send(err)
    return res.json(data)
  })
}

exports.allDogGet = (req, res) => {
  Dog.find({})
    .sort({ number: 1 })
    .then(data => res.json(data))
    .catch(err => res.send(err))
}

exports.saveDog = (req, res) => {
  const { dogName, titleImage, description, tag } = req.body

  const dog = new Dog({
    dogName,
    titleImage,
    description,
    tag,
    active: false,
  })

  return dog.save()
    .then(data => res.json(data))
    .catch(err => res.send({ err }))
}

exports.saveOneDog = (req, res) => {
  const { dogName, titleImage, description, tag } = req.body

  const dog = new Dog({
    dogName,
    titleImage,
    description,
    tag,
    active: false,
  })

  return dog.save()
    .then(data => res.json(data))
    .catch(err => res.send({ err }))
}