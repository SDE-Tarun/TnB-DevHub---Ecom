const ProductModel = require("../../models/product.model");
const mongoose = require("mongoose");

const deleteProduct = async (req, res) => {
  const { _id } = req.params;
  const isValid = mongoose.Types.ObjectId.isValid(_id);
  if (!isValid) {
    return res.status(400).json({ message: "Product details not found" });
  }
  try {
    const product = await ProductModel.findOneAndDelete({ _id });
    console.log(product);
    if (!product) {
      return res.status(404).json({
        message: "Product not found, therefore no deletion process initiated",
      });
    }
    return res.status(201).json({ message: "Product deleted successfully" });
  } catch (error) {
    console.log("Error encountered in try block, catch block speaking!");
    return res.status(500).json({ message: "Internal server error" });
  }
};

module.exports = deleteProduct;
