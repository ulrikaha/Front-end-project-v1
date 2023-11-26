'use client';


import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { faStar as faStarRegular, faHeart as faHeartRegular } from "@fortawesome/free-regular-svg-icons";
import Link from 'next/link';



export default function CabinCard2({selectedPackage }: PackageCardProps) {

    return (

<div className="flex justify-center my-3">
  <div className="border rounded-xl shadow-lg flex flex-col md:flex-row overflow-hidden relative">
    <div className="w-full md:w-1/3 lg:w-1/3 relative">
      <img
        src={selectedPackage.imgUrl}
        alt={selectedPackage.name}
        width={400} // Set appropriate width
        height={400} // Set appropriate height
        style={{ objectFit: "cover" , width: "100%", height: "100%" }}
        className="rounded-l-xl"
      />
        <div className="absolute top-2 right-9 text-center bg-white border rounded-xl shadow-md px-2 py-1 text-sm font-lora">
        {selectedPackage.category}
      </div>
      <div className="absolute top-2 right-2 text-center">
        <FontAwesomeIcon icon={faHeartRegular} className="text-xl" />
      </div>
    </div>

    <div className="p-4 flex flex-col justify-between flex-grow">

 <div className="text-lg font-bold bg-white text-center border rounded-xl shadow-md px-2 py-1 font-lora">
        {selectedPackage.price} kr per night
      </div>

      <div>
        <div className="my-2">{selectedPackage.cabinName}</div>
        <div className="my-1">{selectedPackage.info.join(" ,")}</div>
        <div className="my-1">{selectedPackage.rating}</div>
        <div>
          <FontAwesomeIcon icon={faStar} style={{ color: "#e4a935" }} />
          <FontAwesomeIcon icon={faStar} style={{ color: "#e4a935" }} />
          <FontAwesomeIcon icon={faStar} style={{ color: "#e4a935" }} />
          <FontAwesomeIcon icon={faStar} style={{ color: "#e4a935" }} />
          <FontAwesomeIcon icon={faStarRegular} style={{ color: "#e4a935" }} />
        </div>
      </div>

     

      <div className="flex justify-end">
        <Link href={`/cabins/${selectedPackage.cabinId}`} passHref>
          <button className="text-xl p-2 px-4 rounded-lg font-custom text-black bg-custom-yellow">
            View Deal
          </button>
        </Link>
      </div>
    </div>
  </div>
</div>


  );
};