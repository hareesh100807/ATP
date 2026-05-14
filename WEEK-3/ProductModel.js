=======
/**
 * ProductModel.js
 * ----------------
 * Mongoose schema and model definition for the Product collection.
 * Defines the structure, validations, and constraints for product documents.
 *
 * Concepts: Mongoose Schema, Model, Validation, Timestamps
 */

import { Schema, model } from "mongoose";

// ─── Product Schema Definition 
const productSchema = new Schema({
    productId: {
        type: Number,
        required: [true, "productId is required field"]
    },
    productName: {
        type: String,
        required: [true, "productName is required field"]
    },
    price: {
        type: Number,
        required: [true, "price is required field"],
        min: [10000, "Minimum price is 10000"],   // Price floor
        max: [50000, "Maximum price is 50000"]     // Price ceiling
    },
    brand: {
        type: String,
        required: [true, "Brand is required field"]
    }
}, {
    versionKey: false,  // Disable __v field
    timestamps: true    // Auto-add createdAt & updatedAt
});

// Export the compiled Mongoose model
export const ProductModel = model("product", productSchema);

