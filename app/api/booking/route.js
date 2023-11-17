import { connectMongoDB } from "@/lib/mongodb";
import Booking from "@/models/Booking";
import { NextResponse } from "next/server";

export async function POST(req, res) {
    if (req.method !== "POST") {
        return res.status(405).json({ success: false, error: "Method Not Allowed" });
    }

    try {
        const db = await connectMongoDB();

        const bookingData = await req.json()
        console.log("BOOKING DATA", bookingData)
        // Create a new instance of the Booking model with the extracted data
        const newBooking = new Booking(bookingData);

        // Validate the booking data
        const validationResult = newBooking.validateSync();
       // console.log(validationResult.errors);
        if (validationResult) {
            return NextResponse.json({ success: false, error: validationResult.errors }, { status: 400 });
        }

        // Save the new booking instance to the MongoDB collection
        console.log("SUCCESS in creating booking")
        await newBooking.save();

        return NextResponse.json({ success: true }, { status: 200 });
        
    } catch (error) {
        console.error("Error handling booking:", error);

        return NextResponse.json({ success: false, error: "Internal Server Error" }, { status: 500 });
    }
}

