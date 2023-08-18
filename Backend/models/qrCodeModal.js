const mongoose = require("mongoose");

const QRCodeSchema = new mongoose.Schema({
  data: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("QRCode", QRCodeSchema);
