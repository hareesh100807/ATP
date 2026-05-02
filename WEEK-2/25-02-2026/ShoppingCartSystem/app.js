import { getAllProducts,searchProducts,getProductsByCategory} from './product.js';
import { addToCart, getCartItems, getCartTotal, updateQuantity, removeFromCart } from './cart.js';
import { processPayment } from './payment.js';


console.log("Available Products:")
getAllProducts()
console.log("\nSearch for 'phone':")
searchProducts('phone')

addToCart(2, 1) // Adding 1 Phone to cart
addToCart(3, 2) // Adding 2 Headphones to cart
console.log("\nCart Items:")
getCartItems()
console.log("Total Amount:",getCartTotal(getCartItems()))
console.log("Updating Cart:")
updateQuantity(3, 1) // Updating Headphones quantity to 1
console.log("\n Removing item from cart")
removeFromCart(2) // Removing Phone from cart   
console.log("\nCart Items after update:")
getCartItems()
console.log("\nTotal Amount after update:",getCartTotal(getCartItems()))
console.log("Checkout:")
const order = processPayment('credit_card', 'WELCOME10')
console.log("Order processed:", order)
