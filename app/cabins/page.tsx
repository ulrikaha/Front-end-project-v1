
'use client';

import NavbarGreen from '@/components/NavbarGreen';
import { useSearchParams } from 'next/navigation'
import { useEffect, useState } from 'react';
import CabinCard2 from '@/components/CabinCard2';





export default function CabinsPage() {
  const searchParams = useSearchParams()
  const selectedPackage =  searchParams.get('selectedPackage')
  const [data, setData] = useState<any[]>([]);

  useEffect(() => {
    if (selectedPackage) {
      const fetchData = async () => {
        const response = await fetch(`/api/cabins?selectedPackage=${selectedPackage}`);
        if (response.ok) {
          const data = await response.json();
          console.log(data);
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
     
      <div className='flex flex-wrap justify-center mt-10'>
          
      {data && 
      data.data && 
      Array.isArray(data.data) && 
      data.data.map((selectedPackage: any, _id: string) => (
        <div key={selectedPackage._id} className="my-2">
        <CabinCard2 selectedPackage={selectedPackage} />
      </div>
        ))}
      </div>
      
    </>
  );
}  
    
  













  

  

 