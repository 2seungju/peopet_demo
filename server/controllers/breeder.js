const Breeder = require('../models/breeder')
const Dog = require('../models/dog')

exports.findBreederGet = (req, res) => {
  const { id } = req.params

  Dog.findOne({ _id: id })
    .then(findDog => {
      const { breederList } = findDog
      const promises = []

      breederList.map(breeder => {
        const { breederId } = breeder
        promises.push(Breeder.findOne({ _id: breederId }))
      })

      return Promise.all(promises)
    })
    // .catch(err => res.sendStatus(404))
    .then(findBreederList => res.json(findBreederList))
    .catch(err => res.send({ statusCode: 404 }))

  // Breeder.find({ dogName }, (err, data) => {
  //   if (err) res.redirect('/')
  //   return res.json(data)
  // })
}

exports.oneBreederGet = (req, res) => {
  const { id } = req.params
  Breeder.findOne({ _id: id }, (err, data) => {
    if (err) res.redirect('/')
    return res.json(data)
  })
}

exports.allBreederGet = (req, res) => {
  Breeder.find()
    .sort({ rank: 1 })
    .exec((err, data) => {
      if (err) res.send(err)
      return res.json(data)
    })
}

exports.saveBreeder = (req, res) => {
  const {
    breederImage,
    breederName,
    breederDescription,
    nameImage,
    kannelName,
    kannelDescription,
    kannelLocation,
    kannelManage,
    kannelBreed,
    kannelColor,
    kannelImage,
    question_start,
    question_manage,
    question_mind,
    question_word,
    dogImage,
    dogWord,
    dogDescription,
    rank,
    label,
  } = req.body

  const breeder = new Breeder({
    breederImage,
    breederName,
    breederDescription,
    kannelName,
    kannelDescription,
    kannelLocation,
    kannelManage,
    kannelBreed,
    kannelImage,
    kannelColor,
    question_start,
    question_manage,
    question_mind,
    question_word,
    dogImage,
    dogWord,
    dogDescription,
    rank,
    label,
  })

  return breeder.save()
    .then(data => res.json(data))
    .catch(err => res.send({ err }))
}
