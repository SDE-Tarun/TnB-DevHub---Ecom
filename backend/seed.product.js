const dotenv = require("dotenv");
dotenv.config();
const Product = require("./models/product.model");
const validateProducts = require("./utils/validateProducts");
const mongoose = require("mongoose");

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("The database is successfully connected!");
  })
  .catch((err) => {
    console.log("Error in connecting to database from seed file", err);
    process.exit(1);
  });

const dummy_products = [
  {
    title: "Floral Print Bedsheet",
    price: 899,
    images: ["floral_bedsheet.jpg"], //carousel ka use hoga
    category: "Home Furnishing",
    description: "Soft cotton bedsheet with vibrant floral prints.",
    stock: 25, //iski need nhi h
    sizes: ["Single", "Double"],
    material: "Cotton",
    color: "Blue",
    ratings: {
      average: 4.5,
      totalReviews: 120,
    },
    //admin can do everything
  },
  {
    title: "Luxury Comforter",
    price: 2499,
    category: "Bedding",
    material: "Microfiber",
    ratings: {
      average: 4.8,
      totalReviews: 200,
    },
  },
  {
    title: "Abstract Design Bedsheet",
    price: 1199,
    images: ["abstract_design.jpg"],
    color: "Gray",
  },
  {
    title: "Winter Comforter",
    price: 3199,
    stock: 15,
    sizes: ["Queen"],
    description: "Thick comforter designed for cold winters.",
    ratings: {
      average: 4.2,
      totalReviews: 85,
    },
  },
  {
    title: "Geometric Bedsheet",
    price: 1099,
    description: "Bedsheet with a modern geometric pattern.",
    category: "Home Furnishing",
    color: "Multicolor",
  },
  {
    title: "Dual-tone Comforter",
    price: 2899,
    images: ["dual_tone_comforter.jpg"],
    material: "Polyester",
    sizes: ["Double"],
  },
  {
    title: "Kids Cartoon Bedsheet",
    price: 999,
    images: ["cartoon_bedsheet.jpg"],
    description: "Bedsheet featuring popular cartoon characters.",
    category: "Kids Bedding",
    stock: 30,
    material: "Cotton",
    ratings: {
      average: 4.6,
      totalReviews: 150,
    },
  },
  {
    title: "Reversible Comforter",
    price: 3299,
    sizes: ["Queen", "King"],
    color: "Navy Blue/White",
  },
  {
    title: "Ethnic Print Bedsheet",
    price: 799,
    stock: 20,
    material: "Handloom Cotton",
    category: "Traditional Bedding",
    ratings: {
      average: 4.0,
      totalReviews: 60,
    },
  },
  {
    title: "Quilted Comforter",
    price: 2699,
    images: ["quilted_comforter.jpg"],
    material: "Feather Touch",
    color: "Cream",
    description: "Quilted design for extra warmth and comfort.",
  },
];

async function seedDB() {
  try {
    const validationResult = validateProducts(dummy_products);
    if (!validationResult.valid) {
      console.log(validationResult.message);
      process.exit(1);
    }
    console.log("Seeding process started.........");
    await Product.deleteMany();
    console.log("Existing products cleared.");
    await Product.create(dummy_products);
    console.log("Products data successfully seeded");
  } catch (error) {
    console.log("Error while seeding products into the database");
    process.exit(1); //exits process if seeding failed
  } finally {
    process.exit(0); //Gracefully shutdown after the operation
  }
}

seedDB();
