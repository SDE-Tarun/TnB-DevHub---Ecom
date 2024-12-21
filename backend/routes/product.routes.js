const express = require('express')
const router = express.Router();
const ProductModel = require('../models/product.model');

router.get('/home', async (req, res)=>{
    const products = await ProductModel.find({})
    res.json({products})
})

module.exports = router;