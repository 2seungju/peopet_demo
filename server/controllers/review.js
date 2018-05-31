const Review = require('../models/review')

exports.oneReviewGet = (req, res) => {
  const { id } = req.params

  Review.find({ _id: id }, (err, data) => {
    if (err) res.send(err)
    return res.json(data)
  })
}

exports.allReviewGet = (req, res) => {
  Review.find({})
    .sort({ number: 1 })
    .then(data => res.json(data))
    .catch(err => res.send(err))
}

exports.saveReview = (req, res) => {
  const { dogName, breed, review } = req.body

  const newreview = new Review({
    dogName,
    breed,
    review
  })

  return newreview
    .save()
    .then(data => res.json(data))
    .catch(err => res.send({ err }))
}

exports.saveOneReview = (req, res) => {
  const { dogName, breed, review } = req.body

  const newreview = new Review({
    dogName,
    breed,
    review
  })

  return newreview
    .save()
    .then(data => res.json(data))
    .catch(err => res.send({ err }))
}
