var express = require('express')
var router = express.Router()

var coffees = [
  {
    id: 4678,
    name: 'Ozo',
    kind: 'good',
  },
  {
    id: 84876,
    name: 'Boxcar',
    kind: 'better',
  },
]

router.get('/', function(req, res) {
  res.send(coffees)
})


// router.get('/:id', function(req, res){
//   var id = req.params.id
//   for (var i = 0; i < coffees.length; i++) {
//     if (id == coffees[i].id) {
//       res.send(coffees[i])
//     }
//   }
// })

router.get('/:id', function(req, res) {
  var id = parseInt(req.params.id)
  coffees.map(function(coffee){
    if (id === coffee.id) {
      res.send(coffee)
    }
  })
  res.send('There is no coffee with that index!')
})

router.post('/', function(req, res){
  // console.log(req.body)
  var id = parseInt(req.body.id)
  coffees.push({
    id: id,
    name: req.body.name,
    kind: req.body.kind,
  })
  res.redirect('/api/v1/coffees')
})

module.exports = router
