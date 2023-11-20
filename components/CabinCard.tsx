'use client';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { faStar as faStarRegular, faHeart as faHeartRegular } from "@fortawesome/free-regular-svg-icons";
import Link from 'next/link';
import CabinCardMobile from "./CabinCardMobile";



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
       <div className="flex justify-center">
        
      <div className="w-[80%] h-[35%] p-0 border rounded-xl shadow-lg flex relative">
         <div className="sm:flex-none sm:mr-5 h-auto sm:h-full relative">
            <img 
            src={selectedPackage.imgUrl} 
            alt={selectedPackage.name} 
            className="object-cover w-full h-[100%] sm:w-[100%] sm:rounded-l-xl"
            />
            <div className="absolute top-0 right-0 w-[30%] sm:w-[30%] flex items-center justify-center text-center font-lora text-lg font-bold border rounded-xl shadow-lg bg-white mt-3 sm:mt-3 sm:mr-3">
              {selectedPackage.category}
            </div>
          </div>
          
             <div className="flex-grow p-4">
                <div className="flex-grow p-4 flex flex-col">
                    <div className="flex">
                        <h3 className="text-lg font-bold font-lora">{selectedPackage.name}</h3>
                    </div>
                    <div className="font-lora text-lg font-bold inline-block  max-w-[250px] sm:max-w-[150px] shadow-lg text-center border rounded-xl">
                        {selectedPackage.price} 
                        <span className="font-lora font-bold mr-1 ml-1">kr</span>
                        <span className="font-lora font-normal mr-1">per night</span>
                    </div>
                    <br />

                    <div className="absolute top-0 right-3 p-2 text-3xl">
                        <FontAwesomeIcon icon={faHeartRegular} className="w-6 h-6" />
                    </div>

                    <div>{selectedPackage.cabinName}</div>
                    <br />
                    <div className="mb-4">{Array.isArray(selectedPackage.info) ? selectedPackage.info.join(', ') : selectedPackage.info}</div>

                        
                    <div className="flex">
                        <div className="font-bold">{selectedPackage.rating}</div>
                        <div>
                        <FontAwesomeIcon icon={faStar} style={{color: "#e4a935",}} />
                        <FontAwesomeIcon icon={faStar} style={{color: "#e4a935",}} />
                        <FontAwesomeIcon icon={faStar} style={{color: "#e4a935",}} />
                        <FontAwesomeIcon icon={faStar} style={{color: "#e4a935",}} />
                        <FontAwesomeIcon icon={faStarRegular} style={{color: "#e4a935",}} />
                        </div>
                    </div>
                    
                    <div className="flex flex-end justify-end"> 
                    <Link href={`/cabins/${selectedPackage.cabinId}`} passHref>
                    <button
                    className="text-xl p-2 px-4 rounded-lg font-custom text-black bg-custom-yellow"
                        >
                    View deal
                    </button>
                    </Link>
                        </div>

                    
                    </div>
                      <CabinCardMobile selectedPackage={selectedPackage} />
                    </div>
                      
                        </div>
                        
                    
                         
                         </div>
    );
}
   