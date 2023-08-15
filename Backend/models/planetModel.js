const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const planetSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    lengthOfYear: {
        type: Number,
        required: true
    }
})

module.exports = mongoose.model("Planet", planetSchema);