
/*import mongoose from "mongoose";

export const connectMongoDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI)
        console.log("Connected to MongoDB")
    } catch (error) {
        console.log("Error connecting to MongoDB: ", error)
        
    }

}*/

import mongoose from "mongoose";

export const connectMongoDB = async () => {
    try {
        const connection = await mongoose.connect(process.env.MONGODB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });

        console.log("Connected to MongoDB");
        return connection.connection; // Return the mongoose connection object
    } catch (error) {
        console.error("Error connecting to MongoDB: ", error);
        throw error;
    }
};
