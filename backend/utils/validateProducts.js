const validateProducts = (products) => {
  products.forEach((product) => {
    if (!product.title || !product.price) {
      return {
        valid: "false",
        message: "Title and price are mandatory fields for product",
      };
    }
    if (product.price < 0) {
      return {
        valid: "false",
        message: "Price of product cannot be less than 0",
      };
    }
  });
  return { valid: "true", message: "Product fields are validated" };
};

module.exports = validateProducts;
