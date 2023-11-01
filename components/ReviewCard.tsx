import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

const ReviewCard = () => {
    return (
        <div className="flex flex-wrap justify-center">
            <div className="m-2 border rounded shadow-lg w-64 relative">
                <img src="https://images.pexels.com/photos/802374/pexels-photo-802374.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                    alt="deluxe package" 
                    className="w-full h-60 object-cover rounded-full bg-center mb-5 absolute -top-1/4" 
                />
                 <br></br>
               <br></br>
               <br></br>
                <h3 className="text-lg font-bold font-lora text-center mt-12 p-5">Jane & Mark</h3>
                <div className="flex justify-center mt-5">
                    <FontAwesomeIcon icon={faStar} style={{color: "#e4a935",}} />
                    <FontAwesomeIcon icon={faStar} style={{color: "#e4a935",}} />
                    <FontAwesomeIcon icon={faStar} style={{color: "#e4a935",}} />
                    <FontAwesomeIcon icon={faStar} style={{color: "#e4a935",}} />
                </div>
                    <p className="font-lora mt-5">
                   We had an amazing time at the cabin. The trip to Åre with our friends that rented their own cabin was a great experience.
                   We would defeinitely recommend this to anyone who wants to experience the Swedish mountains.
                  </p>
                </div>


            <div className="m-2 border rounded shadow-lg w-64 relative">
                <img src="https://images.pexels.com/photos/2536597/pexels-photo-2536597.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                    alt="standard package" 
                    className="w-full h-60 object-cover rounded-full bg-center mb-5 absolute -top-1/4" 
                />
                 <br></br>
               <br></br>
               <br></br>
                <h3 className="text-lg font-bold font-lora text-center mt-12 p-5">John & Mary</h3>
                    <div className="flex justify-center mt-5">
                    <FontAwesomeIcon icon={faStar} style={{color: "#e4a935",}} />
                    <FontAwesomeIcon icon={faStar} style={{color: "#e4a935",}} />
                    <FontAwesomeIcon icon={faStar} style={{color: "#e4a935",}} />
                    <FontAwesomeIcon icon={faStar} style={{color: "#e4a935",}} />
                    </div>
                    <p className="font-lora mt-5">
                    We had an amazing time at the cabin. The trip to Åre with our friends that rented their own cabin was a great experience.
                   We would defeinitely recommend this to anyone who wants to experience the Swedish mountains.
                </p>
               </div>

            <div className="m-2 border rounded shadow-lg w-64 relative">
                <img src="https://images.pexels.com/photos/984923/pexels-photo-984923.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                    alt="budget package" 
                    className="w-full h-60 object-cover rounded-full bg-center absolute -top-1/4" 
                />
                <br></br>
               <br></br>
               <br></br>
                <h3 className="text-lg font-bold font-lora text-center mt-12 p-5">Tina & Don</h3>
                <div className="flex justify-center mt-5">
                    <FontAwesomeIcon icon={faStar} style={{color: "#e4a935",}} />
                    <FontAwesomeIcon icon={faStar} style={{color: "#e4a935",}} />
                    <FontAwesomeIcon icon={faStar} style={{color: "#e4a935",}} />
                    <FontAwesomeIcon icon={faStar} style={{color: "#e4a935",}} />
                </div>
                    <p className="font-lora mt-5">
                    We had an amazing time at the cabin. The trip to Åre with our friends that rented their own cabin was a great experience.
                   We would defeinitely recommend this to anyone who wants to experience the Swedish mountains.
                </p>
               
            </div>
        </div>
    );
};

export default ReviewCard;
