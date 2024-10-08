import bcrypt from "bcrypt";
const data = {
  users: [
    {
      name: "Jyoti",
      email: "admin@example.com",
      password: bcrypt.hashSync("1234", 8),
      isAdmin: true,
    },
    {
      name: "Gimmi",
      email: "gimmi@example.com",
      password: bcrypt.hashSync("1234", 8),
      isAdmin: false,
    },
  ],
  products: [
    {
      name: "Women Floral Print Anarkali Kurta with Pant and Dupatta",
      category: "Weston dress",
      image: "/images/img_1.jpg",
      price: 120,
      countInStock: 10,
      brand: "Allen Solly",
      rating: 4.5,
      numReview: 13,
      description: "high quality product",
    },
    {
      name: "AASK Kurta for Women Dress",
      category: "Weston dress",
      image: "/images/img_2.jpg",
      price: 90,
      countInStock: 10,
      brand: "Allen Solly",
      rating: 5,
      numReview: 20,
      description: "high quality product",
    },
    {
      name: " AAYU FIT & Flare Georgette Calf Length Dress for Women",
      category: "Weston dress",
      image: "/images/img_3.jpg",
      price: 180,
      countInStock: 50,
      brand: "Allen Solly",
      rating: 3,
      numReview: 10,
      description: "high quality product",
    },
    {
      name: "Sheetal Associates Women Casual ",
      // "Regular Sleeves Crepe Solid Fit and Flare Dress"
      category: "Weston dress",
      image: "/images/img_4.jpg",
      price: 120,
      countInStock: 15,
      brand: "Allen Solly",
      rating: 4.5,
      numReview: 50,
      description: "high quality product",
    },
    {
      name: "QUEEN ELLIE Women's A-Line Midi Dress",
      category: "Weston dress",
      image: "/images/img_5.jpg",
      price: 100,
      countInStock: 0,
      brand: "Allen Solly",
      rating: 4.5,
      numReview: 34,
      description: "high quality product",
    },
    {
      name: "Western Dresses for Women",
      category: "Weston dress",
      image: "/images/img_6.jpg",
      price: 70,
      countInStock: 25,
      brand: "Allen Solly",
      rating: 4.5,
      numReview: 15,
      description: "high quality product",
    },
    {
      name: "QUEEN ELLIE Women's A-Line Midi Dress",
      category: "Weston dress",
      image: "/images/img_7.jpg",
      price: 200,
      countInStock: 4,
      brand: "QUEEN",
      rating: 4.5,
      numReview: 7,
      description: "high quality product",
    },
    {
      name: "AASK Kurta for Women Dress",
      category: "Weston dress",
      image: "/images/img_4.jpg",
      price: 230,
      countInStock: 9,
      brand: "Allen Solly",
      rating: 4.5,
      numReview: 8,
      description: "high quality product",
    },
    {
      name: "Nike Slim Shirt",
      category: "Shirts",
      image: "/images/p1.jpg",
      price: 120,
      countInStock: 10,
      brand: "Nike",
      rating: 4.5,
      numReview: 10,
      description: "high quality product",
    },

    {
      name: "Lacoste Free Shirt",
      category: "Shirts",
      image: "/images/p3.jpg",
      price: 220,
      countInStock: 0,
      brand: "Lacoste",
      rating: 4.5,
      numReview: 17,
      description: "high quality product",
    },
    {
      name: "Nike Slim Pant",
      category: "Pants",
      image: "/images/p4.jpg",
      price: 78,
      countInStock: 15,
      brand: "Nike",
      rating: 4.5,
      numReview: 14,
      description: "high quality product",
    },
    {
      name: "Puma Slim Pant",
      category: "Pants",
      image: "/images/p5.jpg",
      price: 65,
      countInStock: 34,
      brand: "Nike",
      rating: 4.5,
      numReview: 10,
      description: "high quality product",
    },
    {
      name: "Adidas Fit Pant",
      category: "Pants",
      image: "/images/p6.jpg",
      price: 139,
      countInStock: 12,
      brand: "Adidas",
      rating: 4.5,
      numReview: 15,
      description: "high quality product",
    },
  ],
};
export default data;
