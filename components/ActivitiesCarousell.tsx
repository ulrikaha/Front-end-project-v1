'use client'

import { useState } from "react";

const images: string[] = [
    "https://images.pexels.com/photos/10511496/pexels-photo-10511496.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/209878/pexels-photo-209878.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/6667978/pexels-photo-6667978.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/5064662/pexels-photo-5064662.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
];

const ActivitiesCarousel = (): JSX.Element => {
    const [currentIndex, setCurrentIndex] = useState<number>(0);

    const previousImage = (): void => {
        setCurrentIndex((currentIndex - 1 + images.length) % images.length);
    };

    const nextImage = (): void => {
        setCurrentIndex((currentIndex + 1) % images.length);
    };

    return (
        <div className="relative">
            <div className="flex justify-between absolute top-1/2 left-0 w-full">
                <button
                    className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded-l"
                    onClick={previousImage}
                >
                    {"<"}
                </button>
                <button
                    className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded-r"
                    onClick={nextImage}
                >
                    {">"}
                </button>
            </div>
            <div className="flex justify-center">
                <img
                    src={images[currentIndex]}
                    alt={`Image ${currentIndex}`}
                    width={800}
                    height='auto'
                    className="mx-2"
                />
            </div>
        </div>
    );
};

export default ActivitiesCarousel;
