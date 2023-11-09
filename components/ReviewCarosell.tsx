'use client';

import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

const ReviewCarousel = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };

    return (
        <div className="container mx-auto my-10">
            <h3 className="pb-5 ml-10 font-lora font-bold text-xl mb-4">Reviews</h3>
            <Slider {...settings}>

                <div className="flex flex-wrap">
                <div className="flex items-start">
                    <img src="https://images.pexels.com/photos/802374/pexels-photo-802374.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                        alt="deluxe package" 
                        className="w-40 h-40 object-cover rounded-full bg-center mr-4" 
                    />
                    <div className="flex flex-col">
                        <h3 className="text-lg font-bold font-lora pb-4">Mark & Sandra</h3>
                        <div className="flex justify-start mt-5 pb-5">
                            <FontAwesomeIcon icon={faStar} style={{color: "#e4a935",}} />
                            <FontAwesomeIcon icon={faStar} style={{color: "#e4a935",}} />
                            <FontAwesomeIcon icon={faStar} style={{color: "#e4a935",}} />
                            <FontAwesomeIcon icon={faStar} style={{color: "#e4a935",}} />
                        </div>
                        <p className="font-lora mt-5">
                            We had an amazing time at the cabin. The trip to Åre with our friends that rented their own cabin was a great experience.
                            We would definitely recommend this to anyone who wants to experience the Swedish mountains.
                        </p>
                    </div>
                </div>
                </div>

                <div className="flex flex-wrap">
                <div className="flex items-start">
                    <img src="https://images.pexels.com/photos/1267696/pexels-photo-1267696.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                        alt="standard package" 
                        className="w-40 h-40 object-cover rounded-full bg-center mr-4" 
                    />
                    <div className="flex flex-col">
                        <h3 className="text-lg font-bold font-lora pb-4">Maria & Tatiana</h3>
                        <div className="flex justify-start mt-5 pb-5">
                            <FontAwesomeIcon icon={faStar} style={{color: "#e4a935",}} />
                            <FontAwesomeIcon icon={faStar} style={{color: "#e4a935",}} />
                            <FontAwesomeIcon icon={faStar} style={{color: "#e4a935",}} />
                            <FontAwesomeIcon icon={faStar} style={{color: "#e4a935",}} />
                        </div>
                        <p className="font-lora mt-5">
                            We had an amazing time at the cabin. The trip to Åre with our friends that rented their own cabin was a great experience.
                            We would definitely recommend this to anyone who wants to experience the Swedish mountains.
                        </p>
                    </div>
                </div>
                </div>

                <div className="flex flex-wrap">
                <div className="flex items-start">
                    <img src="https://images.pexels.com/photos/984923/pexels-photo-984923.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                        alt="budget package" 
                        className="w-40 h-40 object-cover rounded-full bg-center mr-4" 
                    />
                    <div className="flex flex-col">
                        <h3 className="text-lg font-bold font-lora pb-4">Tina & Don</h3>
                        <div className="flex justify-start mt-5 pb-5">
                            <FontAwesomeIcon icon={faStar} style={{color: "#e4a935",}} />
                            <FontAwesomeIcon icon={faStar} style={{color: "#e4a935",}} />
                            <FontAwesomeIcon icon={faStar} style={{color: "#e4a935",}} />
                            <FontAwesomeIcon icon={faStar} style={{color: "#e4a935",}} />
                        </div>
                        <p className="font-lora mt-5">
                            We had an amazing time at the cabin. The trip to Åre with our friends that rented their own cabin was a great experience.
                            We would definitely recommend this to anyone who wants to experience the Swedish mountains.
                        </p>
                    </div>
                </div>
                </div>

            </Slider>
        </div>
    );
};

export default ReviewCarousel;
