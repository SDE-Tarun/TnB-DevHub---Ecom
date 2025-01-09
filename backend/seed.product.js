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
    images: [
      "https://plus.unsplash.com/premium_photo-1670869816769-c64fbc7b9c4c?q=80&w=1160&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ], //carousel ka use hoga
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
    images: [
      "https://images.unsplash.com/photo-1721146609543-491c1ec04240?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YmVkc2hlZXRzfGVufDB8fDB8fHww"
    ],
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
    images: [
      "https://plus.unsplash.com/premium_photo-1670869816731-97a307d1c7ab?q=80&w=1160&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ],
    color: "Gray",
  },
  {
    title: "Winter Comforter",
    price: 3199,
    images: [
       "https://media.istockphoto.com/id/654925766/photo/bed-in-a-hotel-room-thailand.jpg?s=612x612&w=0&k=20&c=9Owm-cSU5ZCH56zPw1OhSzl4d2rMsyQoN5zLUtKZNsc="
    ],
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
    images: [
      "https://media.istockphoto.com/id/1326817118/photo/luxury-bedroom-interior-and-bed-in-hotel-apartment-on-koh-samui-island-in-thailand.jpg?s=612x612&w=0&k=20&c=d_yt-ZRn1oRi3AR_vIHHWGAtljr0311EMkFuDVrhXZU="
    ],
    description: "Bedsheet with a modern geometric pattern.",
    category: "Home Furnishing",
    color: "Multicolor",
  },
  {
    title: "Dual-tone Comforter",
    price: 2899,
    images: [
      "https://plus.unsplash.com/premium_photo-1684164600449-da3eeeb6c023?q=80&w=871&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ],
    material: "Polyester",
    sizes: ["Double"],
  },
  {
    title: "Kids Cartoon Bedsheet",
    price: 999,
    images: [
      "https://plus.unsplash.com/premium_photo-1670953687951-5a56f8606cc4?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ],
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
    images: [
      "https://media.istockphoto.com/id/641177180/photo/bedroom-interior.jpg?s=612x612&w=0&k=20&c=ftNrIcLpbUK2ZHMPFe0JQYc02LETsQA_4UBbd0YnS2U="
    ],
    sizes: ["Queen", "King"],
    color: "Navy Blue/White",
  }
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
