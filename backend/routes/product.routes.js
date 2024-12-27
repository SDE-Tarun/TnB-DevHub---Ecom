const express = require("express");
const router = express.Router();
const {
  allProducts,
  singleProduct,
} = require("../controllers/product/product.controller");

//API to display all the products
router.get("/all", allProducts);

// API for fetching single product
router.get("/single/:id", singleProduct);

module.exports = router;
