const Breeder = require('../models/breeder')
const Dog = require('../models/dog')

exports.allDataGet = (req, res) => {
  let dogData
  let breederData
  Dog.find()
    .then(allDogData => {
      dogData = allDogData

      return Breeder.find()
    })
    .then(allBreederData => {
      breederData = allBreederData

      const sendData = {
        dogData,
        breederData
      }

      return res.json(sendData)
    })
    .catch(err => res.send(err))
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
