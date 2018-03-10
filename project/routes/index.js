var express = require('express')
var router = express.Router()

const models = require('../models')

router.get('/software', function (req, res, next) {
  models.Software.findAll({
    include: [models.Approvers]
  }).then(software => {
    software.map(soft => soft.toJSON())
    res.send(software)
  })
})

router.get('/approvers', function (req, res, next) {
  models.Approvers.findAll({
    include: [models.Software]
  }).then(approvers => {
    // map entity to json
    approvers.map(app => app.toJSON())
    res.send(approvers)
  })
})

module.exports = router
