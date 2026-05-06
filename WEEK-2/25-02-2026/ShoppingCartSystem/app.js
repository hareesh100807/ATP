/**
 * app.js — Shopping Cart System Entry Point
 * -------------------------------------------
 * Demonstrates the full shopping cart workflow:
 * browse products → add to cart → update → checkout with coupon.
 *
 * Concepts: ES6 Module imports, function composition
 */

import { getAllProducts, searchProducts } from './product.js';
import { addToCart, getCartItems, getCartTotal, updateQuantity, removeFromCart } from './cart.js';
import { processPayment } from './payment.js';

// ─── 1. Browse Products ─────────────────────────────────────
console.log("Available Products:");
getAllProducts();

console.log("\nSearch for 'phone':");
searchProducts('phone');

// ─── 2. Add Items to Cart ────────────────────────────────────
addToCart(2, 1);  // Add 1 Phone to cart
addToCart(3, 2);  // Add 2 Headphones to cart

console.log("\nCart Items:");
getCartItems();
console.log("Total Amount:", getCartTotal(getCartItems()));

// ─── 3. Update Cart ─────────────────────────────────────────
console.log("Updating Cart:");
updateQuantity(3, 1);   // Change Headphones quantity to 1

console.log("\nRemoving item from cart");
removeFromCart(2);       // Remove Phone from cart

console.log("\nCart Items after update:");
getCartItems();
console.log("\nTotal Amount after update:", getCartTotal(getCartItems()));

// ─── 4. Checkout ─────────────────────────────────────────────
console.log("Checkout:");
const order = processPayment('credit_card', 'WELCOME10');
console.log("Order processed:", order);
