function Product(props){
    const{productObj}=props;
    return(
        <div className="border border-gray-300 p-4 m-2 rounded-2xl bg-gradient-to-r from-gray-300 to-gray-100 p-4 m-4">
            <h2 className="text-xl text-green-600 font-bold">{productObj.title}</h2>
            <hr></hr>
            <p className="text-lg font-bold">${productObj.price.toFixed(2)}</p>
            <p className="font-medium">{productObj.description}</p>
            <p ><b>Category:</b> {productObj.category}</p>
            <p><b>Rating:</b> {productObj.rating.rate} </p>
            <p><b>Count:</b> {productObj.rating.count} </p>
        </div>
    )
}
export default Product;