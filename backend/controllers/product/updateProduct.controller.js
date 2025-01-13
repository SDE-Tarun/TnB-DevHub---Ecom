const ProductModel = require("../../models/product.model");
const mongoose = require("mongoose");

const updateProduct = async (req, res) => {
  try {
    const { _id } = req.body;
    const { ...productData } = req.validatedBody;

    console.log(productData);

    const validId = mongoose.Types.ObjectId.isValid(_id);
    if (!validId) {
      return res.status(401).json({
        message: "Invalid id of product",
        error: error.message,
      });
    }

    const updatedProduct = await ProductModel.findByIdAndUpdate(
      _id,
      { $set: productData },
      { new: true, runValidators: true }
    );
    if (!updatedProduct) {
      return res.status(404).json({ message: "Product not found" });
    }
    res.status(200).json({
      message: "Product updated successfully",
      product: updatedProduct,
    });
  } catch (error) {
    console.log(error, "in catch block");
    return res
      .status(500)
      .json({ message: "Internal server error", error: error.message });
  }
};

module.exports = updateProduct;
