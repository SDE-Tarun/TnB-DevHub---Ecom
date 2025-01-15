const express = require("express");
const router = express.Router();
const {
  allProducts,
  singleProduct,
} = require("../controllers/product/getProduct.controller");

// Performing CRUD for the product management

// Reading of products----->

// 1 .API to display all the products
router.get("/all", allProducts);

// 2. API for fetching single product
router.get("/single/:id", singleProduct);
// --------------------------------------------------------------------------------------

// Creating of products------>

// 1. API to create a new product

// middleware function to provide the validation result
const validateRequest = require("../middlewares/validateRequests");
// joi schema for product data validation
const productSchema = require("../validations/product.validation");
// controller function to add product
const addProduct = require("../controllers/product/addProduct.controller");

router.post("/add", validateRequest(productSchema), addProduct);
// ---------------------------------------------------------------------------------------

// Update the existing product

const updateProduct = require("../controllers/product/updateProduct.controller");

router.put("/update", validateRequest(productSchema), updateProduct);

// Deleting products -->
// start working on this module later

const deleteProduct = require("../controllers/product/deleteProduct.controller");

router.delete("/product/:_id", deleteProduct);

module.exports = router;
