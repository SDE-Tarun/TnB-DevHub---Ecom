const validateRequest = (schema) => (req, res, next) => {
  const { _id, ...productData } = req.body;
  const { error, value } = schema.validate(productData);
  if (error) {
    console.log(error);
    return res.status(400).json({ message: error.details[0].message });
  }
  req.validatedBody = value;
  next();
};

module.exports = validateRequest;
