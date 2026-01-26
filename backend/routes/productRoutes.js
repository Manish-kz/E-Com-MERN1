import express from "express";
import Product from "../models/Product.js";

const router = express.Router();



// Create Products
router.post("/", async (req, res) => {
    try {
        const product = await Product.create(req.body);
        res.status(201).json(product);
    } catch (error) {
       res.status(500).json({message: error.message})
    }
})

// Get All Products
router.get("/", async (req, res) => {
  try {
    const { category } = req.query;

    const filter = category ? { category } : {};

    const products = await Product.find(filter);
    res.json(products);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});


// GET SINGLE PRODUCT
router.get("/:id", async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);

    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }

    res.json(product);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});



// PUT /api/products/:id
router.put("/:id", async (req, res) => {
  const updated = await Product.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );
  res.json(updated);
});

// Filtering Logic

router.get("/", async (req, res) => {
  const { category } = req.query;

  const filter = category ? { category } : {};

  const products = await Product.find(filter);
  res.json(products);
});




export default router;