'use client';

import NavbarGreen from '@/components/NavbarGreen';
import { useEffect, useState } from 'react';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Reserve from '@/components/Reserve';
import Facilities from '@/components/Facilities';
import ReviewCarousel from '@/components/ReviewCarosell';

const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3
  };

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
        <NavbarGreen /> 
        {cabin ? (
          <div className="card w-full border shadow-lg relative">
            <div className="flex justify-between items-center pt-5">
            <img src={cabin.imgUrl} alt={cabin.category} className="w-full sm:h-[50%] md:h-[30%] lg:h-[25%] object-cover m-8" />
            </div>  
            <br />
            <Slider {...settings}>
      {cabin.imgs.map((imgs, index) => (
        <div key={index}>
          <img src={imgs} alt={`Thumbnail ${index}`} className="w-full object-cover" />
        </div>
      ))}
    </Slider>
            <div className="absolute top-12 right-12 w-[20%] flex items-center justify-center text-center font-lora text-lg font-bold border rounded-xl shadow-lg bg-white mt-3 mr-3">
              {cabin.category}
            </div>
            <Reserve  selectedPackage={cabin} /> 
            <Facilities />
            <div className="p-4">
            <div className="flex flex-wrap items-start w-11/12 mx-auto mt-12 bg-grey-100 p-4 border rounded shadow-lg font-lora'>">
            <div className="w-full md:w-1/2">
                <h3 className="mt-5 mb-3 ml-7 text-xl font-bold font-lora">Included in the package</h3>
                <ul className='list-disc pl-5 ml-6'>
                  {cabin.included.map((includedItem, index) => (
                    <li key={index}>{includedItem}</li>
                  ))}
                </ul>
              </div>
              </div>
            </div>
            <ReviewCarousel />
          </div>
        ) : (
          <p>Loading cabin details...</p>
        )}
      </>
    );
  }
  
  






