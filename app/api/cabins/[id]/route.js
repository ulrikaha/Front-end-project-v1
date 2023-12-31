import { connectMongoDB } from "@/lib/mongodb";
import Package from "@/models/package";
import { NextResponse } from "next/server";

export async function GET(req, {params} ) {
  const { id } = params;
  
  if (!id) {
    return NextResponse.error("Missing id parameter");
  }

  try {
    await connectMongoDB();

    const cabin = await Package.findOne({ cabinId: id }); 
    //console.log(cabin); 

    if (!cabin) {
      return NextResponse.json({
        status: 404,
        data: "Cabin not found",
      });
    }
    
    // Return the cabin object directly
    return NextResponse.json({
      status: 200,
      data: cabin,
    });
  
  } catch (error) {
    console.log("Error fetching cabin", error);
    return NextResponse.json({
      status: 500,
      data: "error fetching cabin",
    });
  }
}