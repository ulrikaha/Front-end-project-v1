import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWifi } from '@fortawesome/free-solid-svg-icons';
import { faBed } from '@fortawesome/free-solid-svg-icons';



const PackageCardHome = () => {
    return (
        <div className="flex flex-wrap justify-center">

        <div className="m-2 p-4 border rounded shadow-lg w-64">
          <img src="/imgs/cabin-deluxe.png" alt="deluxe package" className="w-full h-60 object-cover rounded bg-center" />
          <h3 className="text-lg font-bold font-lora">Deluxe</h3>
          <p className="font-lora">Escape to the lap of luxury in 
          <br></br>our deluxe cabin rental package. 
          <br></br>Experience the perfect blend of rustic charm 
          <br></br>and modern comfort amidst the breathtaking natural surroundings. 
          <br></br>This package is curated for those seeking an exceptional 
          <br></br>retreat filled with relaxation and adventure.
          </p>
          <div>
          <FontAwesomeIcon icon={faBed} className="text-black" />
            <FontAwesomeIcon icon={faWifi} className="text-black" />
          </div>
        </div>

        <div className="m-2 p-4 border rounded shadow-lg w-64">
          <img src="/imgs/cabin-standard.png" alt="standard package" className="w-full h-60 object-cover rounded bg-center" />
          <h3 className="text-lg font-bold font-lora">Standard</h3>
          <p className="font-lora">Indulge in a comfortable and well-
          <br></br>rounded cabin rental experience with 
          <br></br>our standard package. This package is <br></br>designed to offer a blend of convenience, 
          <br></br>amenities, and activities, ensuring <br></br>a delightful stay for all types of travelers.</p>
          <div>
          <FontAwesomeIcon icon={faBed} className="text-black" />
            <FontAwesomeIcon icon={faWifi} className="text-black" />
          </div>
        </div>

        <div className="m-2 p-4 border rounded shadow-lg w-64">
          <img src="./imgs/cabin-budget.png" alt="budget package" className="w-full h-60 object-cover rounded bg-center" />
          <h3 className="text-lg font-bold font-lora">Budget</h3>
          <p className="font-lora">Experience a memorable getaway without 
          <br></br>breaking the bank with our budget-friendly cabin rental package. 
          <br></br>Unwind in the midst of nature, surrounded by the peaceful ambiance of 
          <br></br>the outdoors, making it an ideal escape for the budget-conscious traveler.</p>
          <div>
          <FontAwesomeIcon icon={faBed} className="text-black" />
            <FontAwesomeIcon icon={faWifi} className="text-black" />
        </div>
        </div>
  
</div>


     
      
    );
};

export default PackageCardHome;
