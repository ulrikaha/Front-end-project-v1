'use client';

import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';



export default function CabinPage() {
    const [cabin, setCabin] = useState<Package>();
    const params = useParams(); // This is how you get the params in a client component

console.log(params);

    useEffect(() => {
        const fetchData = async () => {
            if (params) {
                const { id } = params; // Now we can destructure 'id' safely
                try {
                    const response = await fetch(`/api/cabins/${id}`);
        
                    if (response.ok) {
                        const data = await response.json();
                        setCabin(data);
                    } else {
                        throw new Error('Response was not valid JSON');
                    }
                } catch (error) {
                    console.error(error);
                }
            }
        };

        fetchData();
    }, [params]);

    return (
        <main>
            <h1>Cabin details</h1>
            {cabin && (
                <div className="card w-full border shadow-lg">
                    <img src={cabin.imgUrl} alt={cabin.category} />
                    <h2>{cabin.category}</h2>
                    <p>{cabin.description}</p>
                    <p>{cabin.price}</p>
                    <p>{cabin.info}</p>
                    <p>{cabin.rating}</p>
                    <p>{cabin.cabinName}</p>
                </div>
            )}
        </main>
    );
}
  
  






