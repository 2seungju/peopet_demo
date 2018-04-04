const express = require('express')

const DogController = require('./controllers/dog')
const BreederController = require('./controllers/breeder')

module.exports = function (app) {
  const apiRoutes = express.Router()
  const dogRoutes = express.Router()
  const breederRoutes = express.Router()
  const adminRoutes = express.Router()

  /*------------------------------------------------------------------------------
    PRODUCT ROUTE
  ------------------------------------------------------------------------------*/

  // apiRoutes.use('/admin', adminRoutes);
  // adminRoutes.get('/', AdminController.allDataGet);
  // adminRoutes.get('/dog/:_id', AdminController.oneDogDataGet);
  // adminRoutes.get('/breeder/:_id', AdminController.oneBreederDataGet);

  apiRoutes.use('/dog', dogRoutes)
  dogRoutes.get('/', DogController.allDogGet)
  dogRoutes.get('/:id', DogController.oneDogGet)
  dogRoutes.post('/', DogController.saveDog)
  dogRoutes.put('/id', DogController.saveOneDog)

  apiRoutes.use('/breeder', breederRoutes)
  breederRoutes.get('/', BreederController.allBreederGet)
  breederRoutes.get('/:id', BreederController.oneBreederGet)
  breederRoutes.post('/', BreederController.saveBreeder)
  breederRoutes.get('/dog/:id', BreederController.findBreederGet)

  app.use('/api', apiRoutes)
}
