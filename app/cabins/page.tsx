'use client';

import NavbarGreen from '@/components/NavbarGreen';
import { useSearchParams } from 'next/navigation'
import { useEffect, useState } from 'react';
import PackageCardListing from '@/components/PackageCardListing';



export default function Cabins() {
  const searchParams = useSearchParams()
  const selectedPackage =  searchParams.get('selectedPackage')
  const [data, setData] = useState(null);

  useEffect(() => {
    if (selectedPackage) {
      const fetchData = async () => {
        const response = await fetch(`/api/packages?selectedPackage=${selectedPackage}`);
        if (response.ok) {
          const data = await response.json();
          setData(data);
        } else {
          console.log('Error fetching data:', response.statusText);
        }
      };

      fetchData();
    }
  }, [selectedPackage]);

  if (!selectedPackage) {
    return Error;
  }

  return (
    <>
    <NavbarGreen />
      {data && <PackageCardListing packageData={data} />}
    </>
  );
}
