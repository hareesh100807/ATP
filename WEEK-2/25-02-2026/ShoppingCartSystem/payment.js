/**
 * payment.js
 * -----------
 * Payment module for the Shopping Cart System.
 * Processes checkout, applies discounts, updates stock,
 * and generates order summaries.
 *
 * Concepts: ES6 Modules, Control flow, Function composition
 */

import { reduceStock } from "./product.js";
import { getCartItems, getCartTotal, clearCart } from "./cart.js";
import { applyDiscount } from "./discount.js";

/**
 * Processes the payment for the current cart.
 * Applies coupon if provided, validates payment method,
 * reduces stock, and clears the cart.
 *
 * @param {string}      paymentMethod - 'credit_card' | 'upipay'
 * @param {string|null} couponCode    - Optional coupon code.
 */
function processPayment(paymentMethod, couponCode = null) {
    const cartItems = getCartItems();
    const totalAmount = getCartTotal(cartItems);

    // Assume all items belong to the same category for coupon validation
    const category = cartItems.length > 0 ? cartItems[0].category : null;

    // Apply discount if a coupon code is provided
    const finalAmount = couponCode
        ? applyDiscount(couponCode, totalAmount, category)
        : totalAmount;

    // Route to the correct payment processor
    if (paymentMethod === 'credit_card') {
        console.log(`Processing credit card payment of ${finalAmount}`);
    } else if (paymentMethod === 'upipay') {
        console.log(`Processing UPI payment of ${finalAmount}`);
    } else {
        console.log('Invalid payment method');
        return;
    }

    // Print order summary and update stock
    console.log('Order Summary:');
    cartItems.forEach(item => {
        console.log(`Product ID: ${item.productId}, Quantity: ${item.quantity}`);
        reduceStock(item.productId, item.quantity);
    });

    console.log(`Total Amount Paid: ${finalAmount}`);
    clearCart(); // Empty the cart after successful payment
}

/**
 * Validates whether the chosen payment method is supported.
 * @param {string} Method - Payment method string.
 * @returns {boolean} True if the method is valid.
 */
function validatePaymentMethod(Method) {
    const validMethods = ['credit_card', 'upipay', 'cash_on_delivery'];
    if (validMethods.includes(Method)) {
        return true;
    } else {
        console.log('Invalid payment method. Please choose a valid method.');
        return false;
    }
}

/**
 * Generates a unique order ID.
 * @returns {string} A unique order identifier.
 */
function generateOrderId() {
    return `ORD-${Date.now()}`;
}

export { processPayment, validatePaymentMethod, generateOrderId }