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
