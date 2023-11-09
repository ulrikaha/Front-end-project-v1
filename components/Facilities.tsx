'use client';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDog, faBolt, faUtensils, faWifi, faBed, faParking, faChair, faTv, faHandPaper, faCouch, faSoap } from '@fortawesome/free-solid-svg-icons';

export default function Facilities() {
    return (
        <div className='flex flex-wrap justify-around items-start w-11/12 mx-auto mt-12 bg-grey-100 p-4 border rounded shadow-lg font-lora'>
            <h3 className="pb-5 ml-10 font-lora font-bold text-xl">Facilities</h3>
            <div className="flex flex-wrap font-lora">
                <div className="w-full md:w-1/2 px-4 md:px-10">
                    <div className="flex items-center mb-3 md:mb-5 text-xl">
                        <FontAwesomeIcon icon={faDog} className="mr-3" />
                        <span>Pets allowed</span>
                    </div>
                    <div className="flex items-center mb-5 text-xl">

                       
                <FontAwesomeIcon icon={faUtensils} className="mr-3" />
                <span>Kitchen</span>
                 </div>
                <div className="flex items-center mb-5 text-xl">
            <FontAwesomeIcon icon={faBed} className="mr-3" />
                <span>King size bed</span>
                 </div>
            <div className="flex items-center mb-5 text-xl">
            <FontAwesomeIcon icon={faChair} className="mr-3" />
            <span>Private deck</span>
            </div>
            <div className="flex items-center mb-5 text-xl">
        <FontAwesomeIcon icon={faTv} className="mr-3" />
        <span>TV</span>
        </div>
        <div className="flex items-center mb-5 text-xl">
     <FontAwesomeIcon icon={faSoap} className="mr-3" />
    <span>Washing machine</span>
 </div>
</div>
<div className="w-full md:w-1/2 px-4 md:px-1">
<div className="flex items-center mb-3 md:mb-5 text-xl">
 <FontAwesomeIcon icon={faBolt} className="mr-3" />
<span>Charging station for electric vehicles</span>
</div>
<div className="flex items-center mb-5 text-xl">
        <FontAwesomeIcon icon={faWifi} className="mr-3" />
            <span>Free Wifi</span>
            </div>
     <div className="flex items-center mb-5 text-xl">
    <FontAwesomeIcon icon={faParking} className="mr-3" />
     <span>Private parking</span>
    </div>
    <div className="flex items-center mb-5 text-xl">
     <FontAwesomeIcon icon={faCouch} className="mr-3" />
    <span>Lounge</span>
     </div>
 <div className="flex items-center mb-5 text-xl">
<FontAwesomeIcon icon={faHandPaper} className="mr-3" />
    <span>Towels</span>
    </div>
    <div className="flex items-center mb-5 text-xl">
 <FontAwesomeIcon icon={faBed} className="mr-3" />
<span>Comfortable bedding</span>
                     </div>
                </div>
        </div>
    </div>
);
};
