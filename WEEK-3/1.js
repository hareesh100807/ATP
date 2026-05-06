/**
 * 1.js
 * -----
 * Partial Express.js route handlers for a Product REST API.
 * Demonstrates GET (all & by ID) and DELETE operations
 * using Mongoose with async/await.
 *
 * Concepts: Express Router, Mongoose queries, REST API, async/await
 */

// ─── GET All Products ────────────────────────────────────────
// Fetches every product document from MongoDB
productApp.get("/product", async (req, res) => {
    const products = await productModel.find();
    return res.json({ message: "Products", payload: products });
});

// ─── GET One Product by ID ───────────────────────────────────
// Retrieves a single product using the :id route parameter
productApp.get("/product/:id", async (req, res) => {
    const pid = req.params.id; // Extract product ID from URL
    const prodList = await productModel.findById(pid);

    if (!prodList) {
        return res.status(400).json({ message: "Product not found" });
    }
    res.status(200).json({ message: "Products", payload: prodList });
});

// ─── DELETE One Product by ID ────────────────────────────────
// Deletes a product document and returns the deleted item
productApp.delete("/product/:id", async (req, res) => {
    const id = req.params.id;
    const deletedItem = await productModel.findByIdAndDelete(id);

    if (!deletedItem) {
        return res.status(400).json({ message: "Product not found" });
    }
    res.status(200).json({ message: "Product deleted", payload: deletedItem });
});