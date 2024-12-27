const mongoose = require("mongoose");
const productSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    images: {
      type: [String],
      // required:true
    },
    price: {
      type: Number,
      required: true,
      min: 0,
    },
    category: {
      type: String,
      //   required: true,
      enum: [], // Home furnishing, Bedding, Kids Bedding, Traditional Bedding
      //   you can add more if you know what categories you want to allow
      // only then it will work, otherwise do no do it
    },
    description: {
      type: String,
      //   required: true,
      trim: true,
    },
    stock: {
      type: Number,
      min: 0,
      // required:true
    },
    sizes: {
      type: [String], //think about it more
      // required:true
    },
    material: {
      type: String,
      // required:true
    },
    colors: {
      type: [String],
      // required:true
    },
    ratings: {
      average: {
        type: Number,
        default: 0,
        min: 0,
        max: 5,
      },
      totalReviews: {
        type: Number,
        default: 0,
        min: 0,
      },
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Product", productSchema);


// bestseller
// subcategory
// think about it