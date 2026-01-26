import express from "express";
import HomeSection from "../models/HomeSection.js";

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const data = await HomeSection.find().sort({ priority: 1 });
    res.json(data);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.post("/", async (req, res) => {
  try {
    const data = await HomeSection.create(req.body);
    res.status(201).json(data);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

export default router;
