import { connectMongoDB } from "@/lib/mongodb";
import { NextResponse } from "next/server";

export async function POST(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ success: false, error: "Method Not Allowed" });
  }

  try {
    const db  = await connectMongoDB();
    const collection = db.collection("bookings");

    const {
      checkIn,
      checkOut,
      cabinName,
      guests,
      location,
      included,
      selectedPackage,
      price,
      cancellationProtection,
      totalPrice,
      name,
      email,
      phone,
      address,
      zipCode,
      city,
      paymentOptions,
    } = req.body;

    console.log("Console for Received booking data:", req.body);

    if (
      !checkIn ||
      !checkOut ||
      !cabinName ||
      !guests ||
      !location ||
      !included ||
      !selectedPackage ||
      !price ||
      !cancellationProtection ||
      !totalPrice ||
      !name ||
      !email ||
      !phone ||
      !address ||
      !zipCode ||
      !city ||
      !paymentOptions
    ) {
      if (res) {
        return NextResponse.json({
          status: 400,
          data: "Invalid data received. Please check your input.",
        });
      } else {
        throw new Error("Invalid data. Please check your input.");
      }
    }

    // Insert the booking data into the MongoDB collection
    const result = await collection.insertOne({
      checkIn,
      checkOut,
      cabinName,
      guests,
      location,
      included,
      selectedPackage,
      price,
      cancellationProtection,
      totalPrice,
      name,
      email,
      phone,
      address,
      zipCode,
      city,
      paymentOptions,
    });

    return res.status(200).json({ success: true });
  } catch (error) {
    console.error("Error handling booking:", error);
    if (res) {
      return res.status(500).json({ success: false, error: "Internal Server Error" });
    } else {
      throw error;
    }
  }
}
