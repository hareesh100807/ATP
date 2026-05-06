/**
 * discount.js
 * ------------
 * Discount module for the Shopping Cart System.
 * Manages coupon validation and discount calculation logic.
 *
 * Concepts: Object lookup, Conditional logic, ES6 Modules
 */

// ─── Coupon Database ─────────────────────────────────────────
// Each coupon has a type (percentage | flat), value, minimum amount,
// and an optional category restriction.
const coupons = {
    'WELCOME10':     { type: 'percentage', value: 10,  minAmount: 1000  },
    'FLAT500':       { type: 'flat',       value: 500, minAmount: 5000  },
    'ELECTRONICS20': { type: 'percentage', value: 20,  minAmount: 10000, category: 'electronics' }
};

/**
 * Validates a coupon code against the total amount and optional category.
 * @param {string} code        - The coupon code entered by the user.
 * @param {number} totalAmount - The cart total before discount.
 * @param {string} category    - Product category (optional).
 * @returns {Object|null} The coupon object if valid, null otherwise.
 */
function validateCoupon(code, totalAmount, category) {
    const coupon = coupons[code];
    if (!coupon) {
        console.log('Invalid coupon code');
        return null;
    }
    if (totalAmount < coupon.minAmount) {
        console.log(`Minimum amount for this coupon is ${coupon.minAmount}`);
        return null;
    }
    if (coupon.category && coupon.category !== category) {
        console.log(`This coupon is only valid for ${coupon.category} category`);
        return null;
    }
    return coupon;
}

/**
 * Calculates the discount amount based on coupon type.
 * @param {Object} coupon      - The validated coupon object.
 * @param {number} totalAmount - The cart total.
 * @returns {number} The discount value.
 */
function calculateDiscount(coupon, totalAmount) {
    if (coupon.type === 'percentage') {
        return (totalAmount * coupon.value) / 100;
    } else if (coupon.type === 'flat') {
        return coupon.value;
    }
    return 0;
}

/**
 * Applies a coupon to the total and returns the discounted amount.
 * @param {string} code        - Coupon code.
 * @param {number} totalAmount - Original total.
 * @param {string} category    - Product category.
 * @returns {number} Final amount after discount.
 */
function applyDiscount(code, totalAmount, category) {
    const coupon = validateCoupon(code, totalAmount, category);
    if (coupon) {
        const discount = calculateDiscount(coupon, totalAmount);
        const finalAmount = totalAmount - discount;
        console.log(`Coupon applied! You saved ${discount}. Final amount: ${finalAmount}`);
        return finalAmount;
    }
    return totalAmount;
}

export { applyDiscount, validateCoupon, calculateDiscount }