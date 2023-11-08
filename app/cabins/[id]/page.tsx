'use client';

import { useEffect, useState } from 'react';



  

export default function CabinPage({ params }: { params: { id: string } }) {
    const [cabin, setCabin] = useState<Package>();
   



    useEffect(() => {
        const fetchData = async () => {

            if (params) {
                const { id } = params;

                try {
                    const response = await fetch(`/api/cabins/${id}`);
                    console.log(response)
                    if (response.ok) {

                        const data = await response.json();
                        console.log(data);
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
    }, []);

    return (
        <>
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
        </>
    );
}
  
  






