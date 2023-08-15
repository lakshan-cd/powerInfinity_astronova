const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const tripSchema = new Schema({
    mode: {
        type: String,
        required: true
    },
    departureTime: {
        type: Date,  // if cant use string
        required: true
    },
    availableSeat: {
        type: Number,
        required: true
    },
    startDate: {
        type: Date, 
        required: true
    },
    endDate: {
        type: Date,
        required: true
    },
    from: {
        type:Schema.Types.ObjectId,
        ref: 'Planet'
    },
    to: {
        type:Schema.Types.ObjectId,
        ref: 'Planet'
    }

})

module.exports = mongoose.model("Trip", tripSchema);