'use client';

import { useEffect, useState } from 'react';
import Facilities from '@/components/Facilities';



export default function CabinPage({ params }: { params: { id: string } }) {
    const [cabin, setCabin] = useState<Package | null>(null);
   



    useEffect(() => {
        const fetchData = async () => {
        if (params) {
        const { id } = params;

                try {
                    const response = await fetch(`/api/cabins/${id}`);
                    console.log(response)
                    if (response.ok) {

                        const jsonResponse = await response.json();
                        if (jsonResponse.status === 200) {
                            setCabin(jsonResponse.data);
                        console.log(jsonResponse.data);

                        } else {
                            // Handle cases where the status is not 200
                            console.error('Received non-200 status', jsonResponse.status);
                        }
                    } else {
                        throw new Error('Response was not OK');
                    }
                } catch (error) {
                    console.error('An error occurred while fetching the cabin data:', error);
                }
            }
          };
      
          fetchData();
        }, [params]);

    return (
        <>
        {cabin ? (
          <div className="card w-full border shadow-lg">
            <img src={cabin.imgUrl} alt={cabin.category} className="w-full" />
            <Facilities />
            <div className="p-4">
              <h2 className="text-2xl font-bold">{cabin.category}</h2>
              <p className="mb-2">{cabin.description}</p>
              <p className="mb-2">Price: ${cabin.price}</p>
              <p className="mb-2">Rating: {cabin.rating} stars</p>
              <p className="mb-2">Name: {cabin.cabinName}</p>
              {/* Info is an array, map through it to display */}
              <div className="info">
                <h3 className="text-xl font-bold">Info:</h3>
                <ul>
                  {cabin.info.map((infoItem, index) => (
                    <li key={index}>{infoItem}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ) : (
          <p>Loading cabin details...</p>
        )}
      </>
    );
  }
  
  






