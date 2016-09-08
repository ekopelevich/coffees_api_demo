var express = require('express')
var router = express.Router()

var coffees = require('./coffees')

router.use('/coffees', coffees)

router.get('/', function(req, res) {
  res.send('This is the index!')
})

module.exports = router
