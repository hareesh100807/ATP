import exp from "express";
import { ProductModel } from "../models/ProductModel.js";
export const productApp = exp.Router();

//Create a product
productApp.post("/products", async (req, res) => {
  //get the data from the client
  const prodObj = req.body;
  //create a document
  const newProductDocument = new ProductModel(prodObj);
  //save
  const result = await newProductDocument.save();
  //send response
  res.status(200).json({ message: "Product created" });
});

//Read all products
productApp.get("/products", async (req, res) => {
  let prodList = await ProductModel.find();
  res.status(200).json({ message: "Products", products: prodList });
});

//Read product by productId
productApp.get("/products/:productId", async (req, res) => {
  const pid = Number(req.params.productId);
  console.log(pid);
  const userObj = await ProductModel.findOne({ _id: pid });
  if (!userObj) {
    return res.status(404).json({ message: "Product not found" });
  }
  res.status(200).json({ message: "Product", payload: userObj });
});

//update a product by id
productApp.put("/products/:productId", async (req, res) => {
  const pid = Number(req.params.productId);
  const prodObj = req.body;
  const updatedProduct = await ProductModel.findByIdAndUpdate(pid, prodObj, {
    new: true,
  });
  if (!updatedProduct) {
    return res.status(404).json({ message: "Product not found" });
  }
  res.status(200).json({ message: "Product updated", payload: updatedProduct });
});

//delete the product by productId
productApp.delete("/products/:id", async (req, res) => {
  let pid = Number(req.params.id);
  let deletedProduct = await ProductModel.findOneAndDelete({ _id: pid });
  if (!deletedProduct) {
    return res.status(404).json({ message: "Product not found" });
  }
  res.status(200).json({ message: "Product deleted" });
});
