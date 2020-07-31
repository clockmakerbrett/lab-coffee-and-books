const mongoose = require("mongoose");

const placeSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      enum: ["coffee_shop", "book_store"],
    },
    location: {
      coordinates: [
        {
          type: Number,
          min: -180,
          max: 180,
        },
      ],
      type: {
        type: String,
        default: "point",
      },
    },
  },
  {
    timestamps: true,
  }
);

const Place = mongoose.model("places", placeSchema);

module.exports = Place;
