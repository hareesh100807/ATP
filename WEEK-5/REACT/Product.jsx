/**
 * Product.jsx
 * ------------
 * A product card component that receives a product object via props
 * and renders its details (title, price, description, category, rating).
 *
 * @param {Object} props.productObj - Product data from an API or parent component
 *
 * Concepts: React Props, Destructuring, Tailwind CSS, JSX Expressions
 */

function Product(props) {
    // Destructure the productObj from props
    const { productObj } = props;

    return (
        <div className="border border-gray-300 p-4 m-2 rounded-2xl bg-gradient-to-r from-gray-300 to-gray-100 p-4 m-4">
            {/* Product Title */}
            <h2 className="text-xl text-green-600 font-bold">{productObj.title}</h2>
            <hr></hr>
            {/* Price formatted to 2 decimal places */}
            <p className="text-lg font-bold">${productObj.price.toFixed(2)}</p>
            {/* Description */}
            <p className="font-medium">{productObj.description}</p>
            {/* Category & Rating info */}
            <p ><b>Category:</b> {productObj.category}</p>
            <p><b>Rating:</b> {productObj.rating.rate} </p>
            <p><b>Count:</b> {productObj.rating.count} </p>
        </div>
    );
}

export default Product;