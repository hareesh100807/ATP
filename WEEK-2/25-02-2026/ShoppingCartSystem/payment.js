import { reduceStock } from "./product.js";
import { getCartItems, getCartTotal, clearCart } from "./cart.js";
import { applyDiscount } from "./discount.js";

function processPayment(paymentMethod, couponCode = null) {
  const cartItems = getCartItems();
  const totalAmount = getCartTotal(cartItems);
  const category = cartItems.length > 0 ? cartItems[0].category : null; // Assuming all items are from the same category
  const finalAmount = couponCode
    ? applyDiscount(couponCode, totalAmount, category)
    : totalAmount;

  if (paymentMethod === "credit_card") {
    console.log(`Processing credit card payment of ${finalAmount}`);
  } else if (paymentMethod === "upipay") {
    console.log(`Processing UPI payment of ${finalAmount}`);
  } else {
    console.log("Invalid payment method");
    return;
  }
  //Return order summary
  console.log("Order Summary:");
  cartItems.forEach((item) => {
    console.log(`Product ID: ${item.productId}, Quantity: ${item.quantity}`);
    reduceStock(item.productId, item.quantity); // Update stock after purchase
  });
  console.log(`Total Amount Paid: ${finalAmount}`);
  clearCart(); // Clear cart after successful payment
}

function validatePaymentMethod(Method) {
  const validMethods = ["credit_card", "upipay", "cash_on_delivery"];
  if (validMethods.includes(Method)) {
    return true;
  } else {
    console.log("Invalid payment method. Please choose a valid method.");
    return false;
  }
}

function generateOrderId() {
  return;
}

export { processPayment, validatePaymentMethod, generateOrderId };
