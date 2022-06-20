express = require('express')
const router = express.Router()
const controller = require('./controllers')


router.get('/api/items/:id', (req, res) => {controller.getProduct(req, res)})

router.get('/api/items/q/:q', (req, res) => {controller.getSearchResult(req.params.q, res)})


module.exports = router