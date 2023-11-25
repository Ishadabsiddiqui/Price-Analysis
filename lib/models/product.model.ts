
import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    url: { type: "string", required: true, unique: true },
    currency: { type: "string", required: true },
    image: { type: "string", required: true },
    title: { type: "string", required: true },
    currentPrice: { type: Number, required: true },
    originalPrice: { type: Number, required: true },
    priceHistory: [
      {
        price: { type: Number, required: true },
        date: { type: Number, default: Date.now },
      },
    ],
    lowestPrice: { type: Number },
    highestPrice: { type: Number },
    averagePrice: { type: Number },
    discountRate: { type: Number },
    description: { type: String },
    category: { type: String },
    reviewsCount: { type: Number },
    isOutOfStock: { type: Boolean, default: false },
    users: [
      {
        email: { type: String, required: true },
      },
    ],
    default: [],
  },
  { timestamps: true }
);

const Product =
  mongoose.models.Product || mongoose.model("Product", productSchema);

export default Product;
