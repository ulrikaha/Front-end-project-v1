'use client';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faHeart } from "@fortawesome/free-solid-svg-icons";






export default function CabinCard() {
    return (
      <div className="flex flex-wrap justify-center">
        <div className="w-[80%] m-2 p-4 border rounded shadow-lg flex">  {/* Kept as a flex container */}
          <div className="flex-none mr-5 h-full"> {/* Added margin-right for spacing */}
            <img src="/imgs/cabin-deluxe.png" alt="deluxe package" className="object-cover h-full w-1/2" /> {/* Adjusted width and height */}
          </div>
          <div className="flex-grow p-4"> {/* This div contains the rest of your content */}
            <div className="flex">
              <h3 className="text-lg font-bold font-lora">Deluxe</h3>
            </div>
            <div>kr per night</div>
            <div>Name</div>
            <div>Info</div>
            <div>4.5</div>
            <div>
              <FontAwesomeIcon icon={faStar} className="text-black" />
              <FontAwesomeIcon icon={faStar} className="text-black" />
              <FontAwesomeIcon icon={faStar} className="text-black" />
              <FontAwesomeIcon icon={faStar} className="text-black" />
              <FontAwesomeIcon icon={faStar} className="text-black" />
            </div>
            <div className="heart">
              <FontAwesomeIcon icon={faHeart} className="text-black" />
            </div>
            <button
              className="text-xl md-5 p-3 px-5 rounded-lg font-custom text-black btn-primary bg-custom-yellow"
              // onClick={handleSearchClick}
            >
              View deal
            </button>
          </div>
        </div>
      </div>
    );
  }
  