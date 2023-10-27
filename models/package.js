import mongoose, { Schema } from "mongoose";

const packageSchema = new Schema(
    {
        imgUrl: {
            type: String,
            required: true,
        },
        category: {
            type: String,
            required: true,
        },
        price: {
            type: Number,
            required: true,
        },
        name: {
            type: String,
            required: true,
        },
        description: {
            type: String,
            required: true,
        },
        rating: {
            type: Number,
            required: true,
        },
        },
        { timestamps: true }
        );

    
const Package = mongoose.model('Package', packageSchema);

module.exports = Package;

