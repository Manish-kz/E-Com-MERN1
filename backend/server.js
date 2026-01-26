/* eslint-env node */
import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
import productRoutes from "./routes/productRoutes.js"
import homeSectionRoutes from "./routes/homeSectionRoutes.js"

dotenv.config();

const app = express();


app.use(cors());
app.use(express.json());
app.use("/api/products", productRoutes);
app.use("/api/home-sections", homeSectionRoutes);



mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.error("Mongo error:", err));

app.get("/", (req, res) => {
  res.send("Server is running");
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () =>
  console.log(`Server running on port ${PORT}`)
);
