import { connectMongoDB } from "@/lib/mongodb";
import Package from "@/models/package";
import { NextResponse } from "next/server";


//export default async function handler

export async function GET(req, res) {
  console.log(req);
  const url = new URL(req.url)
  const selectedPackage = url.searchParams.get("selectedPackage")
  console.log("REQUEST", url, url.searchParams)

  try {
    await connectMongoDB();

  if (!selectedPackage) {
    return NextResponse.json({
      status: 400,
      data: "No package selected",
  });
  }

  let packages;
    if (selectedPackage === "all") {
      packages = await Package.find({});
    } else {
      packages = await Package.find({ category: selectedPackage });
    }

    return NextResponse.json({
      status: 200,
      data: packages,
  });
  } catch (error) {
    console.log("Error fetching packages", error);
    return NextResponse.json({
      status: 500,
      data: "error fetching packages",
  });
  }
}
