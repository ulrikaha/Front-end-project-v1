'use client';

//import Image from 'next/image';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { faStar as faStarRegular, faHeart as faHeartRegular } from "@fortawesome/free-regular-svg-icons";
import Link from 'next/link';




type PackageCardProps = {
    selectedPackage: {
    imgUrl: string;
    cabinName: string;
    description: string;
    name: string;
    price: number;
    info: string;
    rating: number;
    category: string;
    cabinId: string;
};
 
}
    


export default function CabinCard({selectedPackage }: PackageCardProps) {

    return (

        <div className="flex justify-center my-3">
      <div className="border rounded-xl shadow-lg flex overflow-hidden">
        <div className="relative flex-none w-85">
        <img 
            src={selectedPackage.imgUrl} 
            alt={selectedPackage.name}
            width={400} // Set appropriate width
            height={400} // Set appropriate height
            style={{ objectFit: "cover" }}
            className="rounded-l-xl"
        />
        <div className="absolute top-2 right-2 text-center bg-white border rounded-xl shadow-md px-2 py-1 text-sm font-lora">
            {selectedPackage.category}
          </div>
        </div>

        <div className="p-4 flex flex-col justify-between flex-grow">
          <div className="flex justify-end">
            <FontAwesomeIcon icon={faHeartRegular} className="text-xl" />
          </div>
          
          <div className="text-lg font-bold">
            {selectedPackage.price} kr
          </div>

          <div>
            <div>{selectedPackage.cabinName}</div>
            <div>{selectedPackage.info}</div>
           <div>{selectedPackage.rating}</div>
           <div>
                        <FontAwesomeIcon icon={faStar} style={{color: "#e4a935",}} />
                        <FontAwesomeIcon icon={faStar} style={{color: "#e4a935",}} />
                        <FontAwesomeIcon icon={faStar} style={{color: "#e4a935",}} />
                        <FontAwesomeIcon icon={faStar} style={{color: "#e4a935",}} />
                        <FontAwesomeIcon icon={faStarRegular} style={{color: "#e4a935",}} />
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