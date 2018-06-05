const express = require('express')

const DogController = require('./controllers/dog')
const BreederController = require('./controllers/breeder')
const AdminController = require('./controllers/admin')
const ReviewController = require('./controllers/review')
const PuppyController = require('./controllers/puppy')

module.exports = function (app) {
  const apiRoutes = express.Router()
  const dogRoutes = express.Router()
  const breederRoutes = express.Router()
  const adminRoutes = express.Router()
  const reviewRoutes = express.Router()
  const puppyRoutes = express.Router()

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

  apiRoutes.use('/admin', adminRoutes)
  adminRoutes.get('/', AdminController.allDataGet)
  adminRoutes.post('/breeder', AdminController.saveBreeder)
  // adminRoutes.post('/', Admin)

  apiRoutes.use('/review', reviewRoutes)
  reviewRoutes.get('/', ReviewController.allReviewGet)
  reviewRoutes.get('/:id', ReviewController.oneReviewGet)
  reviewRoutes.post('/', ReviewController.saveReview)
  reviewRoutes.put('/id', ReviewController.saveOneReview)

  apiRoutes.use('/puppy', puppyRoutes)
  puppyRoutes.get('/', PuppyController.allPuppyGet)
  puppyRoutes.get('/:id', PuppyController.onePuppyGet)
  puppyRoutes.post('/', PuppyController.savePuppy)
  puppyRoutes.put('/id', PuppyController.saveOnePuppy)

  app.use('/api', apiRoutes)
}
