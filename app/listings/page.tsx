'use client';

import PackageCard from "@/components/PackageCardListing";
import { useState } from "react";



export default function Listings() {
 

    const [packages, setPackages] = useState<Package[]>([]);
  


  return (
    <div>
        <h1>This is the listing page</h1>
      {/* Render package listings */}
      {packages.map((packageData) => (
        <PackageCard key={packageData.category} packageData={packageData} />
      ))}
    </div>
  );
}


