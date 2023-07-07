const express = require('express')
const ControllerData = require('../../controllers/v2/productControllers')

const router = express.Router()

router.get('/products', ControllerData.view)
router.get('/products/:id', ControllerData.filter)
router.post('/products', ControllerData.addProduct)
router.patch('/products/:id', ControllerData.updateProduct)
router.delete('/products/:id', ControllerData.deleteProduct)

module.exports = router