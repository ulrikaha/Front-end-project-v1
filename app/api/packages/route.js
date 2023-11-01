import { connectMongoDB } from "@/lib/mongodb";
import Package from "@/models/package";


export default async function handler(req, res) {
  try {
    await connectMongoDB(); 

    if (req.method === 'GET') {
      const { selectedPackage } = req.query; // Retrieve the selected package from the query parameter
      
      console.log('Selected Package:', selectedPackage); // Log the selected package

      if (selectedPackage === 'all') {
        // Fetch all packages
        const packages = await Package.find({});
        res.status(200).json(packages);

      } else {
        // Fetch packages based on the selected package
        const packages = await Package.find({ category: selectedPackage });
        console.log('Selected Packages:', packages);
        res.status(200).json(packages);
      }
    } else {
      res.status(405).json({ error: 'Method not allowed' });
    }
  } catch (error) {
    console.error('Error fetching packages:', error);
    res.status(500).json({ error: 'Error fetching packages' });
  }

  return res;
}
