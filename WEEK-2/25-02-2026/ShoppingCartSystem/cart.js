import { getProductById, checkStock } from "./product.js";

//function to add items to cart
function addToCart(productId, quantity) {
  const product = getProductById(productId);
  if (product && checkStock(productId, quantity)) {
    console.log(`Added ${quantity} of ${product.name} to cart`);
  } else {
    console.log("Failed to add item to cart");
  }
}

function removeFromCart(productId) {
  const product = getProductById(productId);
  if (product) {
    console.log(`Removed ${product.name} from cart`);
  } else {
    console.log("Failed to remove ");
  }
}

function updateQuantity(productId, quantity) {
  const product = getProductById(productId);
  if (product && checkStock(productId, quantity)) {
    console.log(`Updated ${product.name} quantity to ${quantity}`);
  } else {
    console.log("Failed to update");
  }
}

function getCartItems(cartItems) {
  console.log("Cart Items:");
  cartItems.forEach((item) => {
    const product = getProductById(item.productId);
    if (product) {
      console.log(
        `${product.name} - Quantity: ${item.quantity} - Price: ${product.price * item.quantity}`,
      );
    }
  });
}

function getCartTotal(cartItems) {
  let total = 0;
  cartItems.forEach((item) => {
    const product = getProductById(item.productId);
    if (product) {
      total += product.price * item.quantity;
    }
  });
  return total;
}

function clearCart() {
  console.log("Cart cleared");
}

export {
  addToCart,
  removeFromCart,
  getCartTotal,
  clearCart,
  getCartItems,
  updateQuantity,
};
