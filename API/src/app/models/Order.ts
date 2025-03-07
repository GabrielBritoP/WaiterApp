import { model, Schema } from "mongoose";

export const Order = model(
  "order",
  new Schema({
    name: { type: String, required: true },
    table: { type: String, required: true },
    status: {
      type: String,
      required: true,
      enum: ["WAITING", "IN_PRODUCTION", "DONE"],
      default: "WAITING",
    },
    createdAt: { type: Date, required: true, default: Date.now },
    products: [
      { type: Schema.Types.ObjectId, required: true, ref: "Product" },
      {
        quantity: { type: Number, default: 1 },
      },
    ],
  })
);
