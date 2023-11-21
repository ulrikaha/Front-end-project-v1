
'use client';


import { useSearchParams } from 'next/navigation'
import { useEffect, useState } from 'react';
//import  CabinCard from '@/components/CabinCard';
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
     
      <div className='flex flex-wrap justify-center mt-10'>
          
      {data && data.data && Array.isArray(data.data) && data.data.map((selectedPackage: any, _id: string) => (
          <CabinCard2
            key={selectedPackage._id}
            selectedPackage={selectedPackage}
          />
        ))}
      </div>
      
    </>
  );
}  
    
  













  

  

 