'use client';

import NavbarGreen from '@/components/NavbarGreen';
import { useSearchParams } from 'next/navigation'
import { useEffect, useState } from 'react';
//import PackageCardListing from '@/components/PackageCardListing';



export default function CabinsPage() {
  const searchParams = useSearchParams()
  const selectedPackage =  searchParams.get('selectedPackage')
  const [data, setData] = useState();

  useEffect(() => {
    if (selectedPackage) {
      const fetchData = async () => {
        const response = await fetch(`/api/cabins?selectedPackage=${selectedPackage}`);
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

  return (
    <>
      <NavbarGreen />
      {data && <p>{JSON.stringify(data)}</p>}
    </>
  );
}
