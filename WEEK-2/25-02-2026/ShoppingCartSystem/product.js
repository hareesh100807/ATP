/**
 * product.js
 * -----------
 * Product module for the Shopping Cart System.
 * Manages the product catalog — provides functions to
 * search, retrieve, check stock, and update inventory.
 *
 * Concepts: ES6 Modules (export), Array methods (filter, find)
 */

// ─── Product Database ────────────────────────────────────────
const products = [
    { id: 1, name: 'Laptop',     price: 50000, stock: 10, category: 'electronics'  },
    { id: 2, name: 'Phone',      price: 30000, stock: 15, category: 'electronics'  },
    { id: 3, name: 'Headphones', price: 2000,  stock: 25, category: 'accessories'  },
    { id: 4, name: 'Mouse',      price: 500,   stock: 50, category: 'accessories'  },
    { id: 5, name: 'Keyboard',   price: 1500,  stock: 30, category: 'accessories'  }
];

/**
 * Retrieves a product by its unique ID.
 * @param {number} id - The product ID to look up.
 * @returns {Object|undefined} The matching product object or undefined.
 */
function getProductById(id) {
    let product = products.filter(product => product.id === id);
    console.log(product);
}

/**
 * Logs all products currently in the catalog.
 */
function getAllProducts() {
    console.log(products);
}

/**
 * Filters and logs products that belong to a given category.
 * @param {string} category - Category name (e.g., 'electronics').
 */
function getProductsByCategory(category) {
    const categoryarray = products.filter(product => product.category === category);
    console.log(categoryarray);
}

/**
 * Searches products by name (case-insensitive partial match).
 * @param {string} query - The search keyword.
 */
function searchProducts(query) {
    const searcharray = products.filter(
        product => product.name.toLowerCase().includes(query.toLowerCase())
    );
    console.log(searcharray);
}

/**
 * Checks whether a product has enough stock for the requested quantity.
 * @param {number} productId - Product ID.
 * @param {number} quantity  - Desired quantity.
 * @returns {boolean} True if sufficient stock exists.
 */
function checkStock(productId, quantity) {
    const product = products.find(product => product.id === productId);
    if (product) {
        return product.stock >= quantity;
    }
    return false;
}

/**
 * Reduces the stock of a product after a purchase.
 * @param {number} productId - Product ID.
 * @param {number} quantity  - Quantity purchased.
 */
function reduceStock(productId, quantity) {
    const product = products.find(product => product.id === productId);
    if (product) {
        if (product.stock >= quantity) {
            product.stock -= quantity;
            console.log(`Stock updated. Remaining stock: ${product.stock}`);
        } else {
            console.log('Insufficient stock');
        }
    } else {
        console.log('Product not found');
    }
}

export { getProductById, getAllProducts, getProductsByCategory, searchProducts, checkStock, reduceStock }