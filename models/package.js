import mongoose, { Schema } from "mongoose";

const packageSchema = new Schema(
    {
        imgUrl: {
            type: String,
            required: true,
        },
        category: {
            type: String,
            enum: ["All", "Deluxe", "Standard", "Budget"], 
            required: true,
        },
        price: {
            type: Number,
            required: true,
        },
        cabinName: {
            type: String,
            required: true,
        },
        description: {
            type: String,
            required: true,
        },
      
        },
        { timestamps: true }
        );

    
const Package = mongoose.model('Package', packageSchema);

module.exports = Package;

