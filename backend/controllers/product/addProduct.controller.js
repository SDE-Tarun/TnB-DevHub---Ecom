const ProductModel = require("../../models/product.model");

const addProduct = async (req, res) => {
  try {
    const product = await ProductModel.create(req.validatedBody);

    if (!product) {
      return res.status(400).json({ message: "Product could not be created" });
    }
    res.status(201).json({ message: "Product added successfully!", product });
  } catch (error) {
    console.log("Error encountered at creating products", error);
    return res
      .status(500)
      .json({ message: "Internal server error!", error: error.message });
  }
};

module.exports = addProduct;
