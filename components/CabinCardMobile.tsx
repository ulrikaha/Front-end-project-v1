import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {  faHeart as faHeartRegular } from "@fortawesome/free-regular-svg-icons";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { faStar as faStarRegular } from "@fortawesome/free-regular-svg-icons";
import Link from 'next/link';




const CabinCardMobile = ({ selectedPackage }: PackageCardProps) => {
  return (
    <div className="w-full border rounded-xl shadow-lg mb-4">
      <div className="relative">
        <img
          src={selectedPackage.imgUrl}
          alt={selectedPackage.name}
          className="object-cover w-full h-[200px] rounded-t-xl"
        />

        {/* Heart icon */}
        <div className="absolute top-0 right-0 p-2 flex items-center justify-center">
          <div className="rounded-full bg-white w-10 h-10 flex items-center justify-center border">
            <FontAwesomeIcon icon={faHeartRegular} className="w-6 h-6 text-black" />
          </div>
        </div>

        {/* Category */}
        <div className="absolute bottom-8 left-0 ml-2 w-full text-center font-lora text-lg font-bold border rounded-xl shadow-lg bg-white mt-2 sm:mt-3 sm:mr-3">
          {selectedPackage.category}
        </div>

        {/* Price */}
        <div className="absolute bottom-0 left-0 w-full text-center font-lora text-lg font-bold border rounded-xl shadow-lg bg-white mt-2 sm:mt-3 sm:mr-3">
          {selectedPackage.price}
          <span className="font-lora font-bold mr-1 ml-1">kr</span>
          <span className="font-lora font-normal mr-1">per night</span>
        </div>
      </div>

      <div className="p-4">
        {/* Rest of the content */}
        <div className="flex flex-col">
          <h3 className="text-lg font-bold font-lora mb-2">{selectedPackage.cabinName}</h3>
          <div className="mb-2">{Array.isArray(selectedPackage.info) ? selectedPackage.info.join(', ') : selectedPackage.info}</div>

          <div className="flex items-center">
            <div className="font-bold">{selectedPackage.rating}</div>
            <div className="ml-2">
              <FontAwesomeIcon icon={faStar} style={{ color: "#e4a935" }} />
              <FontAwesomeIcon icon={faStar} style={{ color: "#e4a935" }} />
              <FontAwesomeIcon icon={faStar} style={{ color: "#e4a935" }} />
              <FontAwesomeIcon icon={faStar} style={{ color: "#e4a935" }} />
              <FontAwesomeIcon icon={faStarRegular} style={{ color: "#e4a935" }} />
            </div>
          </div>

          <div className="mt-2 text-center">
            <Link href={`/cabins/${selectedPackage.cabinId}`} passHref>
              <button className="text-lg p-2 px-4 rounded-lg font-custom text-black bg-custom-yellow">
                View deal
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CabinCardMobile;

  