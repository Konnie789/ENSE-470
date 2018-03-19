const express = require('express')
const router = express.Router()

router.get('/', isLoggedIn, (req, res, next) => {
  console.log(req.user)
  res.render('index', {
    user: req.user
  })
})

router.get('/create', isLoggedIn, (req, res, next) => {
  res.render('create-application')
})

function isLoggedIn (req, res, next) {
  // if user is authenticated in the session, carry on
  if (req.isAuthenticated()) { return next() }

  // if they aren't redirect them to the home page
  res.redirect('/login')
}

module.exports = router
