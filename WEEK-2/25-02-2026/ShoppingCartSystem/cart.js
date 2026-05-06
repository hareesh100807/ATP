/**
 * cart.js
 * --------
 * Cart module for the Shopping Cart System.
 * Handles adding, removing, updating items in the cart,
 * and calculating the total.
 *
 * Concepts: ES6 Modules (import/export), Array iteration
 */

import { getProductById, checkStock } from "./product.js";

/**
 * Adds a product to the cart after verifying stock availability.
 * @param {number} productId - The ID of the product to add.
 * @param {number} quantity  - Quantity to add.
 */
function addToCart(productId, quantity) {
    const product = getProductById(productId);
    if (product && checkStock(productId, quantity)) {
        console.log(`Added ${quantity} of ${product.name} to cart`);
    } else {
        console.log("Failed to add item to cart");
    }
}

/**
 * Removes a product from the cart by its ID.
 * @param {number} productId - The product ID to remove.
 */
function removeFromCart(productId) {
    const product = getProductById(productId);
    if (product) {
        console.log(`Removed ${product.name} from cart`);
    } else {
        console.log("Failed to remove ");
    }
}

/**
 * Updates the quantity of a product already in the cart.
 * @param {number} productId - The product ID to update.
 * @param {number} quantity  - New quantity value.
 */
function updateQuantity(productId, quantity) {
    const product = getProductById(productId);
    if (product && checkStock(productId, quantity)) {
        console.log(`Updated ${product.name} quantity to ${quantity}`);
    } else {
        console.log("Failed to update");
    }
}

/**
 * Displays all items currently in the cart with their prices.
 * @param {Array} cartItems - Array of cart item objects.
 */
function getCartItems(cartItems) {
    console.log("Cart Items:");
    cartItems.forEach(item => {
        const product = getProductById(item.productId);
        if (product) {
            console.log(`${product.name} - Quantity: ${item.quantity} - Price: ${product.price * item.quantity}`);
        }
    });
}

/**
 * Calculates the total price of all items in the cart.
 * @param {Array} cartItems - Array of cart item objects.
 * @returns {number} The grand total of the cart.
 */
function getCartTotal(cartItems) {
    let total = 0;
    cartItems.forEach(item => {
        const product = getProductById(item.productId);
        if (product) {
            total += product.price * item.quantity;
        }
    });
    return total;
}

/**
 * Empties the entire cart.
 */
function clearCart() {
    console.log("Cart cleared");
}

export { addToCart, removeFromCart, getCartTotal, clearCart, getCartItems, updateQuantity }