var express = require('express')
var router = express.Router()

var coffees = [
  {
    id: 1,
    name: 'Ozo',
    kind: 'good',
  },
  {
    id: 2,
    name: 'Boxcar',
    kind: 'better',
  },
]

router.get('/', function(req, res) {
  res.send(coffees)
})

module.exports = router
