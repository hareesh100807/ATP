
// get all products
productApp.get("/product",async(req,res)=>{
    const products= await productModel.find(._id)
    return res.json({message:"Products",payload:products})
})
// read one product
productApp.get("/product/:id",async(req,res)=>{
    const pid=req.params.id
    const prodList=await productModel.findById(pid)
    if(!prodList){
        return res.status(400).json({message:"Product not found"})
    }
    res.status(200).json({message:"Products", payload: prodList})
})
//get the id from the body

//check whether the product is existing or not
//if existed return the product

//delete one product
productApp.delete("/product/:id", async(req,res)=>{
    const id=req.params.id
    const deletedItem=await productModel.findByIdAndDelete(id)
    if(!deletedItem){
        return res.status(400).json({message:"Product not found"})
    }
    res.status(200).json({message:"Product deleted", payload:deletedItem})
})
//get the pid 
//check whether the product is existing or not