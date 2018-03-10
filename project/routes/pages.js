const express = require('express')
const router = express.Router()

router.get('/', (req, res, next) => {
  res.render('index')
})

router.get('/create', (req, res, next) => {
  res.render('create-application')
})

module.exports = router
