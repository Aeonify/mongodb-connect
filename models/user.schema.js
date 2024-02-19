const mongoose = require("mongoose");

// User Schema.
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true,
        min: 17
    }
},{versionKey: false, timestamps: true});

module.exports = mongoose.model("User", userSchema);