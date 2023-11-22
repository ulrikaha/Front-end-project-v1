import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWifi, faBed } from '@fortawesome/free-solid-svg-icons';




const PackageCardHome = () => {
    return (
        <div className="flex flex-wrap justify-center">

        <div className="m-2 p-4 border rounded shadow-lg w-64">
          <img src="/imgs/cabin-deluxe.png" alt="deluxe package" className="w-full h-60 object-cover rounded bg-center" />
          <h3 className="text-lg font-bold font-lora mt-3">Deluxe</h3>
          <p className="font-lora mt-2">Escape to the lap of luxury in 
          <br></br> our deluxe cabin rental package. 
          <br></br> Experience the perfect blend of rustic charm and modern comfort
          <br></br> amidst the breathtaking natural surroundings. 
          <br></br> 
          <br></br>This package is curated for those seeking an exceptional retreat filled with relaxation and adventure.
         
          
          </p>
          <div>
          <FontAwesomeIcon icon={faBed} className="text-black mt-3" />
            <FontAwesomeIcon icon={faWifi} className="text-black ml-2" />
          </div>
        </div>

        <div className="m-2 p-4 border rounded shadow-lg w-64">
          <img src="/imgs/cabin-standard.png" alt="standard package" className="w-full h-60 object-cover rounded bg-center" />
          <h3 className="text-lg font-bold font-lora mt-3">Standard</h3>
          <p className="font-lora mt-2">Indulge in a comfortable and well-
          <br></br>rounded cabin rental experience with our standard package.
          <br></br>
          <br></br> This package is designed to offer 
          <br></br> a blend of convenience, amenities, and activities, ensuring a delightful stay for all types of travelers.</p>
          <div>
          <br></br>
          <FontAwesomeIcon icon={faBed} className="text-black mt-9" />
            <FontAwesomeIcon icon={faWifi} className="text-black ml-2" />
          </div>
        </div>

        <div className="m-2 p-4 border rounded shadow-lg w-64">
          <img src="./imgs/cabin-budget.png" alt="budget package" className="w-full h-60 object-cover rounded bg-center" />
          <h3 className="text-lg font-bold font-lora mt-3">Budget</h3>
          <p className="font-lora mt-2">Experience a memorable getaway without breaking the bank with our budget-friendly cabin rental package. 
          <br></br> 
          <br></br>Unwind in the midst of nature, surrounded by the peaceful ambiance of the outdoors, making it an ideal escape for the budget-conscious traveler.
          </p>
          <div>
          <FontAwesomeIcon icon={faBed} className="text-black mt-9" />
            <FontAwesomeIcon icon={faWifi} className="text-black ml-2" />
        </div>
        </div>
  
</div>


     
      
    );
};

export default PackageCardHome;
