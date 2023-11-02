import mongoose, { Schema } from "mongoose";

//add more imgUrls here

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
         description: {
            type: String,
            required: true,
        },
         cabinName: {
            type: String,
            required: true,
        },
        included: {
            type: [String],
            required: true,
            },
           
        },
        { timestamps: true });
    
        

export default mongoose.models.Package || mongoose.model("Package", packageSchema);

       
    

