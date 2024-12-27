const ProductModel = require("../../models/product.model");
const mongoose = require("mongoose");

const allProducts = async (req, res) => {
  const products = await ProductModel.find({});
  res.json({ products });
};

const singleProduct = async (req, res) => {
  const { id } = req.params;
  console.log(id);
  try {
    const isValid = mongoose.Types.ObjectId.isValid(id);
    if (!isValid) {
      return res
        .status(400)
        .json({ error: "true", message: "Invalid product id" });
    }
    const product = await ProductModel.findById(id);
    if (!product) {
      return res
        .status(404)
        .json({ error: "true", message: "Product not found" });
    }
    res.status(200).json(product);
  } catch (error) {
    console.log(error.message, ":-->Error in fetching a single product");
    return res
      .status(501)
      .json({ error: "true", message: "Internal server error" });
  }
};

module.exports = {
  allProducts,
  singleProduct,
};
