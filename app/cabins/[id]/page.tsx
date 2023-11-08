'use client';

import { useEffect, useState } from 'react';

type Params = {
    params: {
        id: string;
    };
};

export default function CabinPage({ params }: Params) {
    const [cabin, setCabin] = useState<Package>();

console.log(params);

    useEffect(() => {
        const fetchData = async () => {
            try {
                //const response = await fetch(`/api/cabins/${params.id}`);
                const response = await fetch(`/api/cabins/1`);
    
                if (response.ok) {
                    const data = await response.json();
                    setCabin(data);

                } else {
                    throw new Error('Response was not valid JSON');
                }
            } catch (error) {
                console.error(error);
            }
        };

        fetchData();
    }, [params.id]);

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
  
  






