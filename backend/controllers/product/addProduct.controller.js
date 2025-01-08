const ProductModel = require("../../models/product.model");

const addProduct = async (req, res) => {
  try {
    const {
      title,
      images,
      price,
      category,
      description,
      stock,
      sizes,
      material,
      colors,
      ratings,
      totalReviews,
    } = req.body;
    if (!title || !price) {
      return res
        .status(400)
        .json({ message: "Title and price are mandatory, please fill them" });
    }
    const product = await ProductModel.create({
      title,
      images,
      price,
      category,
      description,
      stock,
      sizes,
      material,
      colors,
      ratings,
      totalReviews,
    });
    console.log(product);
    res.status(201).json({ message: "Product added successfully!" });
  } catch (error) {
    console.log("Error encountered at creating products", error);
    res.status(500).json({ message: "Internal server error!" });
  }
};

module.exports = addProduct;
