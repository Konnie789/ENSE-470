var express = require('express')
var router = express.Router()

const models = require('../models')

/* GET home page. */
router.get('/software', function (req, res, next) {
  models.Software.findAll({
    include: [models.Approvers]
  }).then(function (software) {
    res.send(software)
  })
})

router.get('/approvers', function (req, res, next) {
  models.Approvers.findAll({
    include: [models.Software]
  }).then(function (approvers) {
    res.send(approvers)
  })
})

module.exports = router
