//Product database
const products = [
  { id: 1, name: "Laptop", price: 50000, stock: 10, category: "electronics" },
  { id: 2, name: "Phone", price: 30000, stock: 15, category: "electronics" },
  {
    id: 3,
    name: "Headphones",
    price: 2000,
    stock: 25,
    category: "accessories",
  },
  { id: 4, name: "Mouse", price: 500, stock: 50, category: "accessories" },
  { id: 5, name: "Keyboard", price: 1500, stock: 30, category: "accessories" },
];
//get product by ID...
function getProductById(id) {
  let product = products.filter((product) => product.id === id);
  console.log(product);
}
//printing all products...
function getAllProducts() {
  console.log(products);
}
//Products by category...
function getProductsByCategory(category) {
  const categoryarray = products.filter(
    (product) => product.category === category,
  );
  console.log(categoryarray);
}
//Search products by name...
function searchProducts(query) {
  const searcharray = products.filter((product) =>
    product.name.toLowerCase().includes(query.toLowerCase()),
  );
  console.log(searcharray);
}

//Check stock availability
function checkStock(productId, quantity) {
  const product = products.find((product) => product.id === productId);
  if (product) {
    if (product.stock >= quantity) {
      return true;
    } else {
      return false;
    }
  } else {
    return false;
  }
}

//Update stock after purchase
function reduceStock(productId, quantity) {
  const product = products.find((product) => product.id === productId);
  if (product) {
    if (product.stock >= quantity) {
      product.stock -= quantity;
      console.log(`Stock updated. Remaining stock: ${product.stock}`);
    } else {
      console.log("Insufficient stock");
    }
  } else {
    console.log("Product not found");
  }
}

export {
  getProductById,
  getAllProducts,
  getProductsByCategory,
  searchProducts,
  checkStock,
  reduceStock,
};
